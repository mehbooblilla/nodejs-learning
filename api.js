const express = require('express')
const dbConnect= require('./mongodb')
const mongodb=require('mongodb')
const app=express()
app.use(express.json())
//GET DATA API
app.get('/getproducts',async(req,res)=>{
    const collection=await dbConnect()
    const data=await collection.find().toArray()
    console.log(data);
    res.send(data)

})

//POST DATA API
app.post('/addproduct',async(req,res)=>{
console.log(req.body);
const collection=await dbConnect()
let result=await collection.insertOne(req.body)
    res.send(req.body)
})

//UPDATE DATA API
app.put('/updateproduct',async(req,res)=>{
    console.log(req.body);
    const collection=await dbConnect()
    let result=await collection.updateOne({name:'poco x3'},{ $set:{brand:req.body.brand}})
        res.send(req.body)
    })

//DELETE DATA API
app.delete('/:id',async(req,res)=>{
    console.log(req.body);
    const collection=await dbConnect()
    let result=await collection.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
        res.send(req.body)
    })

app.listen(5000)