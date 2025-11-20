// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true }, // Clerk user id
    email: { type: String },
    name: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // any other fields you want to store locally
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
