const { updateProfilePicture, getUserPosts } = require("../controllers/user.controllers");
const { authGuard } = require("../middleware/auth");
const upload = require("../middleware/fileUpload");

const userRouter = require("express").Router();

userRouter.post(
  "/update-profile-picture",
  upload.single("profile_picture"),
  authGuard,
  updateProfilePicture
);

userRouter.get('/get-user-posts',authGuard,getUserPosts)

module.exports = userRouter;
