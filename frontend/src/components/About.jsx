export default function About(){
    return(
        <section id="about" className="bg-slate-50 py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-green-700">About HomeDoc-Labs</h2>
                    <p className="mt-4 text-slate-700 leading-relaxed">HomeDoc-Labs is all about healthcare offering a digital approach by providing accessible and affordable testing options empowering user to schedule at home collections and receive realtime updates seamlessly.</p>
                    <p className="mt-4 text-slate-700 leading-relaxed">Our mission is to simplify healthcare testing through technology, ensuring convenience, accuracy, and reliability for all users. We focus on preventative healthcare checkups that may be delayed due to high costs, long wait times and fragmented systems that may lead to delayed diagnosis and increased long term health expenses.</p>
                    <div className="mt-6 text-sm text-slate-500">We prioritize patient privacy, fast lab turnaround, and transparent pricing.</div>
                </div>
            </div>
        </section>
    );
}