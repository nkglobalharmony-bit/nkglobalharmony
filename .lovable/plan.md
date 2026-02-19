

## Add Apparel Genres/Categories

### What will be done

Create an **Apparel page** at `/apparel` that showcases different genres/choices of apparel that NK Global trades in. The page will include a hero section and a grid of apparel genres, each with a title, description, and icon -- all in the existing minimalist editorial style.

**Apparel genres to include:**
- **Formal Wear** -- Tailored suits, blazers, dress shirts for corporate and occasion wear
- **Casual Wear** -- Everyday essentials: t-shirts, polos, denim, and knitwear
- **Activewear & Sportswear** -- Performance-driven athletic apparel with moisture-wicking fabrics
- **Workwear & Uniforms** -- Industrial, hospitality, and corporate uniform solutions
- **Children's Clothing** -- Durable, safe, and comfortable garments for kids
- **Ethnic & Traditional Wear** -- Cultural garments crafted for global distribution

### Changes

1. **New file: `src/pages/Apparel.tsx`**
   - Hero section with "Apparel" heading and intro text
   - Grid layout of 6 apparel genre cards, each with title, description, and a subtle icon
   - Includes Navbar and Footer for consistent layout
   - A back link to the homepage

2. **Modified: `src/App.tsx`**
   - Add `/apparel` route pointing to the new Apparel page

3. **Modified: `src/components/Navbar.tsx`**
   - Update "Apparel" link to use React Router `Link` to `/apparel`

4. **Modified: `src/components/Hero.tsx`**
   - Update "Apparel" pill to link to `/apparel` using React Router `Link`

5. **Modified: `src/components/FeaturedCategories.tsx`**
   - Update the "View Category" link for Apparel to navigate to `/apparel` using React Router `Link`

### Technical details
- Uses `react-router-dom` `Link` for client-side navigation
- Follows existing design patterns: serif headings, sans-serif body, border dividers, monochrome palette
- Genre cards use a clean grid layout with `border` styling consistent with the rest of the site
