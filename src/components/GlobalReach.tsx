import heroPartnershipImg from "@/assets/hero-partnership.jpg";

const stats = [
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Products Exported" },
  { value: "100+", label: "Manufacturing Partners" },
];

const GlobalReach = () => (
  <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
    <img
      src={heroPartnershipImg}
      alt="Global partnerships"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center container">
      <span className="text-xs font-sans tracking-[0.3em] uppercase text-white/60 mb-4 block">
        Global Reach
      </span>
      <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
        Trusted Worldwide
      </h2>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">{s.value}</p>
            <p className="text-sm text-white/70 font-sans tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalReach;
