// backend/routes/testRoutes.js
const express = require("express");
const {
  getTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
} = require("../controllers/testController");

const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Public Routes
router.get("/", getTests);
router.get("/:id", getTestById);

// Admin Routes
router.post("/", requireAuth, requireAdmin, createTest);
router.put("/:id", requireAuth, requireAdmin, updateTest);
router.delete("/:id", requireAuth, requireAdmin, deleteTest);

module.exports = router;