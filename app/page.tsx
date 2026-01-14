export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Red River HVAC
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-300">
            Commercial & Residential HVAC Installation Specialists
          </p>

          <p className="mt-4 text-zinc-400 max-w-3xl mx-auto">
            Boilers • Rooftop Units • Furnaces • Air Conditioning • Gas Piping •
            Sheet Metal
          </p>

          <a
            href="tel:2187318101"
            className="inline-block mt-8 bg-red-700 hover:bg-red-600 transition px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            Call (218) 731-8101
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Professional HVAC Installation Built to Last
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed">
          Red River HVAC provides high-quality HVAC installation services for
          commercial and residential projects throughout Barnesville, Minnesota
          and the surrounding Red River Valley. We focus on properly designed,
          code-compliant systems built for long-term performance, efficiency,
          and reliability.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Commercial HVAC
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Rooftop unit (RTU) installation & replacement</li>
                <li>• Commercial heating & cooling systems</li>
                <li>• Make-up air & ventilation systems</li>
                <li>• Natural gas piping</li>
                <li>• Custom sheet metal & ductwork</li>
              </ul>
            </div>

            <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Residential HVAC
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Gas & electric furnaces</li>
                <li>• Boiler systems</li>
                <li>• Central air conditioning</li>
                <li>• New construction installs</li>
                <li>• System replacements</li>
              </ul>
            </div>

            <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Service & Maintenance
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Preventative maintenance</li>
                <li>• Equipment diagnostics & repair</li>
                <li>• System performance improvements</li>
                <li>• Honest, professional service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Whether you’re planning a commercial build or upgrading your home
          system, Red River HVAC delivers professional installation you can
          trust.
        </p>

        <a
          href="tel:2187318101"
          className="inline-block bg-red-700 hover:bg-red-600 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
        >
          Call (218) 731-8101
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Red River HVAC — Barnesville, Minnesota
      </footer>
    </main>
  );
}
