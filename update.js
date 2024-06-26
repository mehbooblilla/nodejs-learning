const  dbConnect = require ("./mongodb");


const update=async()=>{
    console.log('update function');
    const collection=await dbConnect()
    const data=await collection.updateMany(
        {name:'oneplus 12'},
        {
           $set:{price:'215000'}
        }
      
    )
    console.log(data);
    // const deleteData=collection.deleteOne({name:'oneplus 13'})
}

update()