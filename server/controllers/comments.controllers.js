const Comment = require("../models/Comment.model");
const Post = require("../models/Post.models");

exports.createComment = async (req, res, next) => {
  try {
    const { content, parentCommentId } = req.body;
    const { postId } = req.params;
    const userId = req.user?._id;

    if (!content) {
      return next(new Error("Comment is required"));
    }
    const isExist = await Post.findOne({ _id: postId });
    if (!isExist) {
      return next(new Error("Post not found"));
    }

    const parentComments = parentCommentId
      ? await Comment.findOne({ _id: parentCommentId })
      : null;

    const comment = await Comment.create({
      user: userId,
      post: postId,
      content: content,
      parentComment: parentCommentId,
    });

    if (parentComments) {
      parentComments.replies.push(comment._id);
      await parentComments.save();
    }
    if(!parentComments) {
      isExist.comments.push(comment._id);
      await isExist.save()
    }

    res.status(200).json({
      success: true,
      message: "comment created successfully",
      data: comment,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllCommentsForAPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const filter = {};

    if (postId) {
      filter.post = postId;
    }

    const comments = await Comment.find(filter)
      .populate([
        { path: "user" },
        {
          path: "parentCommnet",
          populate: [
            {
              path: "user",
            },
          ],
        },
        { path: "replies" },
        { path: "post" },
      ])
      .sort({ createdAt: "desc" });
    res.status(200).json({
      success: true,
      messgae: "success",
      data: comments,
    });
  } catch (err) {
    next(err);
  }
};

exports.editComment = async (req, res, next) => {
  try {
    const { commentId, postId } = req.params;
    const { content } = req.body;
    const userId = req.user._id;
    if (!content) {
      return next(new Error("content is Nedded"));
    }
    const isExistComment = await Comment.findOne({ _id: commentId });
    if (!isExistComment) {
      return next(new Error("Comment not found"));
    }



    if (isExistComment.user.toString() !== userId) {
      return next(new Error("You cannot edit  this comment"));
    }

    isExistComment.content = content;

    await isExistComment.save();

    res.status(200).json({
      success: true,
      message: "Comment edited successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const userId = req.user._id;
    const isExistComment = await Comment.findOne({ _id: commentId });
    if (!isExistComment) {
      return next(new Error("Comment not found"));
    }

    if (!isExistComment.parentComment) {
      await Comment.deleteMany({ parentComment: commentId });
      await Comment.findByIdAndDelete({ _id: commentId });
      return res.status(200).json({
        success: true,
        message: "Comment deleted successfully",
      });
    }

    const parentComment = await Comment.findByIdAndUpdate(
      { _id: isExistComment.parentComment },
      {
        $pull: {
          replies: commentId,
        },
      },
      { new: true }
    );

    await Comment.findByIdAndDelete({ _id: commentId }, { new: true });

    res.status(2000).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
