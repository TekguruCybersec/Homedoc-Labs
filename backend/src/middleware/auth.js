// backend/middleware/auth.js
const { ClerkExpressRequireAuth, getAuth } = require("@clerk/clerk-sdk-node");
const User = require("../models/User");

/**
 * requireAdmin - ensure the caller is an admin
 * This uses getAuth(req) (Clerk) to get clerk user id then checks the User model.
 */
const requireAdmin = async (req, res, next) => {
  try {
    // getAuth reads Clerk session info from the request (headers/cookies)
    const { userId } = getAuth(req) || {};

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    // attach local user to req for convenience if needed
    req.localUser = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { ClerkExpressRequireAuth, requireAdmin };
