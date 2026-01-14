export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <img
            src="/FullLogo_NoBuffer.jpg"
            alt="Red River HVAC Logo"
            className="mx-auto mb-8 w-48 md:w-56"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial & Residential HVAC Installation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Boilers • Rooftop Units • Furnaces • Air Conditioning • Gas Piping • Sheet Metal
          </p>

          <a
            href="tel:2187318101"
            className="inline-block bg-red-700 hover:bg-red-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Call (218) 731-8101
          </a>

          <p className="mt-6 text-gray-400">
            Serving Barnesville, MN & the Red River Valley
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Professional HVAC Installation Done Right
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Red River HVAC specializes in high-quality HVAC installation for commercial and
          residential projects. We focus on properly designed, code-compliant systems built
          for long-term reliability, efficiency, and performance.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-gray-800 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Commercial HVAC
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Rooftop unit (RTU) installation & replacement</li>
              <li>• Commercial heating & cooling systems</li>
              <li>• Make-up air & ventilation systems</li>
              <li>• Natural gas piping for HVAC equipment</li>
              <li>• Custom sheet metal & ductwork fabrication</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Residential HVAC
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Gas & electric furnaces</li>
              <li>• Boiler systems</li>
              <li>• Central air conditioning</li>
              <li>• New construction installs</li>
              <li>• System replacements & upgrades</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Service & Maintenance
        </h2>

        <p className="text-gray-300 text-lg">
          In addition to installation, we provide professional HVAC service and maintenance
          to keep your systems running efficiently and reliably.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Red River HVAC — Barnesville, Minnesota
      </footer>

    </main>
  );
}
