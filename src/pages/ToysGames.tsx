import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Puzzle, BookOpen, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-toys.jpg";

const subcategories = [
  { title: "Top Brands", slug: "top-brands", description: "Authorised distribution of leading global toy and game brands for retail and wholesale buyers.", icon: Trophy },
  { title: "Shop by Themes", slug: "shop-by-themes", description: "Curated toy and game collections organised by popular themes — STEM, outdoor, creative, and more.", icon: Puzzle },
  { title: "Shop by Age", slug: "shop-by-age", description: "Age-appropriate toys and games carefully categorised from infant to teen age groups.", icon: BookOpen },
  { title: "Other Brands", slug: "other-brands", description: "Emerging and specialty toy brands offering unique products for niche and mainstream markets.", icon: Gamepad2 },
];

const ToysGames = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img src={heroImg} alt="Toys & Games" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-12 md:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white">
            Games &amp; Toys
          </h1>
        </div>
      </div>

      <section>
        <div className="container py-12 md:py-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Global-standard toys and games for every market segment. From top brands
            to themed collections and age-based ranges — sourced, certified, and export-ready.
          </p>
        </div>
      </section>

      {/* Subcategory Grid */}
      <section className="pb-20">
        <div className="container">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subcategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/toys-games/${cat.slug}`}
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

export default ToysGames;
