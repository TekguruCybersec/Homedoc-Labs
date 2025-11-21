// backend/controllers/testController.js
const Test = require("../models/Test");
const User = require("../models/User");

//
// Helper: Check Admin Role
//
async function ensureAdmin(req, res) {
  const clerkId = req.auth?.userId;

  if (!clerkId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = await User.findOne({ clerkId });
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }

  return user;
}

//
// Get all tests (Search + Filter)
//
const getTests = async (req, res, next) => {
  try {
    const { search, category } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { keywords: { $regex: search, $options: "i" } },
      ];
    }

    if (category) query.category = category;

    const tests = await Test.find(query).sort({ createdAt: -1 });
    res.json(tests);
  } catch (err) {
    next(err);
  }
};

//
// Get single test
//
const getTestById = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });

    res.json(test);
  } catch (err) {
    next(err);
  }
};

//
// Create test (Admin only)
//
const createTest = async (req, res, next) => {
  try {
    const isAdmin = await ensureAdmin(req, res);
    if (!isAdmin) return;

    const { name, price, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        message: "Name, price, and category are required",
      });
    }

    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (err) {
    next(err);
  }
};

//
// Update test (Admin only)
//
const updateTest = async (req, res, next) => {
  try {
    const isAdmin = await ensureAdmin(req, res);
    if (!isAdmin) return;

    const updated = await Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Test not found" });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

//
// Delete test (Admin only)
//
const deleteTest = async (req, res, next) => {
  try {
    const isAdmin = await ensureAdmin(req, res);
    if (!isAdmin) return;

    const removed = await Test.findByIdAndDelete(req.params.id);

    if (!removed) return res.status(404).json({ message: "Test not found" });

    res.json({ message: "Test deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
};
