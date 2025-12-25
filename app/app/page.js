export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-red-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Red River HVAC</h1>
        <p className="text-lg md:text-xl mb-6">Reliable Heating & Cooling You Can Trust</p>
        <a
          href="tel:+1-555-555-5555"
          className="inline-block bg-white text-red-700 font-semibold px-6 py-3 rounded-2xl shadow"
        >
          Call Now
        </a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Heating</h3>
            <p>Furnace installation, repair, and maintenance to keep you warm.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Cooling</h3>
            <p>AC repair and installation for dependable summer comfort.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
            <p>Seasonal tune-ups to extend the life of your HVAC system.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Service Today?</h2>
        <p className="mb-6">Fast, honest, and professional HVAC service.</p>
        <a
          href="tel:+1-555-555-5555"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-2xl shadow"
        >
          Call Red River HVAC
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Red River HVAC. All rights reserved.
      </footer>
    </main>
  );
}
