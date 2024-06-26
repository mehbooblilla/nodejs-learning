const  dbConnect = require ("./mongodb");


const insert=async()=>{
    console.log('Insert function');
    const collection=await dbConnect()
    const data=collection.insertOne(
        {
            name:'oneplus 12',
            price:'200000',
            brand:'oneplus'
        }
      
    )
    // const deleteData=collection.deleteOne({name:'oneplus 13'})
}

insert()