exports.errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 400;
console.log(err.stack)
 return res.status(statusCode).json({
    success: false,
    message: err.message,
    status:statusCode
    // stack:  err.stack,
    // err:err
  });
};
