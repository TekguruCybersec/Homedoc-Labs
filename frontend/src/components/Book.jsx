import { useState } from "react";

export default function Book(){
    const API = import.meta.env.VITE_API_URL || '';
    const [form, setForm] = useState({
        name: '',
        email: '',
        testType: 'PCR',
        date: '',
        address: '',
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    function handleChange(e){
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if(!form.name || !form.email || !form.date || !form.address){
            setError('Please fill name, email, date and address.');
            return;
        }

        setLoading(true);
        try{
            const res = await fetch(`${API}/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if(!res.ok){
                const text = await res.text();
                throw new Error(text || 'Booking failed');
            }
            const data = await res.json();
            setSuccess('Booking created. Reference: ' + (data._id || data.id || 'n/a'));
            setForm({ name:'', email:'', testType:'PCR', date:'', address:'', notes:'' });
        }catch(err){
            setError(err.message || 'Request failed');
        }finally{
            setLoading(false);
        }
    }

    return (
        <section id="book" className="bg-slate-50 py-16">
            <div className="mx-auto max-w-3xl px-6">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">Book a Test</h2>
                    <p className="text-sm text-slate-600 mb-6">Fill the form below to schedule an at-home collection. We'll confirm availability and send a notification.</p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        {error && <div className="text-red-600 text-sm">{error}</div>}
                        {success && <div className="text-green-700 text-sm">{success}</div>}

                        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="border rounded-lg px-3 py-2" />
                        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="border rounded-lg px-3 py-2" />

                        <div className="flex gap-3">
                            <select name="testType" value={form.testType} onChange={handleChange} className="border rounded-lg px-3 py-2 flex-1">
                                <option>PCR</option>
                                <option>Antigen</option>
                                <option>Full Wellness Panel</option>
                                <option>Custom</option>
                            </select>
                            <input name="date" value={form.date} onChange={handleChange} type="date" className="border rounded-lg px-3 py-2 w-40" />
                        </div>

                        <input name="address" value={form.address} onChange={handleChange} placeholder="Collection address" className="border rounded-lg px-3 py-2" />

                        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (optional)" className="border rounded-lg px-3 py-2 h-24" />

                        <div className="flex items-center justify-between">
                            <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded-md disabled:opacity-60">{loading ? 'Booking...' : 'Book Test'}</button>
                            <span className="text-sm text-slate-500">We will contact you to confirm the slot.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}