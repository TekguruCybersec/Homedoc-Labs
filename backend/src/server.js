// backend/server.js  OR  backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

// Clerk middleware (NEW)
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

const bookingRoutes = require("./routes/bookingRoutes");
const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/userRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }, // tighten for production
});

// Make socket.io available in controllers
app.set("io", io);

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Clerk Authentication Middleware ---
// This attaches req.auth = { userId, sessionId, ... }
app.use(ClerkExpressWithAuth());

// --- API Routes ---
app.use("/api/tests", testRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

// Global error handler (must stay LAST)
app.use(errorHandler);

// Connect DB
connectDB();

// --- SOCKET.IO ---
io.on("connection", (socket) => {
  console.log("🔥 Socket connected:", socket.id);

  socket.on("register-role", (role) => {
    if (role === "admin") {
      socket.join("admin");
      console.log(`⚡ Admin joined room: ${socket.id}`);
    } else {
      socket.join("user");
      console.log(`👤 User joined room: ${socket.id}`);
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
