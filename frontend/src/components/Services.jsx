export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-green-800">
        Our Wellness Services
      </h2>

      <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
        HomeDoc Labs brings professional healthcare directly to your home. Explore our range 
        of essential wellness tests designed to help you monitor, protect, and improve your 
        long-term health from the comfort of your space.
      </p>

      {/* SERVICES GRID */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Service Card */}
        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Full Body Check</h3>
          <p className="mt-2 text-slate-600">
            A comprehensive health screening covering vital markers, organ function, and 
            early-detection indicators for long-term wellbeing.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Blood Sugar Panel</h3>
          <p className="mt-2 text-slate-600">
            Monitor your glucose levels and assess diabetes risks with easy, at-home 
            sample collection.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Women’s Wellness Panel</h3>
          <p className="mt-2 text-slate-600">
            A specialized panel designed to track hormonal balance, reproductive health, 
            and essential nutritional markers for women's wellbeing.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Heart Health Check</h3>
          <p className="mt-2 text-slate-600">
            Assess cholesterol levels, heart function enzymes, and cardiovascular risk 
            indicators with fast, accurate lab analysis.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Kidney & Liver Panel</h3>
          <p className="mt-2 text-slate-600">
            Detect early signs of organ stress with essential metabolic and functional 
            biomarkers for kidney and liver health.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-900">Nutrition & Vitamin Test</h3>
          <p className="mt-2 text-slate-600">
            Identify possible vitamin deficiencies and nutrient imbalances that affect 
            immunity, energy levels, and overall wellbeing.
          </p>
        </article>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Book a Home Test
        </a>
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="mt-20 bg-green-900 text-white p-10 rounded-lg text-center shadow-lg">
        <h4 className="text-xl font-semibold">Why Choose HomeDoc Labs?</h4>
        <p className="mt-3 text-green-100 leading-relaxed max-w-2xl mx-auto">
          We combine affordability, medical accuracy, and convenience — all delivered
          with a calm, nature-inspired brand built around your wellbeing. Our forest-green 
          theme represents life, balance, and longevity — values at the heart of HomeDoc Labs.
        </p>
      </div>

    </section>
  );
}
