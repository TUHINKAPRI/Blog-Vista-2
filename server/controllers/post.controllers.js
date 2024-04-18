const upload = require("../middleware/fileUpload");
const Post = require("../models/Post.models");




exports.getAllPost = async (req, res, next) => {
  try {
    const filter = {};
    const posts = await Post.find(filter);

    res.status(200).json({
      success: true,
      message: "Success  ",
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

exports.singlePost=async(req,res,next)=>{
  try{
    const {id}=req.params;
    const post=await Post.findOne({_id:id});

    res.status(200).json({
      success:true,
      message:"Post fetch successfully",
      data:post
    })

  }catch(err){
    next(err);
  }
}

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, tags, category, thumbnail, paid } = req.body;
    console.log(req.body);
    console.log(req.user._id);
    console.log(req.files);
    if (!title || !content || !tags || !category || !paid) {
      const error = new Error("Both fields are required");
      return next(error);
    }

    const uploadThumbnail = upload.single("thumbnail");

    const post = await Post.create({
      title: title,
      author: req.user._id,
      content,
      tags: JSON.parse(tags),
      category: category,
      thumbnail: req?.files?.filename,
      paid,
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
    if (req.files) {
      upload.single("thumbnail");
    }
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          ...req.body,
          ...(req.files && { thumbnail: req.files.filename }),
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
