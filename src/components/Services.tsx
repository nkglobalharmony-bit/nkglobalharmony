import { Search, ShieldCheck, Truck, Lightbulb, TrendingUp, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing",
    description: "Deep networks across manufacturers and artisans, ensuring quality at every price point.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous inspection protocols aligned with international compliance standards.",
  },
  {
    icon: Truck,
    title: "Export Logistics",
    description: "End-to-end freight coordination with documentation handled across jurisdictions.",
  },
  {
    icon: Lightbulb,
    title: "Brand Consulting",
    description: "Strategic brand development and positioning for global market entry and growth.",
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Data-driven market intelligence to keep your product lines ahead of the curve.",
  },
  {
    icon: Globe,
    title: "International Strategy",
    description: "Expert guidance on trade compliance, supply chains, and cross-border operations.",
  },
];

const Services = () => (
  <section className="bg-secondary py-20 md:py-28">
    <div className="container">
      <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-3 block">
        What We Do
      </span>
      <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-14">
        End-to-End Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-background p-8 group hover:shadow-lg transition-shadow">
            <s.icon size={28} strokeWidth={1.5} className="text-foreground mb-5" />
            <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
