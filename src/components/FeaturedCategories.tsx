import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "apparel",
    label: "FEATURED",
    title: "Apparel",
    description:
      "Structured garments designed for global markets. From tailored essentials to performance-driven collections.",
  },
  {
    id: "jewellery",
    title: "Jewellery",
    description:
      "Minimal forms crafted with precision for international distribution and discerning clientele.",
  },
  {
    id: "educational-systems",
    title: "Educational Systems",
    description:
      "Learning products and institutional solutions designed for global scalability.",
  },
];

const FeaturedCategories = () => (
  <section>
    {categories.map((cat) => (
      <div key={cat.id} id={cat.id} className="border-b border-border">
        <div className="container py-16 md:py-20">
          {cat.label && (
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              {cat.label}
            </span>
          )}
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {cat.title}
          </h2>
          <p className="text-foreground/70 max-w-xl leading-relaxed mb-6">
            {cat.description}
          </p>
          {cat.id === "apparel" ? (
            <Link
              to="/apparel"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              View Category <ArrowRight size={16} />
            </Link>
          ) : (
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              View Category <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    ))}
  </section>
);

export default FeaturedCategories;
