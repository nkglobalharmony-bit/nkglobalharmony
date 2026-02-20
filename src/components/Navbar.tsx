import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/NK_logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const apparelSubcategories = [
  "Menswear",
  "Womenswear",
  "Kidswear",
  "Ethnic & Occasion Wear",
  "Activewear & Athleisure",
  "Private Label Production",
  "Custom Sampling & Bulk Manufacturing",
  "Organic & Sustainable Fabric Options",
];

const navItems = ["Jewellery", "Educational Systems", "Request a Quote"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [apparelOpen, setApparelOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="NK Global Harmony" className="h-28" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-sm tracking-wide">
            {/* Apparel with dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Apparel <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-background border border-border shadow-md z-50 min-w-[240px]"
                >
                  {apparelSubcategories.map((sub) => (
                    <DropdownMenuItem key={sub} asChild>
                      <Link
                        to="/apparel"
                        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
                      >
                        {sub}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
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
            {/* Apparel accordion on mobile */}
            <li>
              <button
                onClick={() => setApparelOpen(!apparelOpen)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Apparel <ChevronDown size={14} className={`transition-transform ${apparelOpen ? "rotate-180" : ""}`} />
              </button>
              {apparelOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {apparelSubcategories.map((sub) => (
                    <li key={sub}>
                      <Link
                        to="/apparel"
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                        onClick={() => setOpen(false)}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
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

