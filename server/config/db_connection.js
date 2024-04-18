const mongoose=require("mongoose");


exports.db_connction=async()=>{
  try{
      await mongoose.connect(process.env.MONGODB_URL)
      console.log("connection is successfully")
  }catch(err){
    console.log(err);
  }
}