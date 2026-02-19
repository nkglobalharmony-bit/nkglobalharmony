import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Shirt, Dumbbell, HardHat, Baby, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const genres = [
  {
    title: "Formal Wear",
    description: "Tailored suits, blazers, and dress shirts for corporate and occasion wear.",
    icon: Briefcase,
  },
  {
    title: "Casual Wear",
    description: "Everyday essentials: t-shirts, polos, denim, and knitwear.",
    icon: Shirt,
  },
  {
    title: "Activewear & Sportswear",
    description: "Performance-driven athletic apparel with moisture-wicking fabrics.",
    icon: Dumbbell,
  },
  {
    title: "Workwear & Uniforms",
    description: "Industrial, hospitality, and corporate uniform solutions.",
    icon: HardHat,
  },
  {
    title: "Children's Clothing",
    description: "Durable, safe, and comfortable garments for kids.",
    icon: Baby,
  },
  {
    title: "Ethnic & Traditional Wear",
    description: "Cultural garments crafted for global distribution.",
    icon: Gem,
  },
];

const Apparel = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Apparel
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Structured garments designed for global markets. From tailored
            essentials to performance-driven collections — we source and export
            across every category.
          </p>
        </div>
      </section>

      {/* Genre Grid */}
      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {genres.map((genre) => (
              <div
                key={genre.title}
                className="bg-background p-8 md:p-10 flex flex-col"
              >
                <genre.icon size={24} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-medium mb-3">
                  {genre.title}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {genre.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Apparel;
