import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">About NK Global</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            NK Global Harmony is an international trade company specialising in Apparel, Jewellery, Toys & Games, and Packaging. We connect manufacturers with global buyers through quality sourcing, rigorous QA, and dependable logistics.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">Our Mission</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-background p-8 md:p-10">
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Global Sourcing</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">We source from a vetted network of manufacturers across India and South-East Asia, ensuring quality and competitive pricing for every order.</p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Quality Assurance</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Every product passes through multi-stage quality checks before shipment — from raw material inspection to final packaging audit.</p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Export Excellence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">End-to-end export management including documentation, compliance, shipping coordination, and delivery tracking.</p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Client Partnerships</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">We build long-term partnerships with our clients, acting as an extension of their sourcing and procurement teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Ready to work with us?</h3>
            <p className="text-sm text-muted-foreground">Get in touch to discuss your sourcing requirements.</p>
          </div>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-foreground/90 transition-colors shrink-0">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
