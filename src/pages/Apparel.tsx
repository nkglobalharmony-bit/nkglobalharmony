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
      <div className="relative w-full h-[340px] md:h-[460px] overflow-hidden border-b border-border">
        <img src={heroImg} alt="Apparel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 flex flex-col justify-end container pb-10 md:pb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground/80 hover:text-foreground transition-colors mb-5 w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground">
            Apparel
          </h1>
        </div>
      </div>

      <section className="border-b border-border">
        <div className="container py-10 md:py-14">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Structured garments designed for global markets. From tailored
            essentials to performance-driven collections — we source and export
            across every category.
          </p>
        </div>
      </section>

      {/* Category Image Grid */}
      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/apparel/${cat.slug}`}
                className="group relative overflow-hidden aspect-[3/4] block"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Vertical title */}
                <span
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-4xl md:text-5xl font-bold text-white/90 tracking-tight"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  {cat.title.toUpperCase()}
                </span>
                {/* CTA button */}
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-background text-foreground text-xs font-sans tracking-wide px-5 py-2.5 group-hover:bg-foreground group-hover:text-background transition-colors">
                    VIEW CATEGORY
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
