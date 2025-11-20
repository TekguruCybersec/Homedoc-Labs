// backend/controllers/userController.js
const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const setUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const updated = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, setUserRole };
