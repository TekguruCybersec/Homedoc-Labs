// backend/routes/testRoutes.js
const express = require("express");
const {
  getTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
} = require("../controllers/testController");

const { ClerkExpressRequireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Public Routes
router.get("/", getTests);
router.get("/:id", getTestById);

// Admin Routes
router.post("/", ClerkExpressRequireAuth, requireAdmin, createTest);
router.put("/:id", ClerkExpressRequireAuth, requireAdmin, updateTest);
router.delete("/:id", ClerkExpressRequireAuth, requireAdmin, deleteTest);

module.exports = router;
