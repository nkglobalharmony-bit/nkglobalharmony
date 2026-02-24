import { Link } from "react-router-dom";
import logo from "@/assets/NK_logo.png";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="NK Global Harmony" className="h-20 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Precision-driven international trade & export.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Categories
          </h4>
          <ul className="space-y-2.5">
            <li><Link to="/apparel" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Apparel</Link></li>
            <li><Link to="/jewellery" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Jewellery</Link></li>
            <li><Link to="/toys-games" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Toys & Games</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Services
          </h4>
          <ul className="space-y-2.5">
            <li><Link to="/services/brand-building-consulting" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Brand Consulting</Link></li>
            <li><Link to="/services/product-development-prototyping" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Product Development</Link></li>
            <li><Link to="/services/strategic-management-international" className="text-sm text-foreground/70 hover:text-foreground transition-colors">International Strategy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5">
            <li><Link to="/quote" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Request a Quote</Link></li>
            <li><span className="text-sm text-foreground/70">info@nkglobal.com</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 NK Global Harmony. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          International Trade & Export
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
