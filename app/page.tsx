
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/hero-hvac.jpg"
          alt="HVAC installation"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/FullLogo_NoBuffer.jpg"
              alt="Red River HVAC Logo"
              width={220}
              height={220}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Commercial & Residential HVAC Installation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Boilers • Rooftop Units • Furnaces • Air Conditioning •
            Gas Piping • Sheet Metal
          </p>

          <a
            href="tel:12187318101"
            className="inline-block bg-red-700 hover:bg-red-600 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >
            Call (218) 731-8101
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional HVAC Installation Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-neutral-900 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              Commercial HVAC
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Rooftop unit (RTU) installation & replacement</li>
              <li>• Commercial heating & cooling systems</li>
              <li>• Make-up air & ventilation systems</li>
              <li>• Natural gas piping</li>
              <li>• Custom sheet metal & ductwork</li>
            </ul>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Residential HVAC
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Gas & electric furnaces</li>
              <li>• Boiler systems</li>
              <li>• Central air conditioning</li>
              <li>• New construction & replacements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Red River HVAC • Barnesville, MN
      </footer>
    </main>
  );
}
