// backend/models/Test.js
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Test name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Test description is required"],
    },

    price: {
      type: Number,
      required: [true, "Test price is required"],
      min: [0, "Price cannot be negative"],
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    // 🔍 Used by search filtering
    keywords: {
      type: [String], // e.g. ["glucose", "sugar test", "diabetes"]
      default: [],
    },

    // For admin UI and card thumbnails
    imageUrl: {
      type: String,
      default: null,
    },

    // Whether the test is active or removed
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for fast search
testSchema.index({ name: "text", description: "text", keywords: "text" });

module.exports = mongoose.model("Test", testSchema);
