const {MongoClient}= require('mongodb')

const url ='mongodb://localhost:27017'
const client=new MongoClient(url)

 async function dbConnect(){
    let result=await client.connect()
 const db= result.db('e-commerce')
   return db.collection('products')
   
    // let response=await collection.find({name:'poco x3 '}).toArray()
    // console.log(response)
    // return 
}
module.exports=dbConnect;