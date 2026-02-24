import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Gem, Crown, Sparkles, Leaf, Tag, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-jewellery.jpg";

const subcategories = [
  {
    title: "925 Sterling Silver Jewellery",
    slug: "sterling-silver",
    description: "High-quality sterling silver pieces crafted for global retail — rings, necklaces, bracelets, and earrings.",
    icon: Gem,
  },
  {
    title: "Gold & Platinum Jewellery",
    slug: "gold-platinum",
    description: "Luxurious gold and platinum collections spanning fine jewellery for bridal, gifting, and investment markets.",
    icon: Crown,
  },
  {
    title: "Trend-Driven Fashion Jewellery",
    slug: "fashion-jewellery",
    description: "Mass market and retail-ready fashion jewellery aligned with global trend forecasts and seasonal collections.",
    icon: Sparkles,
  },
  {
    title: "Lab-Grown Diamonds & Gemstones",
    slug: "lab-grown",
    description: "Ethically produced lab-grown diamonds and certified gemstones for modern, conscious luxury buyers.",
    icon: Gem,
  },
  {
    title: "Private Label Jewellery Production",
    slug: "private-label",
    description: "End-to-end private label manufacturing — design, sampling, production, and packaging under your brand.",
    icon: Tag,
  },
  {
    title: "Custom Design Development & Sampling Support",
    slug: "custom-design",
    description: "Bespoke design services from concept to prototype, with full sampling support for retail and wholesale buyers.",
    icon: Palette,
  },
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
            Precision-crafted jewellery for global markets. From sterling silver
            essentials to bespoke fine jewellery — we source, design, and export
            across every category.
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
