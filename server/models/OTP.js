const mongoose=require("mongoose");


const otpSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  otp:{
    type:Number,
    required:true,
    expires:3600
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
})



const OTP=mongoose.model("OTP",otpSchema);

module.exports=OTP;