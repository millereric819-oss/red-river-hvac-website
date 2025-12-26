export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#1f2933",
        padding: "3rem 1.5rem",
        minHeight: "100vh",
      }}
    >{/* HERO BANNER */}
<div
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/hero-hvac.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "5rem 2rem",
    marginBottom: "3rem",
    color: "white",
    textAlign: "center",
  }}
>
  <h1 style={{ fontSize: "3.2rem", marginBottom: "1rem" }}>
    Red River HVAC
  </h1>

  <p style={{ fontSize: "1.5rem", fontWeight: "bold", maxWidth: "800px", margin: "0 auto" }}>
    Commercial & Residential HVAC Installation Specialists
  </p>

  <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>
    Boilers • Rooftop Units • Furnaces • Air Conditioning • Gas Piping • Sheet Metal
  </p>
</div>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "3rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
          Red River HVAC
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Commercial & Residential HVAC Installation Specialists
        </p>

        <p>
          Red River HVAC provides professional heating, ventilation, and air
          conditioning installation services for commercial and residential
          clients throughout Barnesville, Minnesota and the surrounding
          Red River Valley.
        </p>

        <p>
          Our work is focused on properly designed, code-compliant installations
          built for long-term performance, reliability, and efficiency.
        </p>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Commercial HVAC Services</h2>
        <ul>
          <li>Rooftop unit (RTU) installation and replacement</li>
          <li>Commercial heating and cooling systems</li>
          <li>Make-up air and ventilation systems</li>
          <li>Gas piping for commercial HVAC equipment</li>
          <li>Custom sheet metal and ductwork fabrication</li>
        </ul>

        <h2>Residential HVAC Installation</h2>
        <ul>
          <li>Gas and electric furnace installation</li>
          <li>Boiler systems</li>
          <li>Central air conditioning systems</li>
          <li>System replacements and upgrades</li>
          <li>New construction HVAC installs</li>
        </ul>

        <h2>Specialties</h2>
        <ul>
          <li>Boilers</li>
          <li>Rooftop units</li>
          <li>Furnaces</li>
          <li>Air conditioning systems</li>
          <li>Natural gas piping</li>
          <li>Sheet metal and duct systems</li>
          <li>Commercial and residential projects</li>
        </ul>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Service & Maintenance</h2>
        <p>
          In addition to installations, Red River HVAC provides service and
          maintenance for heating and cooling systems to keep equipment operating
          safely and efficiently.
        </p>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Why Choose Red River HVAC</h2>
        <ul>
          <li>Installation-first expertise</li>
          <li>Commercial and residential experience</li>
          <li>Attention to code, safety, and system performance</li>
          <li>Clean, professional workmanship</li>
          <li>Local service you can rely on</li>
        </ul>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Contact</h2>
        <p>
          📍 Barnesville, Minnesota<br />
          📞 <strong>218-731-8101</strong>
        </p>

        <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Contact Red River HVAC to discuss your next installation project.
        </p>
      </div>
    </main>
  );
}
