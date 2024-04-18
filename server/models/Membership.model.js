const mongoose=require("mongoose");


const membershipSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  timeDuration:{
    type:String,
    required:true
  },
  user:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }]
},{timestamps:true})


const Membership=mongoose.model("Membership",membershipSchema)


module.exports = Membership