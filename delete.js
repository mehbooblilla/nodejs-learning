const  dbConnect = require ("./mongodb");


const update=async()=>{
    console.log('delete function');
    const collection=await dbConnect()
    
    const deleteData=await collection.deleteMany({name:'oneplus 12'})
    console.log(deleteData);
}

update()