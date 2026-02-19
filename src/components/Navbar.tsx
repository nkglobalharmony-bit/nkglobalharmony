import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/NK_logo.png";

const navItems = ["Apparel", "Jewellery", "Educational Systems", "Request a Quote"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="NK Global Harmony" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item}>
                {item === "Apparel" ? (
                  <Link to="/apparel" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                ) : (
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="container border-t border-border py-6 animate-fade-in md:hidden">
          <ul className="space-y-4 font-sans text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item}>
                {item === "Apparel" ? (
                  <Link to="/apparel" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
                    {item}
                  </Link>
                ) : (
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
