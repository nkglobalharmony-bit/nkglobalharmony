import { Link } from "react-router-dom";
import { ArrowLeft, Gem, Crown, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-jewellery.jpg";

const subcategories = [
  { title: "American Diamonds", slug: "american-diamonds", description: "High-quality American diamond jewellery crafted for brilliance and affordability.", icon: Gem },
  { title: "Indo Western", slug: "indo-western", description: "Fusion jewellery blending Indian craftsmanship with contemporary Western design aesthetics.", icon: Crown },
  { title: "Kundan", slug: "kundan", description: "Traditional Kundan jewellery featuring uncut gemstones set in gold foil — a heritage art form.", icon: Sparkles },
  { title: "Oxidised", slug: "oxidised", description: "Vintage-inspired oxidised silver jewellery with rustic charm and artisanal character.", icon: Gem },
  { title: "Pearls", slug: "pearls", description: "Elegant pearl jewellery featuring freshwater, cultured, and baroque pearls.", icon: Sparkles },
  { title: "Antique", slug: "antique", description: "Antique-finish jewellery with heritage designs inspired by Mughal, Victorian, and temple traditions.", icon: Crown },
  { title: "Fashion Jewellery", slug: "fashion-jewellery", description: "Trend-driven fashion jewellery for mass market retail aligned with global seasonal collections.", icon: Sparkles },
];

const Jewellery = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img src={heroImg} alt="Jewellery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-12 md:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white">
            Jewellery
          </h1>
        </div>
      </div>

      <section>
        <div className="container py-12 md:py-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Precision-crafted jewellery for global markets. From American diamonds
            to traditional Kundan and antique heritage pieces — we source, design,
            and export across every category.
          </p>
        </div>
      </section>

      {/* Subcategory Grid */}
      <section className="pb-20">
        <div className="container">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subcategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/jewellery/${cat.slug}`}
                className="bg-secondary p-8 md:p-10 flex flex-col hover:shadow-lg transition-all group"
              >
                <cat.icon size={28} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3 group-hover:underline underline-offset-4">
                  {cat.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Jewellery;
