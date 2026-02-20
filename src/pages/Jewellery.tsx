import { Link } from "react-router-dom";
import { ArrowLeft, Gem, Crown, Sparkles, Leaf, Tag, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subcategories = [
  {
    title: "925 Sterling Silver Jewellery",
    description: "High-quality sterling silver pieces crafted for global retail — rings, necklaces, bracelets, and earrings.",
    icon: Gem,
  },
  {
    title: "Gold & Platinum Jewellery",
    description: "Luxurious gold and platinum collections spanning fine jewellery for bridal, gifting, and investment markets.",
    icon: Crown,
  },
  {
    title: "Trend-Driven Fashion Jewellery",
    description: "Mass market and retail-ready fashion jewellery aligned with global trend forecasts and seasonal collections.",
    icon: Sparkles,
  },
  {
    title: "Lab-Grown Diamonds & Gemstones",
    description: "Ethically produced lab-grown diamonds and certified gemstones for modern, conscious luxury buyers.",
    icon: Gem,
  },
  {
    title: "Private Label Jewellery Production",
    description: "End-to-end private label manufacturing — design, sampling, production, and packaging under your brand.",
    icon: Tag,
  },
  {
    title: "Custom Design Development & Sampling Support",
    description: "Bespoke design services from concept to prototype, with full sampling support for retail and wholesale buyers.",
    icon: Palette,
  },
];

const Jewellery = () => (
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
            Jewellery
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Precision-crafted jewellery for global markets. From sterling silver
            essentials to bespoke fine jewellery — we source, design, and export
            across every category.
          </p>
        </div>
      </section>

      {/* Subcategory Grid */}
      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {subcategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-background p-8 md:p-10 flex flex-col"
              >
                <cat.icon size={24} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-medium mb-3">
                  {cat.title}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {cat.description}
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

export default Jewellery;
