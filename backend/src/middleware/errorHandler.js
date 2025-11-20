// backend/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  // Default values
  let status = err.status || 500;
  let message = err.message || "Server error";

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    status = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // Handle duplicate key errors (MongoDB)
  if (err.code === 11000) {
    status = 400;
    const duplicatedField = Object.keys(err.keyValue)[0];
    message = `${duplicatedField} already exists`;
  }

  // Handle cast errors (invalid IDs, etc.)
  if (err.name === "CastError") {
    status = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // In production, hide stack traces
  const response = {
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  };

  res.status(status).json(response);
};

module.exports = errorHandler;
