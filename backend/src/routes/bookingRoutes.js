// backend/routes/bookingRoutes.js
const express = require("express");
const { 
  createBooking, 
  getUserBookings, 
  getAllBookings 
} = require("../controllers/bookingController");

const { 
  ClerkExpressRequireAuth, 
  requireAdmin 
} = require("../middleware/auth");

const router = express.Router();

// Admin: Get ALL bookings
router.get("/all", ClerkExpressRequireAuth, requireAdmin, getAllBookings);

// Create a new booking (Authenticated user)
router.post("/", ClerkExpressRequireAuth, createBooking);

// Get authenticated user's bookings
router.get("/", ClerkExpressRequireAuth, getUserBookings);

module.exports = router;
