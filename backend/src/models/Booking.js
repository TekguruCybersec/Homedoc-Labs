// backend/models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true, // Clerk User ID
      index: true,
    },

    tests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
        required: true,
      },
    ],

    // Optional: If you later add wellness packages
    packages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "in-progress", "completed", "cancelled"],
      default: "pending",
      index: true,
    },

    // For at-home sample collection (optional but useful)
    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

// Index for faster admin filtering
bookingSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Booking", bookingSchema);
