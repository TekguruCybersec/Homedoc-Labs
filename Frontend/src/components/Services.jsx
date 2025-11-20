export default function Services(){
    return (
        <section id="services" className="py-16 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-3xl font-bold text-green-700 mb-4">Our Services</h2>
                <p className="text-slate-700 mb-8">Building on the mission described in About and Home, HomeDoc-Labs provides diagnostic and preventive services to make healthcare accessible and convenient.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-green-50">
                        <h3 className="font-semibold text-lg">At‑Home Sample Collection</h3>
                        <p className="mt-2 text-sm text-slate-600">Schedule a trained phlebotomist to visit your home at a convenient time. Safe, comfortable and contact‑aware collections.</p>
                        <div className="mt-4">
                            <a href="#book" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md">Book collection</a>
                        </div>
                    </article>

                    <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h3 className="font-semibold text-lg">Comprehensive Lab Panels</h3>
                        <p className="mt-2 text-sm text-slate-600">From basic wellness checks to specialized diagnostic panels, get reliable lab testing processed at accredited laboratories.</p>
                        <div className="mt-4">
                            <a href="#" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md">View panels</a>
                        </div>
                    </article>

                    <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h3 className="font-semibold text-lg">Secure Results & Teleconsult</h3>
                        <p className="mt-2 text-sm text-slate-600">Receive encrypted reports and optional teleconsultations to review results and next steps with qualified practitioners.</p>
                        <div className="mt-4">
                            <a href="#contact" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md">Request consult</a>
                        </div>
                    </article>
                </div>

                <div className="mt-12 bg-slate-50 p-6 rounded-lg border text-center">
                    <h4 className="text-lg font-semibold">Why choose HomeDoc-Labs?</h4>
                    <p className="mt-3 text-slate-600">We focus on affordability, fast turnaround, and protecting your privacy. Our workflows are built to reduce delays and provide clear, actionable results.</p>
                </div>
            </div>
        </section>
    );
}