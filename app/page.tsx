
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Red River HVAC
        </h1>
        <p className="text-xl mb-6">
          Reliable Heating & Air Conditioning Services
        </p>
        <a
          href="tel:5555555555"
          className="inline-block bg-red-600 px-8 py-4 rounded text-lg font-semibold"
        >
          Call Now for Service
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded">
            <h3 className="font-bold text-xl mb-2">AC Repair</h3>
            <p>Fast and reliable air conditioning repair.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-bold text-xl mb-2">Heating Services</h3>
            <p>Furnace repair, installation, and maintenance.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-bold text-xl mb-2">HVAC Installation</h3>
            <p>Professional system installs done right.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Service Today?
        </h2>
        <p className="mb-6">
          Call Red River HVAC for fast, honest service.
        </p>
        <a
          href="tel:5555555555"
          className="inline-block bg-blue-900 text-white px-8 py-4 rounded text-lg"
        >
          Call 555-555-5555
        </a>
      </section>

    </main>
  );
}
