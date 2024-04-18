const { response } = require("express");
const Category = require("../models/Category.model");

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return next(new Error("Name is required"));
    }
    const category = await Category.create({
      name,
    });
    res.status(200).json({
      success: true,
      message: "Category created is successfully",
      data: category,
    });
  } catch (err) {
    next(err);
  }
};


exports.getAllCategory=async(req,res,next)=>{
  try{
    const category=await Category.find({});
    res.status(200).json({
      success:true,
      data: category
    })

  }catch(err){
    next(err)
  }
}

exports.updateCategory=async(req,res,next)=>{
  try{
    const {name}=req.body;
    const {id}=req.params
    const updatedCategory=await Category.findByIdAndUpdate({_id:id},{
      $set:{
        name
      }
    },{new:true});
    response.status(200).json({
      success:true,
      message:"Category updated successfully",
      data:updatedCategory
    })

  }catch(err){
    next(err);
  }
}


exports. deleteCategory=async(req,res,next)=>{
  try{
    const {id}=req.params
    const category=await Category.findByIdAndDelete({
      _id:id
    },{new:true});
    res.status(200).json({
      success:true,
      data:category,
      message: 'Category deleted successfully'
    })

  }catch(err){
    next(err);
  }
}
