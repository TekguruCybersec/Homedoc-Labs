import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold text-white">HomeDoc Labs</h2>
                    <p className="text-sm mt-2">
                        Empowering digital diagnostics and home medical solutions.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <span className="font-medium text-white">Email:</span>{" "}
                            <a 
                                href="mailto:homedoclabs@gmail.com" 
                                className="hover:text-blue-400"
                            >
                                homedoclabs@gmail.com
                            </a>
                        </li>

                        <li>
                            <span className="font-medium text-white">Telephone:</span>{" "}
                            <a href="tel:0704723066" className="hover:text-blue-400">
                                0704723066
                            </a>{" "}
                            /{" "}
                            <a href="tel:0716712562" className="hover:text-blue-400">
                                0716712562
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Socials */}
<div>
    <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
    <ul className="space-y-2 text-sm">
        <li>
            <a
                href="https://www.instagram.com/homedoc_labs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400"
            >
                <Instagram className="w-5 h-5" />
                <span>@homedoc_labs</span>
            </a>
        </li>
    </ul>
</div>


            </div>

            <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} HomeDoc Labs. All rights reserved.
            </div>
        </footer>
    );
}

