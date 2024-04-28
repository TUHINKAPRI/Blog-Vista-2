const Bookmark = require("../models/Bookmark.model");
const Post = require("../models/Post.models");
const User = require("../models/User");

exports.addToBookmarks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { postId } = req.body;
    const findPost = await Post.findOne({ _id: postId });
    if (!findPost) {
      return next(new Error("No post found"));
    }
    const user = await User.findOne({ _id: userId });

    const bookmarks = await Bookmark.findOne({ _id: user.bookmarks });

    const isPresent = bookmarks.posts.includes(postId);
    if (isPresent) {
      return next(new Error("already presrnt in your bookmarks"));
    }
    bookmarks.posts = [...bookmarks.posts, postId];
    await bookmarks.save();

    res.status(200).json({
      success: true,
      message: "successfully add to bookmark  ",
      data:{
        _id:postId
      }
    
    });
  } catch (err) {
    next(err);
  }
};

exports.removeToBookmarks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { postId } = req.body;
    const findPost = await Post.findOne({ _id: postId });
    if (!findPost) {
      return next(new Error("No post found"));
    }
    const user = await User.findOne({ _id: userId });

    const bookmarks = await Bookmark.findOne({ _id: user.bookmarks });

    const bookmarkIndex = bookmarks.posts.findIndex((ele)=>ele===postId) ;
    if (!bookmarkIndex ) {
      return next(new Error("Post is not present in your bookmarks list"));
    }
    bookmarks.posts.splice(bookmarkIndex, 1);
    await bookmarks.save();

    res.status(200).json({
      success: true,
      message: "successfully  remove from bookmarks ",
      data:{
        _id:postId
      }
    
    });
  } catch (err) {
    next(err);
  }
};


exports.getUserBookmarks=async(req,res,next)=>{
  try{
    const userId=req.user._id;
    const findUser=await User.findById({_id:userId});
    const findBookMarks=await Bookmark.findById({_id:findUser.bookmarks}).populate({
      path:'posts',
      populate:{
        path:"author"
      }
    })

    res.status(200).json({
      success:true,
      message:'find Successfully',
      data:findBookMarks
    })


  }catch(err){
    next(err)
  }
}
