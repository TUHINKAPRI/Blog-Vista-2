const User = require("../models/User");
const { uploadImage } = require("../utils/uploadToCloudinary");

exports.updateProfilePicture = async (req, res, next) => {
  try {
    const response = await uploadImage(req.file.path);

    const userData = await User.findByIdAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          profile_picture: response.secure_url,
        },
      },
      { new: true }
    );
    const {password:pass,...rest}=userData._doc
    res.status(200).json({
      success: true,
      message: "profile upload successfully",
      data: rest,
    });
  } catch (err) {}
};
