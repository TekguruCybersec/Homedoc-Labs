# 🩺 Homedoc Labs

Homedoc Labs is a full-stack MERN web application designed to make preventative healthcare accessible and affordable. It allows users to browse, select, and book wellness tests and health packages for at-home sample collection.

This project features a modern stack including React (Vite), Node.js, Express, MongoDB, and Tailwind CSS. The authentication system is fully managed by **Clerk** for robust, secure, and scalable user management.

![Homedoc Labs Screenshot](https.placeholder.image/800x400.png/E0F0FF/333?text=Homedoc+Labs+App+Screenshot)
*(Replace this with a screenshot of your application's homepage or dashboard)*

---

## ✨ Core Features

* **Clerk Authentication:** Secure user sign-up, sign-in, and session management handled by Clerk, including social logins and multi-factor authentication right out of the box.
* **Browse Services:** A public catalog of all available wellness tests and comprehensive health packages.
* **Booking System:** Authenticated users can easily book tests or packages for a specific date.
* **User Dashboard:** A private, protected route where users can view their booking history and check the status of their appointments.
* **Admin Panel:** Role-based access for administrators to manage tests, packages, and all user bookings (e.g., update booking status).

---

## 💻 Tech Stack

* **Frontend:** React (Vite), Tailwind CSS, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** **Clerk**

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* **Node.js:** v18.x or later
* **MongoDB:** A local MongoDB instance or a cloud-based URI (e.g., from MongoDB Atlas)
* **Clerk Account:** A free account from [Clerk.dev](https://clerk.com/) to get your API keys.

### 1. Environment Setup

This project requires environment variables for both the frontend and backend.

**A. Clerk Configuration:**

1.  Go to your [Clerk Dashboard](https://dashboard.clerk.com/) and create a new application.
2.  Note your **Publishable Key** (for frontend) and **Secret Key** (for backend).
3.  In the Clerk dashboard, navigate to "Domains" and ensure `http://localhost:5173` (frontend) and `http://localhost:5000` (backend) are allowed.

**B. Environment Files:**

1.  **Backend:** In the `/backend` directory, create a `.env` file:

    ```.env
    # MongoDB
    MONGO_URI=your_mongodb_connection_string

    # Server Port
    PORT=5000

    # Clerk Secret Key
    CLERK_SECRET_KEY=sk_...
    ```

2.  **Frontend:** In the `/frontend` directory, create a `.env` file:

    ```.env
    # Clerk Publishable Key (must have VITE_ prefix)
    VITE_CLERK_PUBLISHABLE_KEY=pk_...

    # Backend API URL
    VITE_API_URL=http://localhost:5000
    ```

### 2. Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/homedoc-labs.git](https://github.com/your-username/homedoc-labs.git)
    cd homedoc-labs
    ```

2.  **Install Backend Dependencies:**
    (Open a terminal in the `/backend` directory)
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    (Open a *second* terminal in the `/frontend` directory)
    ```bash
    cd frontend
    npm install
    ```

4.  **Run the Backend Server:**
    (In your first terminal, from the `/backend` directory)
    ```bash
    npm run dev 
    # Or 'npm start', depending on your package.json scripts
    ```
    The backend server will start on `http://localhost:5000`.

5.  **Run the Frontend App:**
    (In your second terminal, from the `/frontend` directory)
    ```bash
    npm run dev
    ```
    The Vite development server will start on `http://localhost:5173`.

You can now open `http://localhost:5173` in your browser to use the application.

---

## 🧩 Project Structure

The project uses a monorepo-like structure, separating the client and server.
---

## 📁 Project Structure

/homedoc-labs ├── /backend # Express.js API │ ├── /config # db.js │ ├── /controllers # Request/response logic │ ├── /middleware # Clerk authentication & admin checks │ ├── /models # Mongoose schemas │ ├── /routes # API routes │ └── server.js # Express server entry point │ └── /frontend # React (Vite) Client ├── /src │ ├── /components # Reusable React components │ ├── /pages # Route-level components │ ├── /utils # Helper functions │ ├── App.jsx # Main app component (routing) │ └── main.jsx # React entry point (ClerkProvider) ├── tailwind.config.js └── vite.config.js
---
---

---

## 🔐 Authentication & Roles

### Authentication
Authentication is handled entirely by Clerk. The frontend uses Clerk's pre-built components (`<SignIn>`, `<SignUp>`, `<UserButton>`) and hooks (`useAuth`, `useUser`). Protected API routes on the backend are verified using Clerk's Express middleware.

### Role-Based Access (Admin)
Admin access is managed using **Clerk's organization metadata** or **user `publicMetadata`**.

* A user with `publicMetadata: { role: "admin" }` is considered an admin.
* The `/backend/middleware/clerkMiddleware.js` contains an `admin` check that verifies this metadata after successful authentication.
* This metadata can be set manually in the Clerk Dashboard.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




    


 
    







