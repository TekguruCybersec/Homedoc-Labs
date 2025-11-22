// backend/routes/userRoutes.js
const express = require("express");
const { getUsers, setUserRole } = require("../controllers/userController");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Admin-only routes
router.get("/", requireAuth, requireAdmin, getUsers);
router.put("/:id/role", requireAuth, requireAdmin, setUserRole);

module.exports = router;