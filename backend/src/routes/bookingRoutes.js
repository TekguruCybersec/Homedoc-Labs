// backend/routes/bookingRoutes.js
const express = require("express");
const { createBooking, getUserBookings, getAllBookings } = require("../controllers/bookingController");
const { ClerkExpressRequireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Create booking (authenticated users)
router.post("/", ClerkExpressRequireAuth(), createBooking);

// Get bookings for authenticated user
router.get("/", ClerkExpressRequireAuth(), getUserBookings);

// Admin: get all bookings
router.get("/all", ClerkExpressRequireAuth(), requireAdmin, getAllBookings);

module.exports = router;
