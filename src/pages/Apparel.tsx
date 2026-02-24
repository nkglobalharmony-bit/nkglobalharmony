import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-apparel.jpg";
import menswearImg from "@/assets/apparel-menswear.jpg";
import womenswearImg from "@/assets/apparel-womenswear.jpg";
import kidswearImg from "@/assets/apparel-kidswear.jpg";
import ethnicImg from "@/assets/apparel-ethnic.jpg";
import activewearImg from "@/assets/apparel-activewear.jpg";
import workwearImg from "@/assets/apparel-workwear.jpg";
import privateLabelImg from "@/assets/apparel-private-label.jpg";
import samplingImg from "@/assets/apparel-sampling.jpg";
import sustainableImg from "@/assets/apparel-sustainable.jpg";

const categories = [
  { title: "Menswear", slug: "menswear", image: menswearImg },
  { title: "Womenswear", slug: "womenswear", image: womenswearImg },
  { title: "Kidswear", slug: "kidswear", image: kidswearImg },
  { title: "Ethnic & Occasion Wear", slug: "ethnic-occasion-wear", image: ethnicImg },
  { title: "Activewear & Athleisure", slug: "activewear-athleisure", image: activewearImg },
  { title: "Workwear & Uniforms", slug: "workwear-uniforms", image: workwearImg },
  { title: "Private Label", slug: "private-label-production", image: privateLabelImg },
  { title: "Custom Sampling", slug: "custom-sampling-bulk", image: samplingImg },
  { title: "Organic & Sustainable", slug: "organic-sustainable", image: sustainableImg },
];

const Apparel = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img src={heroImg} alt="Apparel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-12 md:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white">
            Apparel
          </h1>
        </div>
      </div>

      <section>
        <div className="container py-12 md:py-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Structured garments designed for global markets. From tailored
            essentials to performance-driven collections — we source and export
            across every category.
          </p>
        </div>
      </section>

      {/* Category Image Grid */}
      <section className="pb-20">
        <div className="container">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/apparel/${cat.slug}`}
                className="group relative overflow-hidden aspect-[3/4] block"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                    {cat.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-white/80 group-hover:text-white group-hover:underline underline-offset-4 transition-colors">
                    View Category
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Apparel;
