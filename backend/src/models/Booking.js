// backend/models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // Clerk user ID

    tests: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true }
    ],

    totalPrice: { type: Number, required: true },

    appointmentDate: { type: Date, required: true },

    status: {
      type: String,
      enum: ["pending", "approved", "completed"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
