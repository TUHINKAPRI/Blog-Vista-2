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

    const bookmark = await findOne({ _id: user.bookmarks });

    const isPresent = bookmark.posts.includes(postId);
    if (isPresent) {
      return next(new Error("already presrnt in your bookmarks"));
    }
    bookmark.posts = [...bookmark.posts, postId];
    await bookmark.save();

    res.status(200).json({
      success: true,
      message: "Bookmarks updated successfully",
    
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

    const bookmark = await findOne({ _id: user.bookmarks });

    const bookmarkIndex = bookmark.posts.findIndex((ele)=>ele===postId) ;
    if (!bookmarkIndex ) {
      return next(new Error("Post is not present in your bookmarks list"));
    }
    bookmark.posts.splice(bookmarkIndex, 1);
    await bookmark.save();

    res.status(200).json({
      success: true,
      message: "Bookmarks updated successfully",
    
    });
  } catch (err) {
    next(err);
  }
};
