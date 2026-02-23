import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/NK_logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ViewContext is optional — only used on the homepage
let useViewSafe: (() => { setView: (v: unknown) => void } | null) | null = null;
try {
  // Dynamic import to avoid crashing on pages without the provider
  useViewSafe = require("@/context/ViewContext").useView;
} catch {
  useViewSafe = null;
}

import { useView } from "@/context/ViewContext";

const apparelSubcategories = [
  { label: "Menswear", slug: "menswear" },
  { label: "Womenswear", slug: "womenswear" },
  { label: "Kidswear", slug: "kidswear" },
  { label: "Ethnic & Occasion Wear", slug: "ethnic-occasion-wear" },
  { label: "Activewear & Athleisure", slug: "activewear-athleisure" },
  { label: "Workwear & Uniforms", slug: "workwear-uniforms" },
  { label: "Private Label Production", slug: "private-label-production" },
  { label: "Custom Sampling & Bulk Manufacturing", slug: "custom-sampling-bulk" },
  { label: "Organic & Sustainable Fabric Options", slug: "organic-sustainable" },
];

const jewellerySubcategories = [
  { label: "925 Sterling Silver Jewellery", slug: "sterling-silver" },
  { label: "Gold & Platinum Jewellery", slug: "gold-platinum" },
  { label: "Trend-Driven Fashion Jewellery", slug: "fashion-jewellery" },
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

const packagingSubcategories = [
  { label: "Sustainable & Eco-Friendly", slug: "sustainable-eco-friendly" },
  { label: "Corrugated Export Cartons", slug: "corrugated-export-cartons" },
  { label: "Luxury Rigid Gift Boxes", slug: "luxury-rigid-gift-boxes" },
  { label: "Custom Printed Paper Bags", slug: "custom-printed-paper-bags" },
  { label: "Apparel Packaging", slug: "apparel-packaging" },
  { label: "Jewellery Packaging", slug: "jewellery-packaging" },
  { label: "E-Commerce Mailer Packaging", slug: "ecommerce-mailer-packaging" },
  { label: "Labels, Tags & Printed Branding Materials", slug: "labels-tags-branding" },
  { label: "Custom Branding & Private Label Packaging", slug: "custom-branding-private-label" },
];

type Parent = "apparel" | "jewellery" | "toys-games" | "packaging";

// Hook that safely returns setView only when on the homepage (ViewProvider present)
const useSafeView = () => {
  try {
    return useView();
  } catch {
    return null;
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [apparelOpen, setApparelOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const [toysOpen, setToysOpen] = useState(false);
  const [packagingOpen, setPackagingOpen] = useState(false);
  const location = useLocation();
  const viewCtx = useSafeView();
  const isHome = location.pathname === "/";

  const handleCategory = (parent: Parent) => {
    if (isHome && viewCtx) {
      viewCtx.setView({ type: "category", parent });
    }
  };

  const handleSubcategory = (parent: Parent, slug: string) => {
    setOpen(false);
    if (isHome && viewCtx) {
      viewCtx.setView({ type: "subcategory", parent, slug });
    }
  };

  const categoryTrigger = (label: string, parent: Parent) => (
    <DropdownMenuTrigger
      onClick={() => handleCategory(parent)}
      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors outline-none"
    >
      {label} <ChevronDown size={14} />
    </DropdownMenuTrigger>
  );

  const subcategoryItem = (
    sub: { label: string; slug: string },
    parent: Parent
  ) =>
    isHome ? (
      <DropdownMenuItem
        key={sub.slug}
        onSelect={() => handleSubcategory(parent, sub.slug)}
        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
      >
        {sub.label}
      </DropdownMenuItem>
    ) : (
      <DropdownMenuItem key={sub.slug} asChild>
        <Link
          to={`/${parent}/${sub.slug}`}
          className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
        >
          {sub.label}
        </Link>
      </DropdownMenuItem>
    );

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-6">
        {isHome ? (
          <button onClick={() => viewCtx?.setView({ type: "home" })}>
            <img src={logo} alt="NK Global Harmony" className="h-28" />
          </button>
        ) : (
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NK Global Harmony" className="h-28" />
          </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-sm tracking-wide">
            <li>
              <DropdownMenu>
                {categoryTrigger("Apparel", "apparel")}
                <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[240px]">
                  {apparelSubcategories.map((sub) => subcategoryItem(sub, "apparel"))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <DropdownMenu>
                {categoryTrigger("Jewellery", "jewellery")}
                <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[280px]">
                  {jewellerySubcategories.map((sub) => subcategoryItem(sub, "jewellery"))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <DropdownMenu>
                {categoryTrigger("Toys & Games", "toys-games")}
                <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[260px]">
                  {toysGamesSubcategories.map((sub) => subcategoryItem(sub, "toys-games"))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <DropdownMenu>
                {categoryTrigger("Packaging", "packaging")}
                <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[300px]">
                  {packagingSubcategories.map((sub) => subcategoryItem(sub, "packaging"))}
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
            {/* Apparel */}
            <li>
              <button
                onClick={() => { setApparelOpen(!apparelOpen); handleCategory("apparel"); }}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Apparel <ChevronDown size={14} className={`transition-transform ${apparelOpen ? "rotate-180" : ""}`} />
              </button>
              {apparelOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {apparelSubcategories.map((sub) => (
                    <li key={sub.slug}>
                      {isHome ? (
                        <button
                          onClick={() => handleSubcategory("apparel", sub.slug)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <Link
                          to={`/apparel/${sub.slug}`}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Jewellery */}
            <li>
              <button
                onClick={() => { setJewelleryOpen(!jewelleryOpen); handleCategory("jewellery"); }}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Jewellery <ChevronDown size={14} className={`transition-transform ${jewelleryOpen ? "rotate-180" : ""}`} />
              </button>
              {jewelleryOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {jewellerySubcategories.map((sub) => (
                    <li key={sub.slug}>
                      {isHome ? (
                        <button
                          onClick={() => handleSubcategory("jewellery", sub.slug)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <Link
                          to={`/jewellery/${sub.slug}`}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Toys & Games */}
            <li>
              <button
                onClick={() => { setToysOpen(!toysOpen); handleCategory("toys-games"); }}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Toys &amp; Games <ChevronDown size={14} className={`transition-transform ${toysOpen ? "rotate-180" : ""}`} />
              </button>
              {toysOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {toysGamesSubcategories.map((sub) => (
                    <li key={sub.slug}>
                      {isHome ? (
                        <button
                          onClick={() => handleSubcategory("toys-games", sub.slug)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <Link
                          to={`/toys-games/${sub.slug}`}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Packaging */}
            <li>
              <button
                onClick={() => { setPackagingOpen(!packagingOpen); handleCategory("packaging"); }}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Packaging <ChevronDown size={14} className={`transition-transform ${packagingOpen ? "rotate-180" : ""}`} />
              </button>
              {packagingOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {packagingSubcategories.map((sub) => (
                    <li key={sub.slug}>
                      {isHome ? (
                        <button
                          onClick={() => handleSubcategory("packaging", sub.slug)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <Link
                          to={`/packaging/${sub.slug}`}
                          className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
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
