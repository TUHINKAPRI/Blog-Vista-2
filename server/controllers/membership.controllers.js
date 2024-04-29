const { razorpay } = require("../config/razorpay_config");
const Membership = require("../models/Membership.model");
const crypto=require('crypto');
const membershipInfo = require("../models/membdershipInfo.modle");
const User = require("../models/User");
exports.createMembershipData = async (req, res, next) => {
  try {
    const { name, description, price, timeDuration } = req.body;

    if (!name || !description || !price || !timeDuration) {
      return next(new Error("All fileds are required"));
    }

    const membership = await Membership.create({
      ...req.body,
    });

    res.status(200).send({
      success: true,
      message: "membership created successfully",
      data: membership,
    });
  } catch (err) {
    next(err);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const options = {
      amount: 999 * 100,
      currency: "INR",
      receipt: "any unique id for every order",
      payment_capture: 1,
      notes: {
        user: req.user._id,
      },
    };

    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    console.log(req.body);
    const userId=req.user._id
    const membershipId="662b4e1881ffaafdbc47e767"
    const generated_signature = crypto.createHmac(
      "sha256",
      process.env.RAZORPAY_KEY_SECRECT
    );
    console.log(generated_signature);
    generated_signature.update(razorpay_order_id + "|" + razorpay_payment_id);
    if (generated_signature.digest("hex") === razorpay_signature) {
      

      const membership=await membershipInfo.create({
        userId:userId,
        membershipLevel:membershipId,
        subscriptionStatus:"active",
        subscriptionStartDate:new Date(),
        subscriptionEndDate: new Date() ,
        billingInformation:razorpay_payment_id
      });

      const user=await User.findByIdAndUpdate({_id:userId},{
        $set:{
          membership:membership._id
        }
      })



      res.status(200).json({
        success:true,
        message:'Purchase successfully'
      })
    }

  } catch (err) {
    console.log(err);
    next(err);
  }
};
