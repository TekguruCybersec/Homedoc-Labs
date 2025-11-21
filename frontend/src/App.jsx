// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";

// Cloudinary support
import { cld } from "./lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

// Example protected dashboard
function Dashboard() {
  const { user } = useUser();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.firstName}</h2>
      <p className="mt-3 text-slate-700">This is your protected dashboard.</p>
    </div>
  );
}

// Clerk protected route wrapper
function ProtectedRoute({ children }) {
  return (
    <SignedIn>
      {children}
    </SignedIn>
  ) || <Navigate to="/" />;
}

export default function App() {

  // Example Cloudinary image (you can delete this if not needed)
  const sampleImg = cld
    .image("cld-sample-5")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="pt-6 px-4">

        {/* Auth Buttons */}
        <div className="flex justify-end mb-4 pr-4">
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" className="ml-3" />
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Example: Show Cloudinary image on home page (remove if unwanted) */}
        {/* <AdvancedImage cldImg={sampleImg} /> */}

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
