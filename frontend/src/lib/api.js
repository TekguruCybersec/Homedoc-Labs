import { getToken } from "@clerk/clerk-react";

// Normalize API base URL
const RAW_API = import.meta.env.VITE_API_URL || "";
const API = RAW_API.replace(/\/+$/, "");

async function handleResponse(res) {
  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Request failed");
  }
  return res.json();
}

// Helper: attach Authorization header if logged in
async function authHeaders() {
  const token = await getToken({ template: "default" });
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
}

/* --------------------------------------------------
   TESTS API  →  PUBLIC ROUTE → /api/tests
--------------------------------------------------- */
export async function fetchTests() {
  const res = await fetch(`${API}/api/tests`);
  return handleResponse(res);
}

/* --------------------------------------------------
   BOOKINGS API  →  PROTECTED ROUTES
--------------------------------------------------- */
export async function createBooking(payload) {
  const headers = await authHeaders();
  const res = await fetch(`${API}/api/bookings`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

export async function fetchUserBookings() {
  const headers = await authHeaders();
  const res = await fetch(`${API}/api/bookings`, { headers });
  return handleResponse(res);
}

/* --------------------------------------------------
   ADMIN BOOKINGS  →  PROTECTED + ADMIN ONLY
--------------------------------------------------- */
export async function fetchAllBookings() {
  const headers = await authHeaders();
  const res = await fetch(`${API}/api/bookings/all`, { headers });
  return handleResponse(res);
}

/* --------------------------------------------------
   USER PROFILE  →  PROTECTED ROUTE
--------------------------------------------------- */
export async function fetchUserProfile() {
  const headers = await authHeaders();
  const res = await fetch(`${API}/api/users/me`, { headers });
  return handleResponse(res);
}
