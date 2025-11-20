// backend/middleware/auth.js
const { clerkClient } = require("@clerk/backend");
const User = require("../models/User");

//
// Middleware: Require Authentication
// Validates Clerk JWT (sent from frontend as Bearer token)
//
const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid Authorization header" });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    // Verify the token with Clerk
    const session = await clerkClient.sessions.verifySession(token);

    if (!session || !session.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.auth = {
      userId: session.userId,
      sessionId: session.id,
    };

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

//
// Middleware: Require Admin Role
// Uses your MongoDB User model to check role
//
const requireAdmin = async (req, res, next) => {
  try {
    if (!req.auth || !req.auth.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findOne({ clerkId: req.auth.userId });

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.localUser = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { requireAuth, requireAdmin };
