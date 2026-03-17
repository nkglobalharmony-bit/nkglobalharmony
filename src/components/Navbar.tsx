import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import lotusIcon from "@/assets/lotus-icon.png";
import { Link, useLocation } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useView } from "@/context/ViewContext";

const aboutUsLinks = [
  { label: "About Us", slug: "about" },
  { label: "Categories", slug: "categories" },
  { label: "Why Choose Us", slug: "why-choose-us" },
  { label: "Our USPs", slug: "our-usps" },
  { label: "Global Connections", slug: "global-connections" },
  { label: "Certifications", slug: "certifications" },
];

const apparelSubcategories = [
  { label: "Women's Wear", slug: "womenswear" },
  { label: "Men's Wear", slug: "menswear" },
  { label: "Kids Wear", slug: "kidswear" },
  { label: "Unisex", slug: "unisex" },
  { label: "Industrial", slug: "industrial" },
];

const jewellerySubcategories = [
  { label: "American Diamonds", slug: "american-diamonds" },
  { label: "Indo Western", slug: "indo-western" },
  { label: "Kundan", slug: "kundan" },
  { label: "Oxidised", slug: "oxidised" },
  { label: "Pearls", slug: "pearls" },
  { label: "Antique", slug: "antique" },
  { label: "Fashion Jewellery", slug: "fashion-jewellery" },
];

const toysGamesSubcategories = [
  { label: "Top Brands", slug: "top-brands" },
  { label: "Shop by Themes", slug: "shop-by-themes" },
  { label: "Shop by Age", slug: "shop-by-age" },
  { label: "Other Brands", slug: "other-brands" },
];

const packagingSubcategories = [
  { label: "Sustainable / Eco-Friendly Packaging", slug: "sustainable-eco-friendly" },
  { label: "Custom Printed Paper Bags", slug: "custom-printed-paper-bags" },
  { label: "Corrugated Shipping Boxes", slug: "corrugated-export-cartons" },
  { label: "Luxury Rigid Gift Boxes", slug: "luxury-rigid-gift-boxes" },
  { label: "Apparel Packaging (Paper & Poly)", slug: "apparel-packaging" },
  { label: "Jewellery Packaging", slug: "jewellery-packaging" },
  { label: "Labels & Printed Packaging Materials", slug: "labels-tags-branding" },
];

const servicesSubcategories = [
  { label: "Brand Building, Management & Consulting", slug: "brand-building-consulting" },
  { label: "Market Research & Trend Forecasting Services", slug: "market-research-trend-forecasting" },
  { label: "Product Development & Prototyping Services", slug: "product-development-prototyping" },
  { label: "Social Media Creatives & E-Commerce Marketing Services", slug: "social-media-ecommerce-marketing" },
  { label: "Strategic Management in International Business", slug: "strategic-management-international" },
  { label: "Fashion Tech Packs & Management", slug: "fashion-tech-packs" },
];

const contactUsLinks = [
  { label: "Contact #", path: "/contact" },
  { label: "Email Us", path: "/contact#email" },
  { label: "Get a Quote", path: "/quote" },
  { label: "Partner with Us", path: "/contact#partner" },
];

type Parent = "apparel" | "jewellery" | "toys-games" | "packaging" | "services";

