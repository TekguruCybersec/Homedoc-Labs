// backend/controllers/testController.js
const Test = require("../models/Test");

const getTests = async (req, res, next) => {
  try {
    const tests = await Test.find().sort({ createdAt: -1 });
    res.json(tests);
  } catch (err) {
    next(err);
  }
};

const getTestById = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.json(test);
  } catch (err) {
    next(err);
  }
};

const createTest = async (req, res, next) => {
  try {
    const newTest = await Test.create(req.body);
    res.status(201).json(newTest);
  } catch (err) {
    next(err);
  }
};

const updateTest = async (req, res, next) => {
  try {
    const updated = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Test not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteTest = async (req, res, next) => {
  try {
    const removed = await Test.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Test not found" });
    res.json({ message: "Test deleted" });
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
