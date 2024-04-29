const jwt = require("jsonwebtoken");
exports.authGuard = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    jwt.verify(token, process.env.JWT_SECRECT, (err, decoded) => {
      if (err) {
        const error = new Error("Not Authorized");
        error.statusCode = 403;
        next(error);
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

exports.verifyMembership = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if(token){
      jwt.verify(token, process.env.JWT_SECRECT, (err, decoded) => {
        if (err) {
          const error = new Error("Not Authorized");
          error.statusCode = 403;
          next(error);
        }
        req.user = decoded;
        next();
      });
    }else{
      next()
    }
    
  } catch (err) {
    next(err);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      const error = new Error("Only for admin ");
      next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
};
