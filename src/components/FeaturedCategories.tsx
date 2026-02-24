import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import apparelImg from "@/assets/hero-apparel.jpg";
import jewelleryImg from "@/assets/hero-jewellery.jpg";
import toysImg from "@/assets/hero-toys.jpg";

const categories = [
  {
    id: "apparel",
    title: "Apparel",
    description: "Structured garments designed for global markets — from tailored essentials to performance-driven collections.",
    image: apparelImg,
    link: "/apparel",
  },
  {
    id: "jewellery",
    title: "Jewellery",
    description: "Precision-crafted jewellery for international distribution — from sterling silver to fine gold and lab-grown diamonds.",
    image: jewelleryImg,
    link: "/jewellery",
  },
  {
    id: "toys-games",
    title: "Toys & Games",
    description: "Global-standard toys and games — from educational STEM kits to arcade equipment, certified and export-ready.",
    image: toysImg,
    link: "/toys-games",
  },
];

const FeaturedCategories = () => (
  <section id="categories" className="py-20 md:py-28">
    <div className="container">
      <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-3 block">
        Our Categories
      </span>
      <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-14">
        What We Source
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="group relative overflow-hidden aspect-[3/4] block"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-2">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-white group-hover:underline underline-offset-4">
                Explore <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCategories;
