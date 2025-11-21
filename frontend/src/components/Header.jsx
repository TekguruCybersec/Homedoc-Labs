// src/components/Header.jsx
export default function Header() {
    const logoUrl =
        "https://res.cloudinary.com/dubglkfky/image/upload/v1763710125/Homedoc_labs_logo_15050_f3i49k.png";

    return (
        <header className="bg-gradient-to-r from-green-800 to-green-600 shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">

                {/* Logo + Brand */}
                <div className="flex items-center gap-3">

                    {/* 150 × 50 logo container */}
                    <div
                        className="bg-white shadow-sm border border-green-100 flex items-center justify-center"
                        style={{ width: "150px", height: "50px", borderRadius: "8px", overflow: "hidden" }}
                    >
                        <img
                            src={logoUrl}
                            alt="Homedoc Labs Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h1 className="text-xl font-semibold text-white tracking-wide">
                        
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <a href="#home" className="text-white/90 hover:text-white">Home</a>
                    <a href="#services" className="text-white/90 hover:text-white">Services</a>
                    <a href="#about" className="text-white/90 hover:text-white">About</a>
                    <a href="#book" className="text-white/90 hover:text-white">Book</a>

                    <a
                        href="#contact"
                        className="bg-white/20 text-white px-4 py-2 rounded-full shadow-sm hover:bg-white/30 transition"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
