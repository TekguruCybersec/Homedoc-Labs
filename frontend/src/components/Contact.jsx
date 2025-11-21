import { useState } from "react";

export default function Contact() {
    const API = import.meta.env.VITE_API_URL || "";
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!form.name || !form.email || !form.message) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${API}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess("Message sent! We will respond shortly.");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setError(err.message || "Submission failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="bg-[#f4f9f4] py-20">
            <div className="mx-auto max-w-3xl px-6">
                <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-50">

                    {/* Heading */}
                    <h2 className="text-3xl font-extrabold text-green-800 mb-2">
                        Contact Us
                    </h2>
                    <p className="text-slate-600 mb-8 text-sm">
                        Have questions or need help? Send us a message and our support team will reach out.
                    </p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">

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

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-green-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Your Email"
                            className="border border-green-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="border border-green-200 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition font-medium disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
