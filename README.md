🏥 Homedoc Labs

Homedoc Labs is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to make preventative healthcare accessible and affordable.
It allows users to browse, select, and book wellness tests and health packages for at-home sample collection.

This version of the project uses Clerk
 for secure, modern authentication and user management — replacing the previous JWT-based system.
---

🌱 SDG Alignment

This project supports Sustainable Development Goal 3 (SDG 3): Good Health and Well-being.
By leveraging technology to streamline booking and diagnostic testing, Homedoc Labs helps promote preventative healthcare, early diagnosis, and accessible health services for all.

---

✨ Features
👤 User Features

Secure Authentication with Clerk (Sign up, Sign in, Sign out)

Browse Services: View all available wellness tests and health packages

Book Appointments: Authenticated users can book tests for preferred dates

Dashboard: Manage and view all personal bookings and appointment status
(e.g., Pending, Confirmed, Completed)

🛠 Admin Features

Role-Based Access Control: Admins can manage (CRUD) all wellness tests, packages, and user bookings

Manage Appointments: Approve, update, or mark tests as completed
---

## 🚀 Getting Started

🧰 Tech Stack
Layer	-Technology
Frontend	-React (Vite), Tailwind CSS, React Router, Clerk
Backend	-Node.js, Express.js
Database-	MongoDB + Mongoose
Auth	-Clerk Authentication
Styling	-Tailwind CSS
Deployment	-Vercel / Render / MongoDB Atlas

### 🧩 Project Structure

/homedoc-labs
├── /backend
│   ├── /config           # Database connection (db.js)
│   ├── /controllers      # userController, testController, packageController, bookingController
│   ├── /middleware       # clerkMiddleware, adminMiddleware
│   ├── /models           # userModel, testModel, packageModel, bookingModel
│   ├── /routes           # All Express API routes
│   ├── .env.example
│   ├── package.json
│   └── server.js         # Main server entry point
└── /frontend
    ├── /src
    │   ├── /components   # Navbar, TestCard, PackageCard, ProtectedRoute
    │   ├── /pages        # Home, Dashboard, Admin, etc.
    │   ├── /context      # CartContext, GlobalContext
    │   └── main.jsx, App.jsx
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json


### ⚙️ Installation & Setup

🧾 Prerequisites

Make sure you have installed:

Node.js (v18 or higher)

MongoDB (local instance or MongoDB Atlas)

npm or yarn

A Clerk account → https://clerk.com

---

1. Clone the Repository

git clone https://github.com/your-username/homedoc-labs.git
cd homedoc-labs

---
2. Backend Setup
cd backend
npm install
---

Create an .env file based on .env.example and update your environment variables:

MONGO_URI=your_mongodb_connection_string
PORT=5000
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

Run the backend development server:
👉 http://localhost:5000

---

3. Frontend Setup

cd ../frontend
npm install

Create a .env file in /frontend with:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:5000

Run the frontend development server:

npm run dev

Your frontend will run on
👉 http://localhost:5173

---

🔐 Authentication (Clerk Integration)
🧩 Frontend (React + Vite)

Clerk simplifies authentication with built-in React components and hooks.

Example setup (App.jsx):

import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Router>
        <SignedIn>
          <UserButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </SignedIn>
        <SignedOut>
          <SignIn routing="path" path="/sign-in" />
          <SignUp routing="path" path="/sign-up" />
        </SignedOut>
      </Router>
    </ClerkProvider>
  );
}

export default App;
---


🔒 Backend (Express + Clerk)

Example middleware setup (server.js):

import express from "express";
import dotenv from "dotenv";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Example protected route
app.use("/api/bookings", ClerkExpressRequireAuth(), bookingRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

Now only authenticated Clerk users can access /api/bookings routes.

--

🧱 Role-Based Access

Since Clerk doesn’t manage roles by default, you can store role info in MongoDB or Clerk metadata.

Example schema update (userModel.js):

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

Example middleware (adminMiddleware.js):

export const isAdmin = async (req, res, next) => {
  const user = await User.findOne({ clerkId: req.auth.userId });
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

---

🌐 API Endpoints

| Endpoint                   | Method | Description            | Auth          |
| -------------------------- | ------ | ---------------------- | ------------- |
| `/api/tests`               | GET    | Get all wellness tests | Public        |
| `/api/tests/:id`           | GET    | Get a single test      | Public        |
| `/api/bookings`            | POST   | Create a booking       | Authenticated |
| `/api/bookings/mybookings` | GET    | Get user bookings      | Authenticated |
| `/api/bookings/:id/status` | PUT    | Update booking status  | Admin         |


--

🚀 Deployment

You can deploy Homedoc Labs using:

Frontend → Vercel

Backend → Render
 or Railway

Database → MongoDB Atlas

Be sure to add the following environment variables in your hosting platform:

| Variable                | Example                                               |
| ----------------------- | ----------------------------------------------------- |
| `CLERK_PUBLISHABLE_KEY` | `pk_test_123456`                                      |
| `CLERK_SECRET_KEY`      | `sk_test_abcdef`                                      |
| `MONGO_URI`             | `mongodb+srv://user:pass@cluster.mongodb.net/homedoc` |
| `PORT`                  | `5000`                                                |

---

🧠 Future Improvements

Add payment gateway integration (Stripe or Razorpay)

Enable notifications for booking confirmations

Add multi-language support

Improve admin analytics dashboard

---

**🤝 Contributing

Contributions are welcome!
To contribute:

Fork this repository

Create a new branch (feature/your-feature-name)

Commit your changes

Push your branch and open a Pull Request

--

**📜 License

This project is licensed under the MIT License.

--

**💙 Acknowledgments

Clerk
 for authentication

MongoDB Atlas
 for managed database hosting

Tailwind CSS
 for styling

React + Vite
 for blazing-fast development
 
 --
 
 ** 🌟 Homedoc Labs — Empowering Preventative Healthcare Through Technology

“Good health and well-being start with accessibility, prevention, and early action.”

--

Would you like me to make this README auto-generate badges (e.g., build passing, tech stack logos, or license badges) so it looks even more GitHub-polished?








    







