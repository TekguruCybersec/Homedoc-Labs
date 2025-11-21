// backend/routes/userRoutes.js
const express = require("express");
const { getUsers, setUserRole } = require("../controllers/userController");
const { ClerkExpressRequireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Admin-only routes
router.get("/", ClerkExpressRequireAuth, requireAdmin, getUsers);
router.put("/:id/role", ClerkExpressRequireAuth, requireAdmin, setUserRole);

module.exports = router;
