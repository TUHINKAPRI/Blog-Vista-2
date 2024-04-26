const { razorpay } = require("../config/razorpay_config");
const Membership = require("../models/Membership.model");

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
      amount: 99900,
      currency: "INR",
      receipt: "any unique id for every order",
      payment_capture: 1,
      notes: {
        user: req.user._id,
      },
    };

    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
