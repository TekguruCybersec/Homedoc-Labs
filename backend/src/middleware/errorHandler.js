// backend/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error("🔥 Backend Error:", err);

  // Default values
  const statusCode = err.statusCode || err.status || 500;
  let message = err.message || "Internal server error";

  //
  // Mongoose Validation Errors
  //
  if (err.name === "ValidationError") {
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(", ");

    return res.status(400).json({
      status: "fail",
      message,
    });
  }

  //
  // MongoDB Duplicate Key (code = 11000)
  //
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      status: "fail",
      message: `${field} already exists`,
    });
  }

  //
  // Invalid ObjectId (CastError)
  //
  if (err.name === "CastError") {
    return res.status(400).json({
      status: "fail",
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  //
  // Clerk / JWT Errors → sanitize them
  //
  if (
    err.name === "TokenError" ||
    err.message?.toLowerCase().includes("jwt") ||
    err.message?.toLowerCase().includes("token") ||
    err.message?.toLowerCase().includes("clerk")
  ) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired authentication token",
    });
  }

  //
  // Default Response
  //
  return res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    message,
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
      error: err,
    }),
  });
};

module.exports = errorHandler;
