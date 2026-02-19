import { ArrowRight } from "lucide-react";

const CallToAction = () => (
  <section className="border-b border-border">
    <div className="container py-20 md:py-28 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
        Begin Global Partnership
      </h2>
      <p className="text-foreground/70 text-lg max-w-md mx-auto mb-10 leading-relaxed">
        Whether you're sourcing products or expanding distribution, we're ready
        to connect.
      </p>
      <a
        href="#request-a-quote"
        className="inline-flex items-center gap-2 border border-border px-8 py-3.5 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors"
      >
        Request Quote <ArrowRight size={16} />
      </a>
    </div>
  </section>
);

export default CallToAction;
