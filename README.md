# Homedoc Labs

# Overview

 HomeDoc Labs is a mission-driven web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that brings accessible, sustainable healthcare services to users' doorsteps. It allows users to book at-home doctor consultations, lab tests, and rent medical   devices like Continuous Glucose Monitors (CGM) and Blood Pressure Machines at discounted rates. What makes it unique is its alignment with the United Nations Sustainable Development Goals (SDGs), specifically:
    
    🍀 SDG 3: Good Health and Well-Being – Promoting preventive care and early detection.
    🍀SDG 10: Reduced Inequalities – Offering subsidies and discounts for underserved communities.
    🍀 SDG 13: Climate Action – Encouraging home-based services to reduce carbon emissions, with CO2 savings trackers.

This project serves as an MVP (Minimum Viable Product) for a holistic health platform, incorporating gamification (badges for health goals), AI preliminary analysis (simulated), and community features.

# Features
✅User Authentication: Secure registration and login with JWT.

✅Booking System:

     ✨Schedule virtual or at-home doctor consultations.
     
     ✨Book lab tests (e.g., blood work, allergy panels) with results upload and preliminary AI insights.
     
     ✨Rent devices (CGM, Blood Pressure Machines) at discounted fees, with inventory management and return tracking.

✅SDG Integration:

      ✨Personalized health goal trackers with progress bars and badges.
      
      ✨CO2 savings calculations for home-based services.
      
      ✨Extra discounts for low-income users (SDG 10).

✅Admin Capabilities: 

      ✨Add/manage tests and devices (basic routes included).
      
✅Additional Twists:

     ✨Gamified user experience for SDG-aligned goals.
     
     ✨Potential for real-time chat (Socket.io placeholder).
     
     ✨Anonymized data reports for public health insights (ethical, consent-based).

# Technologies Used

    ✨Frontend: React.js (with hooks, components like SDGTracker, TestsList, DevicesList), Axios for API calls, Reactstrap for UI, Recharts for charts (optional for progress visuals).

    ✨Backend: Node.js, Express.js, MongoDB (with Mongoose for schemas), JWT for auth, Bcrypt for password hashing.

    ✨Other: CORS for cross-origin requests, Nodemailer for email confirmations (placeholder).

    ✨Future Integrations: Stripe for payments, TensorFlow.js for AI analysis, Google Maps for logistics, Socket.io for real-time features.

# Project Structure

homedoc-labs/

├── server/

│   ├── index.js   # Server entry point

│   ├── package.json            # Backend dependencies

│   ├── models/                 # Mongoose schemas

│   │   ├── User.js

│   │   ├── Appointment.js

│   │   ├── Test.js

│   │   └── Device.js

│   └── routes/                 # API routes

│       ├── auth.js

│       ├── appointments.js

│       ├── tests.js

│       └── devices.js

└── client/
    ├── package.json            # Frontend dependencies
    ├── src/
    │   ├── App.js              # Main React app
    │   ├── index.js            # React entry
    │   ├── services/
    │   │   └── api.js          # API service helpers
    │   └── components/         # React components
    │       ├── SDGTracker.js
    │       ├── TestsList.js
    │       └── DevicesList.js
    └── public/                 # Static assets
        └── index.html

# Installation

    1.Prerequisites:Node.js (v18+) 
    
        🚄 MongoDB (local instance or MongoDB Atlas)
        🚄 Git (for cloning)

    2.Clone the Repository:

    git clone https://github.com/yourusername/homedoc-labs.git
    cd homedoc-labs
    

    







