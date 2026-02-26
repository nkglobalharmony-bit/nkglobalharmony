import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shirt, Gem, Gamepad2, Package, Briefcase } from "lucide-react";

const categories = [
  { title: "Apparel", description: "Menswear, womenswear, kidswear, unisex, and industrial garments for global markets.", icon: Shirt, path: "/apparel" },
  { title: "Jewellery", description: "American diamonds, Indo Western, Kundan, oxidised, pearls, antique, and fashion jewellery.", icon: Gem, path: "/jewellery" },
  { title: "Games & Toys", description: "Top brands, themed collections, age-based ranges, and specialty toy distributors.", icon: Gamepad2, path: "/toys-games" },
  { title: "Packaging", description: "Sustainable, luxury, corrugated, apparel, jewellery, and branded packaging solutions.", icon: Package, path: "/packaging" },
  { title: "Services", description: "Brand building, market research, product development, marketing, and tech packs.", icon: Briefcase, path: "/services/brand-building-consulting" },
];

const CategoriesPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Categories</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            Explore our full range of product categories and business services.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link key={cat.title} to={cat.path} className="bg-secondary p-8 md:p-10 flex flex-col hover:shadow-lg transition-all group">
                <cat.icon size={28} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3 group-hover:underline underline-offset-4">{cat.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CategoriesPage;
