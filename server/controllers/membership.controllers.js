const Membership = require("../models/Membership.model");

exports.createMembership=async(req,res,next)=>{
  try{
    const{name,description,price,timeDuration}=req.body;

    if(!name || !description || !price || !timeDuration){
      return next(new Error("All fileds are required"))
    }

    const membership=await Membership.create({
      ...req.body
    })

    res.status(200).send({
      success: true,
      message:"membership created successfully",
      data: membership  
    })



  }catch(err){
    next(err)
  }
}