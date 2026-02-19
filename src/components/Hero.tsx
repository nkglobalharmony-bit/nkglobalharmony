import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["Apparel", "Jewellery", "Educational Systems"];

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
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => {
          const isApparel = cat === "Apparel";
          const className = "border border-border px-5 py-2.5 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors";
          return isApparel ? (
            <Link key={cat} to="/apparel" className={className}>
              {cat}
            </Link>
          ) : (
            <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`} className={className}>
              {cat}
            </a>
          );
        })}
      </div>
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
