import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="border-b border-border">
    <div className="container py-20 md:py-28">
      <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
        NK Global
      </h1>
      <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10">
        Precision-driven international trade. We source, certify, and export
        across categories — connecting manufacturers to markets worldwide.
      </p>
      <a
        href="#apparel"
        className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground hover:text-muted-foreground transition-colors"
      >
        Explore Categories <ArrowRight size={16} />
      </a>
    </div>
  </section>
);

export default Hero;
