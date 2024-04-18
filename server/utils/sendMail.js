const nodemailer = require("nodemailer");

exports.sendMail = async (message,user) => {
  try {
    const transporter = nodemailer.createTransport({
      host:  process.env.MAIL_HOST,
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER, // sender address
      to: user, // list of receivers
      subject: "OTP verification",
      text: message,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err)
  }
};
