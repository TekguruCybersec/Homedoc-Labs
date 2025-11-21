// backend/middleware/auth.js
const { verifyToken } = require("@clerk/backend");
const User = require("../models/User");

//
// Middleware: Require Authentication
//
const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid Authorization header" });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    // Verify JWT from Clerk
    const decoded = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
      audience: process.env.CLERK_JWT_TEMPLATE_NAME || undefined,
    });

    if (!decoded || !decoded.sub) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const clerkId = decoded.sub;

    // Extract details from Clerk token
    const email =
      decoded.email ||
      decoded.email_address ||
      decoded.email_addresses?.[0]?.email_address ||
      null;

    const firstName = decoded.first_name || "";
    const lastName = decoded.last_name || "";

    // Attach auth object (similar to Clerk)
    req.auth = { userId: clerkId };

    // 🔥 Ensure user exists in MongoDB
    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        email,
        name: `${firstName} ${lastName}`.trim(),
        role: "user",
      });
    }

    req.localUser = user;
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ message: "Invalid or expired Clerk token" });
  }
};

//
// Middleware: Require Admin Role
//
const requireAdmin = async (req, res, next) => {
  try {
    if (!req.localUser || req.localUser.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { requireAuth, requireAdmin };
