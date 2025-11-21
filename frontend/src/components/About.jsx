export default function About() {
    return (
        <section id="about" className="bg-[#f4f9f4] py-20">
            <div className="mx-auto max-w-5xl px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
                        About Homedoc Labs
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                        Making wellness testing, diagnostics, and health insights accessible from the comfort of home.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-50">
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Homedoc Labs is a modern at-home lab testing service that offers convenient, reliable and 
                        affordable health testing. We provide a wide range of wellness tests, diagnostic tests, 
                        and complete wellness packages designed to support preventative healthcare and early detection.
                    </p>

                    <p className="mt-6 text-slate-700 leading-relaxed text-lg">
                        With Homedoc Labs, everything happens from home. Simply choose your test or wellness package, 
                        schedule your preferred day, and our certified professionals will come to your location 
                        for safe, hassle-free sample collection. Your samples are processed in accredited labs, 
                        and results are delivered securely and quickly through your online dashboard.
                    </p>

                    <p className="mt-6 text-slate-700 leading-relaxed text-lg">
                        Whether you want to understand key health markers, monitor ongoing conditions, 
                        or take advantage of preventative wellness screening, Homedoc Labs gives you 
                        the tools to take charge of your health—without long queues, expensive hospital visits, 
                        or unnecessary delays.
                    </p>

                    <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100 text-sm text-green-800">
                        We prioritize accurate results, professional sample collection, data privacy, 
                        and transparent pricing—bringing hospital-grade testing directly to your home.
                    </div>
                </div>

            </div>
        </section>
    );
}
