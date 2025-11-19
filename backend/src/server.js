require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookings");
const testRoutes = require("./routes/tests");
const userRoutes = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.set("io", io);

app.use(cors());
app.use(express.json());

app.use("/api/tests", testRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

connectDB();

io.on("connection", (socket) => console.log("Socket connected:", socket.id));

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
