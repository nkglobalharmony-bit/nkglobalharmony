import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="font-serif text-xl font-semibold tracking-tight">
          NK Global
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="container border-t border-border py-6 animate-fade-in">
          <ul className="space-y-4 font-sans text-sm tracking-wide">
            {["Apparel", "Jewellery", "Educational Systems", "Request a Quote"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
