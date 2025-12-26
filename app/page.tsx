export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: "#7a0000",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Red River HVAC
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "25px" }}>
          Reliable Heating & Cooling in Barnesville, Minnesota
        </p>
        <a
          href="tel:12187318101"
          style={{
            backgroundColor: "white",
            color: "#7a0000",
            padding: "15px 30px",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          Call Now: (218) 731-8101
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3>Heating Repair</h3>
            <p>Fast, dependable furnace and boiler repair.</p>
          </div>
          <div>
            <h3>AC Repair</h3>
            <p>Keep your home cool all summer long.</p>
          </div>
          <div>
            <h3>Installations</h3>
            <p>New HVAC systems done right the first time.</p>
          </div>
          <div>
            <h3>Emergency Service</h3>
            <p>When your system fails, we answer the call.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          backgroundColor: "#f2f2f2",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Why Choose Red River HVAC?
        </h2>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
          Locally owned and operated in Barnesville, MN. We provide honest
          pricing, dependable service, and quality workmanship you can trust.
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Need Service Today?
        </h2>
        <a
          href="tel:12187318101"
          style={{
            backgroundColor: "#7a0000",
            color: "white",
            padding: "15px 35px",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          Call (218) 731-8101
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#111",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Red River HVAC — Barnesville, Minnesota
      </footer>
    </main>
  );
}
