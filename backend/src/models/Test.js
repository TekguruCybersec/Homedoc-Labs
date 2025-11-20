// backend/models/Test.js
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String }, // optional: e.g. "Blood Test"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
