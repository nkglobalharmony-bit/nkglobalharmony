import { ArrowLeft, ArrowRight } from "lucide-react";
import { subcategories, getSubcategory } from "@/data/subcategories";
import { useView } from "@/context/ViewContext";

// ── Category landing (grid of subcategory cards) ────────────────────────────
export const CategoryView = ({
  parent,
}: {
  parent: "apparel" | "jewellery" | "toys-games";
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
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <button
            onClick={() => setView({ type: "home" })}
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
            {label}
          </h1>
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
  parent: "apparel" | "jewellery" | "toys-games";
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
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="flex flex-col gap-2 mb-8">
            <button
              onClick={() => setView({ type: "category", parent })}
              className="inline-flex items-center gap-2 text-xs font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft size={14} /> Back to {data.parentLabel}
            </button>
          </div>
          <div className="flex items-start gap-5 mb-6">
            <Icon size={36} strokeWidth={1.25} className="text-foreground mt-1 shrink-0" />
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-tight">
              {data.title}
            </h1>
          </div>
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
export const HomeView = () => {
  const { setView } = useView();

  const sections = [
    {
      parent: "apparel" as const,
      label: "Apparel",
      description:
        "Structured garments designed for global markets. From tailored essentials to performance-driven collections.",
    },
    {
      parent: "jewellery" as const,
      label: "Jewellery",
      description:
        "Minimal forms crafted with precision for international distribution and discerning clientele.",
    },
    {
      parent: "toys-games" as const,
      label: "Toys & Games",
      description:
        "Learning products, play sets, and entertainment solutions designed for global scalability.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
            NK Global
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10">
            Precision-driven international trade. We source, certify, and export
            across categories — connecting manufacturers to markets worldwide.
          </p>
          <button
            onClick={() => setView({ type: "category", parent: "apparel" })}
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            Explore Categories <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      {sections.map((s, i) => (
        <div key={s.parent} className="border-b border-border">
          <div className="container py-16 md:py-20">
            {i === 0 && (
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Featured
              </span>
            )}
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              {s.label}
            </h2>
            <p className="text-foreground/70 max-w-xl leading-relaxed mb-6">
              {s.description}
            </p>
            <button
              onClick={() => setView({ type: "category", parent: s.parent })}
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              View Category <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};
