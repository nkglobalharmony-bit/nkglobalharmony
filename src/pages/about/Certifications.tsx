import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const certifications = [
  { heading: "OEKO-TEX® Standard 100", body: "Textile safety certification ensuring products are free from harmful substances." },
  { heading: "GOTS (Global Organic Textile Standard)", body: "Organic fibre certification covering processing, manufacturing, and labelling." },
  { heading: "EN 71 (Toy Safety)", body: "European safety standard for toys covering mechanical, flammability, and chemical properties." },
  { heading: "CPSC Compliance", body: "US Consumer Product Safety Commission compliance for toys and children's products." },
  { heading: "BIS Certification", body: "Bureau of Indian Standards certification for product quality and export compliance." },
  { heading: "ISO 9001:2015", body: "Quality management system certification ensuring consistent process and delivery standards." },
];

const CertificationsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Certifications</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            Our products and processes meet internationally recognised standards.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c) => (
              <div key={c.heading} className="bg-background p-8 md:p-10">
                <Shield size={28} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">{c.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CertificationsPage;
