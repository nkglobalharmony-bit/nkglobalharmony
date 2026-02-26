import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Clock, Globe, Award, Leaf, Users } from "lucide-react";

const usps = [
  { icon: Shield, heading: "Trusted Quality", body: "ISO-aligned processes with multi-stage quality control at every production milestone." },
  { icon: Clock, heading: "Fast Turnaround", body: "Optimised supply chains delivering samples in 2–3 weeks and bulk in 45–60 days." },
  { icon: Globe, heading: "Global Reach", body: "Active trade relationships across 30+ countries spanning 5 continents." },
  { icon: Award, heading: "Certified Standards", body: "OEKO-TEX, GOTS, EN 71, CPSC, and BIS compliance across all product categories." },
  { icon: Leaf, heading: "Sustainability Focus", body: "Organic, recycled, and eco-friendly material options across apparel and packaging." },
  { icon: Users, heading: "Dedicated Teams", body: "Category-specific sourcing teams with deep domain expertise and buyer alignment." },
];

const OurUSPs = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Our USPs</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            The unique strengths that make NK Global your ideal sourcing partner.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {usps.map((u) => (
              <div key={u.heading} className="bg-background p-8 md:p-10">
                <u.icon size={28} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">{u.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default OurUSPs;
