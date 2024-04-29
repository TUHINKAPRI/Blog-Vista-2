const jwt = require("jsonwebtoken");

exports.verifyRefreshToken = async (refreshToken) => {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, process.env.JWT_SECRECT, (err, decoded) => {
        if (err) {
          console.log(err);
          reject({ message: "Token not valid" });
        }
        resolve({
          decoded,
          message: "Valid refresh token",
        });
      });
    });
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
