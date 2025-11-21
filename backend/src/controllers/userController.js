// backend/controllers/userController.js
const User = require("../models/User");

//
// Helper: Check Admin Role
//
async function ensureAdmin(req, res) {
  const clerkId = req.auth?.userId;

  if (!clerkId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const adminUser = await User.findOne({ clerkId });

  if (!adminUser || adminUser.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }

  return adminUser;
}

//
// Get all users (Admin only)
//
const getUsers = async (req, res, next) => {
  try {
    const isAdmin = await ensureAdmin(req, res);
    if (!isAdmin) return;

    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

//
// Create or update user from Clerk webhook OR login
//
const syncUser = async (req, res, next) => {
  try {
    const {
      userId,
      email,
      firstName,
      lastName,
      role, // optional — defaults to "user"
    } = req.body;

    if (!userId || !email) {
      return res.status(400).json({ message: "Missing userId or email" });
    }

    // Try to find user in Mongo
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        email,
        name: `${firstName || ""} ${lastName || ""}`.trim(),
        role: role || "user",
      });
    } else {
      user.email = email;
      user.name = `${firstName || ""} ${lastName || ""}`.trim();
      await user.save();
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

//
// Set user role (Admin only)
//
const setUserRole = async (req, res, next) => {
  try {
    const adminUser = await ensureAdmin(req, res);
    if (!adminUser) return;

    const { role } = req.body;

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    // Notify admins via Socket.io (optional)
    const io = req.app.get("io");
    if (io) {
      io.to("admin").emit("user-role-updated", updated);
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  setUserRole,
  syncUser,
};
