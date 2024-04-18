const mongoose = require("mongoose");

const membershipInfoSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    membershipLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Membership",
    },
    subscriptionStatus: {
      type: String,
      enum: ["active", "expired", "inactive"],
      default: "inactive",
    },
    subscriptionStartDate: {
      type: Date,
    },
    subscriptionEndDate: {
      type: Date,
    },
    billingInformation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const membershipInfo = mongoose.model("MembershipInfo",membershipInfoSchema);


module.exports = membershipInfo