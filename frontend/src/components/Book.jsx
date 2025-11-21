import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

export default function Book() {
    const API = import.meta.env.VITE_API_URL || "";
    const { getToken, isSignedIn } = useAuth();

    const [tests, setTests] = useState([]);
    const [selectedTests, setSelectedTests] = useState([]);
    const [appointmentDate, setAppointmentDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    //
    // Fetch tests from backend
    //
    useEffect(() => {
        async function loadTests() {
            try {
                const res = await fetch(`${API}/tests`);
                const data = await res.json();
                setTests(data);
            } catch (err) {
                console.error("Failed to fetch tests:", err);
            }
        }
        loadTests();
    }, []);

    //
    // Toggle test selection
    //
    function toggleTest(id) {
        setSelectedTests((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    }

    //
    // Submit booking
    //
    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!isSignedIn) {
            setError("Please sign in to book a test.");
            return;
        }

        if (selectedTests.length === 0) {
            setError("You must select at least one test.");
            return;
        }

        if (!appointmentDate) {
            setError("Please choose an appointment date.");
            return;
        }

        setLoading(true);

        try {
            const token = await getToken();

            const res = await fetch(`${API}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    tests: selectedTests,
                    appointmentDate,
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Booking failed");
            }

            const data = await res.json();
            setSuccess("Booking created successfully.");

            setSelectedTests([]);
            setAppointmentDate("");

        } catch (err) {
            setError(err.message || "Request failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="book" className="bg-[#f4f9f4] py-20">
            <div className="mx-auto max-w-3xl px-6">
                <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-50">

                    <h2 className="text-3xl font-extrabold text-green-800 mb-3">
                        Book a Home Test
                    </h2>
                    <p className="text-slate-600 mb-8 text-sm">
                        Choose your tests and schedule an at-home sample collection.
                    </p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

                        {/* Alerts */}
                        {error && (
                            <div className="text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="text-green-800 bg-green-50 border border-green-200 p-3 rounded-lg text-sm">
                                {success}
                            </div>
                        )}

                        {/* Tests List */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 mb-2">
                                Select Tests
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {tests.map((test) => (
                                    <label
                                        key={test._id}
                                        className="flex items-center gap-3 border border-green-200 rounded-lg p-3 cursor-pointer hover:bg-green-50"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedTests.includes(test._id)}
                                            onChange={() => toggleTest(test._id)}
                                        />
                                        <span className="text-sm font-medium">
                                            {test.name} — KES {test.price}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Appointment date */}
                        <div>
                            <label className="text-sm font-semibold text-slate-700">
                                Appointment Date
                            </label>
                            <input
                                type="date"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                className="mt-2 border border-green-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-600 focus:outline-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition font-medium disabled:opacity-60"
                            >
                                {loading ? "Booking..." : "Book Test"}
                            </button>

                            <span className="text-xs text-slate-500">
                                Signed-in users only.
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
