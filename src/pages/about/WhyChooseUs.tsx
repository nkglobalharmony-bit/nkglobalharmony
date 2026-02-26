import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  { heading: "Vetted Manufacturer Network", body: "Every supplier in our network is audited for quality, capacity, and compliance before onboarding." },
  { heading: "End-to-End Export Management", body: "From sourcing to shipping — we handle documentation, compliance, logistics, and delivery tracking." },
  { heading: "Multi-Category Expertise", body: "Apparel, jewellery, toys, and packaging — we bring deep domain knowledge to every category." },
  { heading: "Competitive Pricing", body: "Direct factory relationships and volume consolidation deliver pricing advantages to our clients." },
  { heading: "Quality First", body: "Multi-stage quality checks at raw material, in-line, and pre-shipment stages." },
  { heading: "Flexible MOQs", body: "We work with startups and global brands alike — with flexible minimum order quantities." },
];

const WhyChooseUs = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Why Choose Us</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            What sets NK Global apart from other international trade partners.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.heading} className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">{r.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default WhyChooseUs;
