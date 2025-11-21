// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true, // Faster lookups by Clerk ID
    },

    email: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: false,
    },

    imageUrl: {
      type: String, // Clerk profile image
      required: false,
    },

    phone: {
      type: String,
      required: false, // Optional: Clerk phone number if enabled
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // if you ever need a local cart, address, appointments, etc., add here
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
