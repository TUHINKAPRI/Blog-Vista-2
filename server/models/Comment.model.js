


const mongoose = require('mongoose');


const commentSchema=new mongoose.Schema({
content  :{
    type:String,
    required:true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  post:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Post"
  },
  parentComment:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
    default:null,
  },
  replies:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment",
      
    }
  ]

},{timestamps:true});


const Comment=mongoose.model("Comment",commentSchema);


module.exports=Comment