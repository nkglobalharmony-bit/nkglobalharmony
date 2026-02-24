import { ArrowLeft, ArrowRight } from "lucide-react";
import { subcategories, getSubcategory } from "@/data/subcategories";
import { useView, type ParentCategory } from "@/context/ViewContext";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import Services from "@/components/Services";
import GlobalReach from "@/components/GlobalReach";
import QuoteSection from "@/components/QuoteSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import apparelImg from "@/assets/hero-apparel.jpg";
import jewelleryImg from "@/assets/hero-jewellery.jpg";
import toysImg from "@/assets/hero-toys.jpg";

const categoryImages: Record<string, string> = {
  apparel: apparelImg,
  jewellery: jewelleryImg,
  "toys-games": toysImg,
};

// ── Category landing (grid of subcategory cards) ────────────────────────────
export const CategoryView = ({
  parent,
}: {
  parent: ParentCategory;
}) => {
  const { setView } = useView();
  const items = subcategories.filter((s) => s.parent === parent);
  const label =
    parent === "apparel"
      ? "Apparel"
      : parent === "jewellery"
      ? "Jewellery"
      : parent === "toys-games"
      ? "Toys & Games"
      : parent === "packaging"
      ? "Packaging"
      : "Services";

  const descriptions: Record<string, string> = {
    apparel:
      "Structured garments designed for global markets. From tailored essentials to performance-driven collections — we source and export across every category.",
    jewellery:
      "Precision-crafted jewellery for global markets. From sterling silver essentials to bespoke fine jewellery — we source, design, and export across every category.",
    "toys-games":
      "Global-standard toys and games for every market segment. From educational STEM kits to arcade equipment — manufactured, certified, and export-ready.",
  };

  return (
    <main className="flex-1">
      {/* Hero image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={categoryImages[parent]}
          alt={label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-12 md:pb-16">
          <button
            onClick={() => setView({ type: "home" })}
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white">
            {label}
          </h1>
        </div>
      </div>

      <section>
        <div className="container py-12 md:py-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {descriptions[parent]}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.slug}
                  onClick={() =>
                    setView({ type: "subcategory", parent, slug: cat.slug })
                  }
                  className="bg-secondary p-8 md:p-10 flex flex-col text-left hover:shadow-lg transition-all group"
                >
                  <Icon size={28} className="text-foreground mb-5" strokeWidth={1.5} />
                  <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3 group-hover:underline underline-offset-4">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

// ── Individual subcategory view ─────────────────────────────────────────────
export const SubcategoryView = ({
  parent,
  slug,
}: {
  parent: ParentCategory;
  slug: string;
}) => {
  const { setView } = useView();
  const data = getSubcategory(parent, slug);

  if (!data) {
    return (
      <main className="flex-1 container py-24">
        <button
          onClick={() => setView({ type: "category", parent })}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <p className="text-muted-foreground">Category not found.</p>
      </main>
    );
  }

  const Icon = data.icon;

  return (
    <main className="flex-1">
      {/* Hero image banner */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <img
          src={categoryImages[parent]}
          alt={data.parentLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-12 md:pb-16">
          <button
            onClick={() => setView({ type: "category", parent })}
            className="inline-flex items-center gap-2 text-xs font-sans tracking-wide text-white/70 hover:text-white transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={14} /> Back to {data.parentLabel}
          </button>
          <div className="flex items-end gap-4">
            <Icon size={36} strokeWidth={1.25} className="text-white mb-1 shrink-0" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      <section>
        <div className="container py-12 md:py-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {data.longDescription}
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">
            What We Offer
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.highlights.map((h) => (
              <div key={h.heading} className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                  {h.heading}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
              Interested in {data.title}?
            </h3>
            <p className="text-sm text-muted-foreground">
              Get in touch to discuss quantities, samples, and pricing.
            </p>
          </div>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-foreground/90 transition-colors shrink-0"
          >
            Request a Quote <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

// ── Default home view ───────────────────────────────────────────────────────
export const HomeView = () => (
  <>
    <Hero />
    <FeaturedCategories />
    <Services />
    <GlobalReach />
    <QuoteSection />
    <CallToAction />
    <Footer />
  </>
);
