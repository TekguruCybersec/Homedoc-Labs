// backend/routes/bookingRoutes.js
const express = require("express");
const { 
  createBooking, 
  getUserBookings, 
  getAllBookings 
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/auth");


const { 
  requireAuth,
  requireAdmin 
} = authMiddleware;

const router = express.Router();

// Admin: Get ALL bookings (Line 17 is HERE)
router.get("/all", requireAuth, requireAdmin, getAllBookings);

// Create a new booking (Authenticated user)
router.post("/", requireAuth, createBooking);

// Get authenticated user's bookings
router.get("/", requireAuth, getUserBookings);

module.exports = router;