const Booking = require("../models/Booking");
const Test = require("../models/Test");

const createBooking = async (req, res, next) => {
  try {
    const { tests, appointmentDate } = req.body;
    const testDocs = await Test.find({ _id: { $in: tests } });
    const totalPrice = testDocs.reduce((sum, t) => sum + t.price, 0);

    const booking = await Booking.create({
      userId: req.auth.userId,
      tests,
      totalPrice,
      appointmentDate,
    });

    // Real-time admin notification
    const io = req.app.get("io");
    io.emit("new-booking", booking);

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

const getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.auth.userId }).populate("tests");
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBooking, getUserBookings };
