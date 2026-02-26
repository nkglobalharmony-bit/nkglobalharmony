import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Phone, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            Get in touch with our team to discuss sourcing, partnerships, or any enquiry.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div id="phone" className="bg-secondary p-8 md:p-10">
              <Phone size={28} className="text-foreground mb-5" strokeWidth={1.5} />
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Contact #</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Call us directly for immediate assistance with your sourcing or order enquiry.
              </p>
            </div>
            <div id="email" className="bg-secondary p-8 md:p-10">
              <Mail size={28} className="text-foreground mb-5" strokeWidth={1.5} />
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Email Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Send us a detailed enquiry and our team will respond within 24 hours.
              </p>
            </div>
            <div id="partner" className="bg-secondary p-8 md:p-10">
              <Handshake size={28} className="text-foreground mb-5" strokeWidth={1.5} />
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">Partner with Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in a strategic partnership or distribution arrangement? Let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Need a quote?</h3>
            <p className="text-sm text-muted-foreground">Submit your requirements and we'll get back to you with pricing.</p>
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

export default Contact;
