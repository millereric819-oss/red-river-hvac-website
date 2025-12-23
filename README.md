import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wrench, Snowflake, Flame, Building2, Home } from "lucide-react";

export default function HVACWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/backgrounds/sheet-metal-hammer-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center bg-slate-900/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Red River HVAC Services — Residential & Commercial Experts
            </h1>
            <p className="text-lg mb-8 text-sky-100">
              Proudly serving Otter Tail, Becker, and Wilkin Counties with professional HVAC solutions you can trust.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Request a Quote</Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white"
              >
                Emergency Service
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 rounded-2xl p-10 text-center"
          >
            <p className="text-sm uppercase tracking-wider mb-4">
              Licensed & Insured
            </p>
            <img
              src="/logo.png"
              alt="Red River HVAC Services Logo"
              className="mx-auto max-h-40"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialized HVAC Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <Snowflake className="h-10 w-10 text-sky-600" />,
            title: "Air Conditioning",
            desc: "AC installation, repair, and service for residential and commercial systems."
          }, {
            icon: <Flame className="h-10 w-10 text-orange-600" />,
            title: "Heating Systems",
            desc: "Furnaces, boilers, heat pumps, floor heat, garage heaters, and fireplaces."
          }, {
            icon: <Wrench className="h-10 w-10 text-slate-700" />,
            title: "Maintenance & Repairs",
            desc: "Gas piping, refrigeration, diagnostics, and full system repairs."
          }].map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <Home className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Residential HVAC</h3>
              <p className="text-slate-600">
                Furnaces, boilers, floor heat, heat pumps, garage heaters, fireplaces, and air exchangers.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <Building2 className="h-10 w-10 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Commercial HVAC</h3>
              <p className="text-slate-600">
                Rooftop units, commercial refrigeration, sheet metal fabrication, and large-scale HVAC systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Recent HVAC Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: "/mnt/data/1000000187.jpg", label: "Boiler & In-Floor Heat Installation" },
            { src: "/mnt/data/1000000322.jpg", label: "Commercial Ventilation System" },
            { src: "/mnt/data/1000000178.png", label: "High-Efficiency Furnace Install" },
            { src: "/mnt/data/1000000146.jpg", label: "Commercial Ductwork & Air Distribution" },
            { src: "/mnt/data/1000000107.jpg", label: "Sheet Metal Fabrication & Install" },
            { src: "/mnt/data/1000000100.jpg", label: "Commercial HVAC Equipment" },
            { src: "/mnt/data/1000000099.jpg", label: "Garage Heater Installation" },
            { src: "/mnt/data/1000000098.jpg", label: "Heat Recovery & Ventilation System" }
          ].map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow">
              <img
                src={img.src}
                alt={img.label}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white p-4 text-sm font-medium">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need HVAC Service in West-Central Minnesota?
        </h2>
        <p className="text-slate-300 mb-8">
          Licensed • Insured • Residential & Commercial Specialists
        </p>
        <Button size="lg">Call 218-731-8101</Button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} Red River HVAC Services. All rights reserved.
      </footer>
    </div>
  );
}

