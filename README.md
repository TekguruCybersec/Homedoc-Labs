# Homedoc Labs

Homedoc Labs is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to make preventative healthcare accessible and affordable. Users can browse, select, and book wellness tests and health packages for at-home sample collection.

This project is built with a modern tech stack, including **Tailwind CSS** for styling and **Vite** for a fast frontend experience.

## 🌱 SDG Alignment

This project directly supports **Sustainable Development Goal 3 (SDG 3): Good Health and Well-being**.

By leveraging technology to create an easy-to-use platform for booking diagnostic tests, Homedoc Labs helps promote preventative healthcare, facilitate early diagnosis, and make essential health services more accessible to everyone.

## ✨ Features

* **User Authentication:** Secure user registration and login with JWT (JSON Web Tokens).
* **Browse Services:** Publicly view a catalog of individual wellness tests and bundled health packages.
* **Booking System:** Authenticated users can book tests/packages for a specific date.
* **User Dashboard:** Users can view their personal booking history and track the status of their appointments (e.g., Pending, Confirmed, Completed).
* **Admin Panel:** (Role-based) Admins can perform CRUD (Create, Read, Update, Delete) operations on tests and packages and manage all user bookings.

## 🛠 Tech Stack

* **Frontend:** React (Vite), Tailwind CSS, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT), bcrypt.js

---

## 📁 Project Structure

/homedoc-labs | ├── /backend | ├── /config # db.js | ├── /controllers # userController, testController, packageController, bookingController | ├── /middleware # authMiddleware, adminMiddleware | ├── /models # userModel, testModel, packageModel, bookingModel | ├── /routes # All API routes | ├── .env.example | ├── package.json | └── server.js # Main backend entry point | └── /frontend ├── /src | ├── /components # Navbar, TestCard, PackageCard, ProtectedRoute | ├── /context # AuthContext, CartContext | ├── /pages # HomePage, LoginPage, TestsPage, MyBookingsPage, AdminDashboard | ├── App.jsx | ├── index.css # Tailwind directives | └── main.jsx ├── tailwind.config.js ├── postcss.config.js └── package.json

---
---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18.x or later)
* MongoDB (A local instance or a free MongoDB Atlas cluster)
* `npm` (or `yarn`)

### 1. Backend Setup


# Clone the repository
git clone [https://github.com/your-username/homedoc-labs.git](https://github.com/your-username/homedoc-labs.git)
cd homedoc-labs/backend

# Install dependencies
npm install

# Create your environment file
cp .env.example .env

//Now, edit the .env file with your MongoDB connection string and a strong JWT secret:

 # Code snippet
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_strong_secret_key

 # Bash
# Run the backend server
npm run dev

The server will be running on http://localhost:5000 (or your configured port).

## 2. Frontend Setup

# Open a new terminal
cd homedoc-labs/frontend

# Install dependencies
npm install

# Run the frontend development server
npm run dev

The React app will be running on http://localhost:5173.


---
---

The React app will be running on http://localhost:5173.

## 🌐 API Endpoints

### User API (/api/users)

POST /register: Register a new user.

POST /login: Log in a user.

Test API (/api/tests)
GET /: Get all available tests.

GET /:id: Get a single test by ID.

POST /: (Admin) Create a new test.

PUT /:id: (Admin) Update a test.

Package API (/api/packages)
GET /: Get all available packages.

GET /:id: Get a single package by ID.

POST /: (Admin) Create a new package.

## Booking API (/api/bookings)

POST /: (User) Create a new booking.

GET /mybookings: (User) Get all bookings for the logged-in user.

GET /:id: (User/Admin) Get a single booking by ID.

PUT /:id/status: (Admin) Update the status of a booking.












    


 
    







