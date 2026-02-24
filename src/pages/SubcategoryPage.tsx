import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSubcategory } from "@/data/subcategories";

interface Props {
  parent: "apparel" | "jewellery" | "toys-games" | "services";
}

const SubcategoryPage = ({ parent }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const data = getSubcategory(parent, slug ?? "");

  if (!data) return <Navigate to={`/${parent}`} replace />;

  const Icon = data.icon;
  const parentPath = `/${parent}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground text-background">
          <div className="container py-16 md:py-24">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                to={parentPath}
                className="inline-flex items-center gap-2 text-xs font-sans tracking-wide text-background/60 hover:text-background transition-colors"
              >
                <ArrowLeft size={14} /> Back to {data.parentLabel}
              </Link>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <Icon size={36} strokeWidth={1.25} className="text-background mt-1 shrink-0" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                {data.title}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
              {data.longDescription}
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
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

        {/* CTA */}
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
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-foreground/90 transition-colors shrink-0"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubcategoryPage;
