export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/hero-hvac.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Red River HVAC
        </h1>

        <p className="text-lg md:text-xl font-semibold mb-4">
          Commercial & Residential HVAC Installation Specialists
        </p>

        <p className="max-w-3xl mx-auto mb-8">
          Boilers • Rooftop Units • Furnaces • Air Conditioning • Gas Piping • Sheet Metal
        </p>

        <a
          href="tel:12187318101"
          className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
        >
          Call (218) 731-8101
        </a>
      </section>

      {/* CONTENT CARD */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            Professional HVAC Installation Services
          </h2>

          <p className="mb-6">
            Red River HVAC provides professional HVAC installation services for
            commercial and residential projects throughout Barnesville, Minnesota
            and the surrounding Red River Valley. Our focus is on properly designed,
            code-compliant systems built for long-term reliability and performance.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Commercial HVAC
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Rooftop unit (RTU) installation and replacement</li>
            <li>Commercial heating and cooling systems</li>
            <li>Make-up air and ventilation systems</li>
            <li>Natural gas piping for HVAC equipment</li>
            <li>Custom sheet metal and ductwork fabrication</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Residential HVAC Installation
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Gas and electric furnaces</li>
            <li>Boiler systems</li>
            <li>Central air conditioning systems</li>
            <li>New construction and system replacements</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Service & Maintenance
          </h3>
          <p className="mb-6">
            In addition to installations, Red River HVAC provides professional
            service and maintenance to keep heating and cooling systems operating
            safely and efficiently.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Why Choose Red River HVAC
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Installation-first expertise</li>
            <li>Commercial and residential experience</li>
            <li>Attention to code, safety, and performance</li>
            <li>Clean, professional workmanship</li>
            <li>Local Barnesville service</li>
          </ul>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold">
              Call today to discuss your HVAC installation project
            </p>
            <a
              href="tel:12187318101"
              className="inline-block mt-4 bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
            >
              (218) 731-8101
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Red River HVAC — Barnesville, Minnesota
      </footer>

    </main>
  );
}
          
