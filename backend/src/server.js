// backend/src/server.js (or backend/server.js)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

// routes
const bookingRoutes = require("./routes/bookingRoutes");
const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/userRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }, // restrict in production
});

app.set("io", io);

app.use(cors());
app.use(express.json());

// Attach routes
app.use("/api/tests", testRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

// Global error handler
app.use(errorHandler);

// Connect DB
connectDB();

// Socket.IO - role registration and lifecycle
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Client may call this with either "admin" or "user" after verifying server-side token
  socket.on("register-role", (role) => {
    if (role === "admin") {
      socket.join("admin");
      console.log(`Admin joined room admin: ${socket.id}`);
    } else {
      socket.join("user");
      console.log(`User joined room user: ${socket.id}`);
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
