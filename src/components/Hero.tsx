import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-home.jpg";

const Hero = () => (
  <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
    <img
      src={heroImg}
      alt="NK Global Harmony — International Trade"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 flex flex-col justify-center container">
      <span className="text-xs font-sans tracking-[0.3em] uppercase text-white/70 mb-4 block">
        International Trade & Export
      </span>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.05]">
        Source. Certify.
        <br />
        Export Globally.
      </h1>
      <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-10">
        Precision-driven international trade connecting manufacturers to markets
        worldwide — across apparel, jewellery, toys, packaging, and more.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-white/90 transition-colors"
        >
          Request a Quote <ArrowRight size={16} />
        </Link>
        <a
          href="#categories"
          className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-sm font-sans tracking-wide hover:bg-white/10 transition-colors"
        >
          Explore Categories
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
