const services = [
  {
    title: "Sourcing",
    description:
      "Deep networks across manufacturers and artisans, ensuring quality at every price point.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous inspection protocols aligned with international compliance standards.",
  },
  {
    title: "Export Logistics",
    description:
      "End-to-end freight coordination with documentation handled across jurisdictions.",
  },
];

const Services = () => (
  <section className="border-b border-border">
    <div className="container py-16 md:py-20">
      <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
        WHAT WE DO
      </span>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((s) => (
          <div key={s.title}>
            <h3 className="font-serif text-2xl font-medium mb-3">{s.title}</h3>
            <p className="text-foreground/70 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
