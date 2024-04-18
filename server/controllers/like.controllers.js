const Post = require("../models/Post.models");



exports.likeAPost=async(req,res,next)=>{
  try{
    const userId=req.user._id
    const postId=req.body;

    const findPost=await Post.findOne({_id:postId});
    
    if(!findPost){
      return next(new Error('No post found'))
    }

    const userIndex=findPost.likes.findIndex((ele)=>ele===userId);
    if(userIndex>-1){
      return next(new Error("You already like this post"))
    }
    findPost.likes.push(userId);
    await findPost.save();

    return res.status(200).json({
      success: true,
      message:"Like successfully"
    })


  }catch(err){
    next(err);
  }
}


exports.dislikeAPost=async(req,res,next)=>{
  try{
    const userId=req.user._id
    const postId=req.body;

    const findPost=await Post.findOne({_id:postId});
    
    if(!findPost){
      return next(new Error('No post found'))
    }

    const userIndex=findPost.likes.findIndex((ele)=>ele===userId);
    if(userIndex===-1){
      return next(new Error("You neeed to like this post "))
    }
    findPost.likes.splice(userIndex, 1);
    await findPost.save();
 res.status(200).json({
  success: true,
  message:"Dislike successfully"
 })

    return res.status(200).json({
      success: true,
      message:"Like successfully"
    })
  }catch(err){
    next(err);
  }
}