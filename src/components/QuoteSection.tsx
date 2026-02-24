const QuoteSection = () => (
  <section className="py-20 md:py-28">
    <div className="container text-center max-w-3xl mx-auto">
      <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6 block">
        Our Philosophy
      </span>
      <blockquote className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug mb-6">
        "Good design travels. Quality, consistency, and intention are the
        currencies of international trade — carrying products across borders
        with integrity."
      </blockquote>
      <p className="text-sm text-muted-foreground font-sans tracking-wide">
        — NK Global Harmony
      </p>
    </div>
  </section>
);

export default QuoteSection;
