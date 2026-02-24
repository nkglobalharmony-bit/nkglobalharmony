import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section className="bg-foreground text-background py-20 md:py-28">
    <div className="container text-center">
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Ready to Start?
      </h2>
      <p className="text-background/70 text-lg max-w-md mx-auto mb-10 leading-relaxed">
        Whether you're sourcing products or expanding distribution, we're ready
        to connect.
      </p>
      <Link
        to="/quote"
        className="inline-flex items-center gap-2 bg-background text-foreground px-10 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-background/90 transition-colors"
      >
        Request a Quote <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default CallToAction;
