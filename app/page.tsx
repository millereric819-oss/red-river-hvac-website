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
          <Image
            src="/FullLogo_NoBuffer.jpg"
            alt="Red River HVAC"
            width={220}
            height={220}
            className="mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Commercial & Residential HVAC Installation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Boilers • RTUs • Furnaces • Air Conditioning • Gas Piping • Sheet Metal
          </p>

          <a
            href="tel:12187318101"
            className="inline-block bg-red-700 hover:bg-red-600 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Call (218) 731-8101
          </a>
        </div>
      </section>
    </main>
  );
}
