export default function Home(){
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="bg-green-600 text-white py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Healthcare testing, simplified</h1>
                            <p className="mt-4 text-lg text-green-100/90">Schedule affordable at-home sample collections, receive realtime updates, and access reliable lab results — all from the comfort of your home.</p>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button
                                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white text-green-600 font-semibold px-5 py-3 rounded-md shadow-sm hover:scale-[1.02] transition"
                                >
                                    Learn more
                                </button>
                                <a href="#book" className="inline-block bg-white/10 border border-white/20 text-white px-5 py-3 rounded-md">Book a test</a>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="bg-white rounded-xl p-6 shadow-lg text-slate-900">
                                <h3 className="text-xl font-semibold">Quick booking</h3>
                                <p className="text-sm text-slate-600 mt-2">Enter basic details, choose a test, and pick a collection time — our team handles the rest.</p>

                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> Home collections available</li>
                                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> Clear, accurate lab reporting</li>
                                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> Secure results & notifications</li>
                                </ul>

                                <div className="mt-4 text-sm text-slate-500">Our mission: simplify healthcare testing through technology — making preventive care affordable and accessible.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-2xl font-bold mb-6">What we offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">At-home collections</h4>
                            <p className="text-sm text-slate-600 mt-2">Professional collectors visit your home at a scheduled time so testing is convenient and safe.</p>
                        </article>
                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">Transparent pricing</h4>
                            <p className="text-sm text-slate-600 mt-2">Affordable packages with no hidden fees — preventive care shouldn't break the bank.</p>
                        </article>
                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">Fast results</h4>
                            <p className="text-sm text-slate-600 mt-2">Timely lab processing and secure delivery of results so you can act quickly.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Short reference to About (expects About component to have id="about") */}
            <section id="home-about" className="bg-slate-50 py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h3 className="text-xl font-bold">About HomeDoc-Labs</h3>
                    <p className="mt-3 text-slate-700">HomeDoc-Labs is a digital-first healthcare testing service focused on accessibility and affordability. We enable users to schedule at-home collections, receive realtime updates, and access accurate lab reports — aiming to reduce delays in diagnosis and long-term health costs.</p>
                    <p className="mt-4 text-sm text-slate-500">For a fuller description of our mission and services, visit the About section below.</p>
                </div>
            </section>

            {/* CTA / Book Section Placeholder */}
            <section id="book" className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="rounded-lg bg-green-50 border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-lg font-semibold">Ready to get tested?</h4>
                            <p className="mt-2 text-slate-600">Schedule a home collection or contact our support to find the right package.</p>
                        </div>
                        <div>
                            <a href="#" className="inline-block bg-green-600 text-white px-5 py-3 rounded-md shadow">Book a test</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}