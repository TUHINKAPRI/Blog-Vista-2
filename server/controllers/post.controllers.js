const upload = require("../middleware/fileUpload");
const Post = require("../models/Post.models");
const User = require("../models/User");
const { uploadImage } = require("../utils/uploadToCloudinary");

exports.getAllPost = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const posts = await Post.find({
      ...filter,
      ...(req.query.search && {
        $or: [
          { title: { $regex: req.query.search, $options: "xi" } },
          { tags: { $regex: req.query.search, $options: "xi" } },
        ],
      }),
    }).populate([
      {
        path: "author",
        select: ["profile_picture", "name"],
      },
      {
        path: "category",
        select: ["name"],
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Success  ",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

exports.singlePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req?.user?._id;

    let user;
    if (userId) {
      user = await User.findById({ _id: userId });
    }

    const post = await Post.findOne({ _id: id }).populate([
      {
        path: "category",
        select: ["name"],
      },
      {
        path: "author",
        select: ["name", "profile_picture"],
      },
      {
        path: "comments",
        populate: {
          path: "user",
        },
      },
    ]);

    if (!post) {
      const err = new Error("Post not found");
      err.status = 404;
      next(err);
    }

    if (!post?.paid) {
      return res.status(200).json({
        success: true,
        message: "successfully fetch blog details",
        data: post,
      });
    }
    if(post.author._id.toString()===userId){
      return res.status(200).json({
        success: true,
        message: "successfully fetch blog details",
        data: post,
      });
    }
    if (user) {
      if (user?.membership) {
        return res.status(200).json({
          success: true,
          message: "successfully fetch",
          data: post,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Need To Purchase membership",
          data:null
        });
      }
    } else {
      return res.status(200).json({
        success: true,
        message: "Need To Login or Purchase membership",
        data:null
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, tags, category, description, paid } = req.body;
    if (!title || !content || !tags || !category || !req.file || !description) {
      const error = new Error("Both fields are required");
      return next(error);
    }
    const response = await uploadImage(req.file.path);

    const post = await Post.create({
      title: title,
      author: req.user._id,
      content,
      tags: JSON.parse(tags),
      category: category,
      thumbnail: response.secure_url,
      paid,
      description,
    });
    res.status(200).json({
      success: true,
      message: "post created successfully",
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    let response;
    if (req.file) {
      response = await uploadImage(req.file.path);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          tags: JSON.parse(req.body.tags),
          content: req.body.content,
          category: req.body.category,

          ...(req.file && { thumbnail: response.secure_url }),
        },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletePost = await Post.findByIdAndDelete({ _id: id }, { new: true });
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: deletePost,
    });
  } catch (err) {
    next(err);
  }
};
