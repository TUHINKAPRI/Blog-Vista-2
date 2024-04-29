const otpGenerator = require("otp-generator");
const User = require("../models/User");
const { sendMail } = require("../utils/sendMail");
const OTP = require("../models/OTP");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const Bookmark = require("../models/Bookmark.model");
const { verifyRefreshToken } = require("../utils/verifyRefreshToken");
const jwt=require('jsonwebtoken')
exports.send_otp = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return next(new Error("both fields are required"));
    }
    const ifExist = await User.findOne({ email: email });
    if (ifExist) {
      return next(new Error("User already exists"));
    }
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    await sendMail(otp, email);

    await OTP.create({
      email: email,
      otp: otp,
    });

    res.status(200).json({
      success: true,
      message: "OTP send successfully in your mail",
      otp,
    });
  } catch (err) {
    const error = new Error(err);
    error.statusCode = 500;
    next(error);
  }
};

exports.singup = async (req, res, next) => {
  try {
    const { email, password, re_password, name, otp } = req.body;
    if (!email || !password || !re_password || !otp) {
      throw new Error("Both field are required");
    }
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      throw new Error("user already exists");
    }

    if (password !== re_password) {
      throw new Error("Password does not match");
    }
    const findOtp = await OTP.findOne({ email: email }).sort({ createdAt: -1 });
    console.log(findOtp);
    if (!findOtp) {
      throw new Error("OTP not found");
    }
    if (findOtp.otp !== parseInt(otp)) {
      throw new Error("Otp does not match");
    }
    const hashPassword = await bcryptjs.hash(password, 10);

    const bookmark = await Bookmark.create({
      posts: [],
    });

    const newUser = await User.create({
      email: email,
      password: hashPassword,
      name: name,
      profile_picture: `https://api.dicebear.com/7.x/initials/svg?seed=${name} `,
      bookmarks: bookmark._id,
    });

    const { password: pass, ...rest } = newUser._doc;

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: rest,
    });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      throw new Error("Both fields are required");
    }
    const ifExist = await User.findOne({ email: email }).populate([
      {
        path: "bookmarks",
      },
      {
        path: "membership",
      },
    ]);
    if (!ifExist) {
      throw new Error("User does not exist");
    }

    const isMatch = await bcryptjs.compare(password, ifExist.password);
    console.log(isMatch);
    if (!isMatch) {
      throw new Error("Password does not match");
    }
    const payload = {
      _id: ifExist._id,
      role: ifExist.role,
      email: ifExist.email,
    };

    const { accessToken, refreshToken } = await generateToken(
      payload,
      process.env.JWT_SECRECT
    );

    res.status(200).json({
      success: true,
      message: "User login successfully",
      data: ifExist,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
};

exports.getNewAccessToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      const err = new Error("access token not found");
      err.status = 403;
      return next(err);
    }
    const { decoded } = await verifyRefreshToken(refreshToken);
    const accessToken = jwt.sign(
      { _id: decoded._id, role: decoded.role, email: decoded.email },
      process.env.JWT_SECRECT,{expiresIn:"15m"}
    );
    res.status(200).json({
      success: true,
      message: "Token create successfully",
      accessToken
    });
  } catch (err) {
    console.log(err);
    next(err)
  }
};
