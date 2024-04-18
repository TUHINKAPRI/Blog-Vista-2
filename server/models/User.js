const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
      required: true,
    },
    membership: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MembershipInfo",
    },

    bookmarks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bookmark",
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
