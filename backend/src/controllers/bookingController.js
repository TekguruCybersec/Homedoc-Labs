// backend/controllers/bookingController.js

const Booking = require("../models/Booking");
const Test = require("../models/Test");

//
// Create a new booking
//
const createBooking = async (req, res, next) => {
  try {
    const { tests, appointmentDate } = req.body;

    // Validate selected tests
    if (!tests || !Array.isArray(tests) || tests.length === 0) {
      return res.status(400).json({ message: "No tests selected." });
    }

    // Validate appointment date
    if (!appointmentDate) {
      return res.status(400).json({
        message: "Appointment date is required.",
      });
    }

    // Fetch test docs (ensure valid IDs)
    const testDocs = await Test.find({ _id: { $in: tests } });

    if (testDocs.length === 0) {
      return res.status(400).json({
        message: "Invalid test IDs.",
      });
    }

    // Total price calculation
    const totalPrice = testDocs.reduce((sum, t) => sum + t.price, 0);

    // Create booking
    const booking = await Booking.create({
      userId: req.auth.userId, // Clerk User ID
      tests,
      appointmentDate,
      totalPrice,
      status: "pending",
    });

    // Notify admins via Socket.IO
    const io = req.app.get("io");
    if (io) {
      io.to("admin").emit("new-booking", {
        type: "booking:new",
        message: "A new booking was created",
        booking,
      });
    }

    return res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

//
// Get bookings for logged-in user
//
const getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({
      userId: req.auth.userId,
    })
      .populate("tests")
      .sort({ createdAt: -1 });

    return res.json(bookings);
  } catch (err) {
    next(err);
  }
};

//
// Admin: Get ALL bookings
//
const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate("tests")
      .sort({ createdAt: -1 });

    return res.json(bookings);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  getAllBookings,
};
