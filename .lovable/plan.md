

## Add Services Dropdown to Navbar

### What will be done

Add a **Services** dropdown menu to the navigation bar (both desktop and mobile) with the following 6 subcategories:

1. Brand Building & Consulting
2. Market Research & Trend Forecasting Services
3. Product Development & Prototyping Services
4. Social Media Creatives & E-Commerce Marketing Services
5. Strategic Management in International Business
6. Fashion Tech Packs & Management

### Changes

**1. Modified: `src/components/Navbar.tsx`**
- Add a `servicesSubcategories` array with the 6 items above (each with label and slug)
- Add `"services"` to the `Parent` type union
- Add a Services `DropdownMenu` in the desktop nav (between Packaging and Request a Quote)
- Add a `servicesOpen` state for mobile accordion toggle
- Add Services collapsible section in the mobile nav
- Dropdown items will link to `/services/:slug` routes

**2. Modified: `src/context/ViewContext.tsx`**
- Add `"services"` to the `ParentCategory` type

**3. Modified: `src/App.tsx`**
- Add route `/services/:slug` pointing to `SubcategoryPage` with `parent="services"`

**4. Modified: `src/data/subcategories.ts`**
- Add services subcategory data entries so the subcategory pages render content for each service

### Technical details
- Follows the exact same dropdown pattern used for Apparel, Jewellery, Toys & Games, and Packaging
- Services items use standard `Link` navigation to `/services/:slug` routes
- Mobile menu uses the same accordion expand/collapse pattern with `ChevronDown` rotation
- Dropdown has `bg-background`, `border`, `shadow-md`, and `z-50` for proper visibility

