import { cld } from "../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function Home() {

    // ⭐ Your Cloudinary Banner URL
    const bannerUrl = "https://res.cloudinary.com/dubglkfky/image/upload/v1763711717/10_mb_jbkowi.png";

    // ⭐ Extract public ID correctly (safe for all Cloudinary URLs)
    const publicId = bannerUrl
        .split("/upload/")[1]                // after /upload/
        ?.replace(/v\d+\//, "")             // remove version folder
        ?.replace(/\.[^/.]+$/, "");         // remove file extension

    // ⭐ Build Cloudinary image
    const banner = cld.image(publicId);

    // ⭐ Apply responsive resizing
    banner.resize(
        fill()
            .width(2400)
            .height(900)
    );

    return (
        <main className="bg-white text-slate-900">

            {/* 🌟 Banner Image Section */}
            <div className="w-full">
                <div
                    className="
                        w-full 
                        h-[220px] 
                        sm:h-[320px] 
                        md:h-[420px] 
                        lg:h-[550px] 
                        overflow-hidden 
                        rounded-b-2xl 
                        shadow-lg
                    "
                >
                    <AdvancedImage
                        cldImg={banner}
                        className="w-full h-full object-cover"
                        alt="Homedoc Labs Banner"
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section id="home" className="bg-green-600 text-white py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Hero Text */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Healthcare testing, simplified
                            </h1>

                            <p className="mt-4 text-lg text-green-100/90">
                                Schedule affordable at-home sample collections, receive realtime updates, 
                                and access reliable lab results — all from the comfort of your home.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button
                                    onClick={() =>
                                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="bg-white text-green-600 font-semibold px-5 py-3 rounded-md shadow-sm hover:scale-[1.02] transition"
                                >
                                    Learn more
                                </button>

                                <a
                                    href="#book"
                                    className="inline-block bg-white/10 border border-white/20 text-white px-5 py-3 rounded-md hover:bg-white/20 transition"
                                >
                                    Book a test
                                </a>
                            </div>
                        </div>

                        {/* Hero Card */}
                        <div className="flex-1">
                            <div className="bg-white rounded-xl p-6 shadow-lg text-slate-900">
                                <h3 className="text-xl font-semibold">Quick booking</h3>
                                <p className="text-sm text-slate-600 mt-2">
                                    Enter basic details, choose a test, and pick a collection time — 
                                    our team handles the rest.
                                </p>

                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        Home collections available
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        Clear, accurate lab reporting
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        Secure results & notifications
                                    </li>
                                </ul>

                                <div className="mt-4 text-sm text-slate-500">
                                    Our mission: simplify healthcare testing through technology — 
                                    making preventive care affordable and accessible.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="services" className="py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-2xl font-bold mb-6">What we offer</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">At-home collections</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Certified collectors visit your home at a scheduled time, ensuring
                                convenience and safety.
                            </p>
                        </article>

                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">Transparent pricing</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Affordable packages with no hidden fees — preventive care shouldn't
                                break the bank.
                            </p>
                        </article>

                        <article className="p-6 border rounded-lg shadow-sm bg-white">
                            <h4 className="font-semibold">Fast results</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Timely lab processing and secure results delivery for quick action.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Short About Reference */}
            <section id="home-about" className="bg-slate-50 py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h3 className="text-xl font-bold">About Homedoc Labs</h3>
                    <p className="mt-3 text-slate-700">
                        Homedoc Labs is a digital-first healthcare testing service focused on accessibility 
                        and affordability. We enable users to schedule at-home collections, receive realtime 
                        updates, and access accurate lab reports — reducing delays and improving preventive care.
                    </p>
                    <p className="mt-4 text-sm text-slate-500">
                        For a full overview of our mission and services, visit the About section below.
                    </p>
                </div>
            </section>

            {/* Book Section */}
            <section id="book" className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="rounded-lg bg-green-50 border p-6 flex flex-col md:flex-row items-center justify-between gap-6">

                        <div>
                            <h4 className="text-lg font-semibold">Ready to get tested?</h4>
                            <p className="mt-2 text-slate-600">
                                Schedule a home collection or contact support to find the right package.
                            </p>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="inline-block bg-green-600 text-white px-5 py-3 rounded-md shadow hover:bg-green-700 transition"
                            >
                                Book a test
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
