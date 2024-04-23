const upload = require("../middleware/fileUpload");
const Post = require("../models/Post.models");
const { uploadImage } = require("../utils/uploadToCloudinary");




exports.getAllPost = async (req, res, next) => {
  try {
    const filter = {};
    const posts = await Post.find(filter).populate();

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
    const { title, content, tags, category,description, paid } = req.body;
    if (!title || !content || !tags || !category || !req.file || !description ) {
      const error = new Error("Both fields are required");
      return next(error);
    }
    const response=await uploadImage(req.file.path)

    const post = await Post.create({
      title: title,
      author: req.user._id,
      content,
      tags: JSON.parse(tags),
      category: category,
      thumbnail:response.secure_url,
      paid,
      description
    });
    res.status(200).json({
      success: true,
      message: "post created successfully",
      data:post,
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
