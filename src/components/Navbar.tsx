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
  { label: "Menswear", slug: "menswear" },
  { label: "Womenswear", slug: "womenswear" },
  { label: "Kidswear", slug: "kidswear" },
  { label: "Ethnic & Occasion Wear", slug: "ethnic-occasion-wear" },
  { label: "Activewear & Athleisure", slug: "activewear-athleisure" },
  { label: "Private Label Production", slug: "private-label-production" },
  { label: "Custom Sampling & Bulk Manufacturing", slug: "custom-sampling-bulk" },
  { label: "Organic & Sustainable Fabric Options", slug: "organic-sustainable" },
];

const jewellerySubcategories = [
  { label: "925 Sterling Silver Jewellery", slug: "sterling-silver" },
  { label: "Gold & Platinum Jewellery", slug: "gold-platinum" },
  { label: "Trend-Driven Fashion Jewellery (Mass Market & Retail)", slug: "fashion-jewellery" },
  { label: "Lab-Grown Diamonds & Gemstones", slug: "lab-grown" },
  { label: "Private Label Jewellery Production", slug: "private-label" },
  { label: "Custom Design Development & Sampling Support", slug: "custom-design" },
];

const toysGamesSubcategories = [
  { label: "Educational Toys", slug: "educational-toys" },
  { label: "Board Games", slug: "board-games" },
  { label: "Dolls & Soft Toys", slug: "dolls-soft-toys" },
  { label: "Puzzles", slug: "puzzles" },
  { label: "Outdoor Toys", slug: "outdoor-toys" },
  { label: "Sports Accessories & Equipment", slug: "sports-accessories" },
  { label: "Arcade Game Equipment", slug: "arcade-game-equipment" },
];

const navItems = ["Request a Quote"];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [apparelOpen, setApparelOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const [toysOpen, setToysOpen] = useState(false);

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
                    <DropdownMenuItem key={sub.slug} asChild>
                      <Link
                        to={`/apparel/${sub.slug}`}
                        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
                      >
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {/* Jewellery with dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Jewellery <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-background border border-border shadow-md z-50 min-w-[280px]"
                >
                  {jewellerySubcategories.map((sub) => (
                    <DropdownMenuItem key={sub.slug} asChild>
                      <Link
                        to={`/jewellery/${sub.slug}`}
                        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
                      >
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {/* Toys & Games with dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Toys &amp; Games <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-background border border-border shadow-md z-50 min-w-[260px]"
                >
                  {toysGamesSubcategories.map((sub) => (
                    <DropdownMenuItem key={sub.slug} asChild>
                      <Link
                        to={`/toys-games/${sub.slug}`}
                        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
                      >
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <Link
                to="/quote"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Request a Quote
              </Link>
            </li>
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
                    <li key={sub.slug}>
                      <Link
                        to={`/apparel/${sub.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Jewellery accordion on mobile */}
            <li>
              <button
                onClick={() => setJewelleryOpen(!jewelleryOpen)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Jewellery <ChevronDown size={14} className={`transition-transform ${jewelleryOpen ? "rotate-180" : ""}`} />
              </button>
              {jewelleryOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {jewellerySubcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`/jewellery/${sub.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Toys & Games accordion on mobile */}
            <li>
              <button
                onClick={() => setToysOpen(!toysOpen)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Toys &amp; Games <ChevronDown size={14} className={`transition-transform ${toysOpen ? "rotate-180" : ""}`} />
              </button>
              {toysOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {toysGamesSubcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`/toys-games/${sub.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/quote"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
