const mongoose = require("mongoose");


const paymentSchema=new mongoose.Schema({
  transection_id:{
    type:String,
    required:true,},
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    membership_name:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Membership"
    },

},{timestamps:true})


const Payment=mongoose.model("Payment",paymentSchema);

module.exports=Payment
