const  dbConnect = require ("./mongodb");
// GET DATA FROM MONGODB
const main =async()=>{
    let data=await dbConnect()
    data=await data.find().toArray()
    console.log(data)
}
main()
// const http=require('http')
// const express=require('express')
// const app=express()
// const reqFilter=(req,res,next)=>{
//     console.log('middleware test');
//     if(!req.query.age){
//         res.send("Please Provide Age")
//     }else  if(req.query.age<18){
//         res.send("You can not access this page")
//     }
//     else{
//         next()
//     }
    
// }
// app.use(reqFilter)
// // http.createServer((req,res)=>{
// //     res.write("hello world")
// //     res.end()
// // }).listen(4500)
// // console.log('hello dlsfjd dfkjsfdl ');
// app.get('',(req,res)=>{
//     res.send("this is homePage")
// })
// app.get('/about',(req,res)=>{
//     res.send("this is aboutPage")
// })
// app.listen(5000)