const useSafeView = () => {
  try {
    return useView();
  } catch {
    return null;
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [apparelOpen, setApparelOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const [toysOpen, setToysOpen] = useState(false);
  const [packagingOpen, setPackagingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  const viewCtx = useSafeView();
  const isHome = location.pathname === "/";

  const navLinkClass = "flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors outline-none font-medium";

  const renderDropdown = (
    label: string,
    items: { label: string; slug: string }[],
    basePath: string,
    parent?: Parent
  ) => (
    <DropdownMenu>
      <DropdownMenuTrigger className={navLinkClass}>
        {label} <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[260px]">
        {items.map((item) => (
          <DropdownMenuItem key={item.slug} asChild>
            <Link
              to={`${basePath}/${item.slug}`}
              className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderMobileAccordion = (
    label: string,
    isOpen: boolean,
    toggle: () => void,
    items: { label: string; slug?: string; path?: string }[],
    basePath?: string
  ) => (
    <li>
      <button
        onClick={toggle}
        className="flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors w-full text-left font-medium"
      >
        {label} <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <ul className="mt-2 ml-4 space-y-2">
          {items.map((item) => (
            <li key={item.slug || item.path}>
              <Link
                to={item.path || `${basePath}/${item.slug}`}
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const LogoImg = () => (
    <span className="relative flex items-center justify-center">
      <img
        src={lotusIcon}
        alt=""
        aria-hidden="true"
        className="absolute h-12 w-12 object-contain opacity-15 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        loading="eager"
        decoding="async"
      />
      <span className="relative flex flex-col items-center leading-none">
        <span className="font-serif text-lg font-semibold text-primary-foreground sm:text-xl lg:text-2xl">NK</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70 sm:text-xs">
          Global Harmony
        </span>
      </span>
    </span>
  );

  return (
    <header className="sticky top-0 z-50 text-primary-foreground navbar-obsidian">
      {/* Logo row */}
      <div className="container flex flex-col lg:flex-row items-center justify-between py-4">
        {isHome ? (
          <button onClick={() => viewCtx?.setView({ type: "home" })} className="flex items-center mx-auto lg:mx-0">
            <LogoImg />
          </button>
        ) : (
          <Link to="/" className="flex items-center mx-auto lg:mx-0">
            <LogoImg />
          </Link>
        )}

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground lg:hidden absolute right-4"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Desktop nav row */}
      <nav className="hidden lg:block border-t border-border/20">
        <div className="container">
          <ul className="flex items-center justify-center gap-8 font-sans text-sm tracking-wide py-3">
            <li>{renderDropdown("About Us", aboutUsLinks, "/about")}</li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link to="/apparel" className={navLinkClass}>
                    Apparel <ChevronDown size={14} />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background border border-border shadow-md z-50 min-w-[220px]">
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
            <li>{renderDropdown("Jewellery", jewellerySubcategories, "/jewellery")}</li>
            <li>{renderDropdown("Games & Toys", toysGamesSubcategories, "/toys-games")}</li>
            <li>{renderDropdown("Packaging", packagingSubcategories, "/packaging")}</li>
            <li>{renderDropdown("Services", servicesSubcategories, "/services")}</li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className={navLinkClass}>
                  Contact Us <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border border-border shadow-md z-50 min-w-[200px]">
                  {contactUsLinks.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        to={item.path}
                        className="cursor-pointer text-sm text-foreground/80 hover:text-foreground px-3 py-2"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="container border-t border-border/30 py-6 animate-fade-in lg:hidden">
          <ul className="space-y-4 font-sans text-sm tracking-wide">
            {renderMobileAccordion("About Us", aboutOpen, () => setAboutOpen(!aboutOpen), aboutUsLinks, "/about")}
            {renderMobileAccordion("Apparel", apparelOpen, () => setApparelOpen(!apparelOpen), [
              { label: "View All Apparel", path: "/apparel" },
              ...apparelSubcategories.map(s => ({ ...s, path: undefined })),
            ], "/apparel")}
            {renderMobileAccordion("Jewellery", jewelleryOpen, () => setJewelleryOpen(!jewelleryOpen), jewellerySubcategories, "/jewellery")}
            {renderMobileAccordion("Games & Toys", toysOpen, () => setToysOpen(!toysOpen), toysGamesSubcategories, "/toys-games")}
            {renderMobileAccordion("Packaging", packagingOpen, () => setPackagingOpen(!packagingOpen), packagingSubcategories, "/packaging")}
            {renderMobileAccordion("Services", servicesOpen, () => setServicesOpen(!servicesOpen), servicesSubcategories, "/services")}
            {renderMobileAccordion("Contact Us", contactOpen, () => setContactOpen(!contactOpen), contactUsLinks)}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
