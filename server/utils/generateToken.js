const jwt = require("jsonwebtoken");

exports.generateToken = async (payload, key) => {
  try {
    const accessToken = jwt.sign(payload, key, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, key, { expiresIn: "30d" });
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    console.log(err);
    Promise.reject(err);
  }
};
