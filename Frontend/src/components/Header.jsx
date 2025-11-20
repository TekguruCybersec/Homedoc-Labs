export default function Header(){
    return (
        <header className="bg-gradient-to-r from-green-700 to-green-500 shadow">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">HD</div>
                    <h1 className="text-xl font-semibold text-white">Homedoc-Labs</h1>
                </div>

                <nav className="flex items-center gap-4">
                    <a href="#home" className="text-white hover:underline">Home</a>
                    <a href="#services" className="text-white hover:underline">Services</a>
                    <a href="#about" className="text-white hover:underline">About</a>
                    <a href="#book" className="text-white hover:underline">Book</a>
                    <a href="#contact" className="bg-white/10 text-white px-3 py-1 rounded-md">Contact</a>
                </nav>
            </div>
        </header>
    );
}