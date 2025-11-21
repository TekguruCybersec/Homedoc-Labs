import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("❌ Missing VITE_CLERK_PUBLISHABLE_KEY in your .env file.");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-green-700 hover:bg-green-800 text-white",
          card: "shadow-lg border border-slate-200",
        },
        variables: {
          colorPrimary: "#065f46",    // your forest green
        },
      }}
    >
      <ClerkLoading>
        <div className="h-screen flex items-center justify-center text-slate-500">
          Loading authentication...
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkLoaded>
    </ClerkProvider>
  </StrictMode>
);
