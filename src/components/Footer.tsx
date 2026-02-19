const Footer = () => (
  <footer>
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <p className="font-serif text-lg font-semibold">NK Global</p>
        <p className="text-sm text-muted-foreground mt-1">
          International Trade &amp; Export
        </p>
      </div>
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-10">
        <a href="#apparel" className="hover:text-foreground transition-colors">Apparel</a>
        <a href="#jewellery" className="hover:text-foreground transition-colors">Jewellery</a>
        <a href="#educational-systems" className="hover:text-foreground transition-colors">Educational Systems</a>
      </div>
      <div className="border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 NK Global. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
