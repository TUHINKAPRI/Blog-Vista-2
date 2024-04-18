const express = require("express");
const { send_otp, singup, signin } = require("../controllers/auth.controllers");
const upload = require("../middleware/fileUpload");

const authRouter = express.Router();

authRouter.post("/send-otp", send_otp);
authRouter.post("/sign-up", singup);
authRouter.post("/sign-in", signin);

module.exports = authRouter;
