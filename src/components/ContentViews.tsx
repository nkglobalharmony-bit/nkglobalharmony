import { ArrowLeft, ArrowRight } from "lucide-react";
import { subcategories, getSubcategory } from "@/data/subcategories";
import { useView, type ParentCategory } from "@/context/ViewContext";
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
      : "Toys & Games";

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
      <div className="relative w-full h-[340px] md:h-[460px] overflow-hidden border-b border-border">
        <img
          src={categoryImages[parent]}
          alt={label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-10 md:pb-14">
          <button
            onClick={() => setView({ type: "home" })}
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground/80 hover:text-foreground transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground">
            {label}
          </h1>
        </div>
      </div>

      <section className="border-b border-border">
        <div className="container py-10 md:py-14">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            {descriptions[parent]}
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {items.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.slug}
                  onClick={() =>
                    setView({ type: "subcategory", parent, slug: cat.slug })
                  }
                  className="bg-background p-8 md:p-10 flex flex-col text-left hover:bg-muted/40 transition-colors group"
                >
                  <Icon size={24} className="text-foreground mb-5" strokeWidth={1.5} />
                  <h2 className="font-serif text-xl md:text-2xl font-medium mb-3 group-hover:underline underline-offset-4">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-foreground/70 leading-relaxed">
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
        <p className="text-foreground/60">Category not found.</p>
      </main>
    );
  }

  const Icon = data.icon;

  return (
    <main className="flex-1">
      {/* Hero image banner */}
      <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden border-b border-border">
        <img
          src={categoryImages[parent]}
          alt={data.parentLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-10 md:pb-14">
          <button
            onClick={() => setView({ type: "category", parent })}
            className="inline-flex items-center gap-2 text-xs font-sans tracking-wide text-foreground/80 hover:text-foreground transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={14} /> Back to {data.parentLabel}
          </button>
          <div className="flex items-end gap-4">
            <Icon size={36} strokeWidth={1.25} className="text-foreground mb-1 shrink-0" />
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-tight text-foreground">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="border-b border-border">
        <div className="container py-10 md:py-14">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            {data.longDescription}
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            What We Offer
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {data.highlights.map((h) => (
              <div key={h.heading} className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl md:text-2xl font-medium mb-3">
                  {h.heading}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
              Interested in {data.title}?
            </h3>
            <p className="text-sm text-foreground/60">
              Get in touch to discuss quantities, samples, and pricing.
            </p>
          </div>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors shrink-0"
          >
            Request a Quote <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

// ── Default home view ───────────────────────────────────────────────────────
export const HomeView = () => <main className="flex-1" />;
