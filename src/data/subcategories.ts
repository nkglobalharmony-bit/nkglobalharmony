import { Briefcase, Shirt, Dumbbell, HardHat, Baby, Gem, Tag, Leaf, Palette, Crown, Sparkles, BookOpen, Blocks, Rabbit, Puzzle, TreePine, Trophy, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubcategoryData {
  title: string;
  slug: string;
  parent: "apparel" | "jewellery" | "toys-games";
  parentLabel: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  highlights: { heading: string; body: string }[];
}

export const subcategories: SubcategoryData[] = [
  // ─── Apparel ───────────────────────────────────────────────────────────────
  {
    title: "Menswear",
    slug: "menswear",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Briefcase,
    description: "Tailored and casual garments designed for the modern man across every market segment.",
    longDescription:
      "From sharp suiting to everyday essentials, our menswear range covers the full spectrum of male fashion — crafted for retail, wholesale, and private label buyers worldwide.",
    highlights: [
      { heading: "Formal & Business Wear", body: "Tailored suits, blazers, dress shirts, and trousers for corporate and occasion markets." },
      { heading: "Casual & Streetwear", body: "T-shirts, hoodies, denim, and knitwear aligned with global trend forecasts." },
      { heading: "Seasonal Collections", body: "Spring/Summer and Autumn/Winter lines built to retail calendar requirements." },
      { heading: "Size Inclusivity", body: "Extended sizing available across all categories for diverse global markets." },
    ],
  },
  {
    title: "Womenswear",
    slug: "womenswear",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Shirt,
    description: "Fashion-forward womenswear spanning everyday essentials to occasion and luxury garments.",
    longDescription:
      "Our womenswear offering combines trend intelligence with quality manufacturing — from everyday basics to elevated occasion pieces, built for retail, wholesale, and direct-to-consumer brands.",
    highlights: [
      { heading: "Dresses & Coordinates", body: "Day-to-evening styles across casual, smart-casual, and formal silhouettes." },
      { heading: "Tops, Blouses & Knitwear", body: "Core wardrobe staples produced to consistent fit and finish standards." },
      { heading: "Outerwear", body: "Jackets, coats, and blazers crafted for function and fashion." },
      { heading: "Trend-Led Design", body: "Collections developed in line with WGSN and global runway directions." },
    ],
  },
  {
    title: "Kidswear",
    slug: "kidswear",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Baby,
    description: "Safe, durable, and colourful clothing for infants, toddlers, and children up to 14 years.",
    longDescription:
      "Children's garments require the highest standards of safety and durability. Our kidswear range is compliant with international safety regulations and built for the demands of active young lives.",
    highlights: [
      { heading: "Safety Compliance", body: "All garments meet CPSC, EN 71, and OEKO-TEX® safety standards." },
      { heading: "Infant to Teen Range", body: "Sizing from newborn through to 14 years across all categories." },
      { heading: "School Uniforms", body: "Durable, wash-resistant uniform solutions for schools and institutions." },
      { heading: "Playwear & Occasionwear", body: "Everyday play sets and special occasion garments for the full children's market." },
    ],
  },
  {
    title: "Ethnic & Occasion Wear",
    slug: "ethnic-occasion-wear",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Gem,
    description: "Cultural garments and occasion wear crafted with heritage techniques for global distribution.",
    longDescription:
      "Celebrating the richness of global textile traditions, our ethnic and occasion wear category spans bridal, festive, and cultural garments — handcrafted and machine-finished for international buyers.",
    highlights: [
      { heading: "Bridal & Festive Wear", body: "Embroidered and embellished garments for weddings and celebrations." },
      { heading: "South Asian Ethnic Wear", body: "Sarees, salwar kameez, lehengas, and sherwanis in a range of fabrics." },
      { heading: "Middle Eastern Styles", body: "Abayas, kaftans, and jalabiya for retail and wholesale buyers." },
      { heading: "Custom Cultural Orders", body: "Bespoke cultural garments developed to buyer specification." },
    ],
  },
  {
    title: "Activewear & Athleisure",
    slug: "activewear-athleisure",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Dumbbell,
    description: "Performance-driven athletic and leisure apparel with technical fabrics and modern fits.",
    longDescription:
      "Our activewear range combines performance engineering with contemporary design — ideal for sports brands, gym chains, and athleisure retailers looking for quality bulk production.",
    highlights: [
      { heading: "Technical Fabrics", body: "Moisture-wicking, anti-odour, and four-way stretch materials built for performance." },
      { heading: "Gym & Training Wear", body: "Leggings, sports bras, shorts, and tops for fitness and training markets." },
      { heading: "Outdoor & Sports", body: "Running, cycling, and outdoor apparel with UV protection and weather resistance." },
      { heading: "Athleisure Lifestyle", body: "Trend-led casual sportswear bridging gym and everyday fashion." },
    ],
  },
  {
    title: "Workwear & Uniforms",
    slug: "workwear-uniforms",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: HardHat,
    description: "Industrial, hospitality, and corporate uniform solutions built for durability and branding.",
    longDescription:
      "From hi-vis construction wear to refined hospitality uniforms, our workwear range delivers consistent quality at scale — with custom branding and embroidery options available.",
    highlights: [
      { heading: "Industrial & PPE", body: "Hi-visibility, flame-resistant, and protective workwear for demanding environments." },
      { heading: "Hospitality Uniforms", body: "Front-of-house and kitchen wear for hotels, restaurants, and airlines." },
      { heading: "Corporate Branding", body: "Branded uniforms with embroidery, screen print, and woven labels." },
      { heading: "Healthcare Garments", body: "Scrubs, lab coats, and medical uniforms to hygiene standards." },
    ],
  },
  {
    title: "Private Label Production",
    slug: "private-label-production",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Tag,
    description: "End-to-end private label manufacturing under your brand — from design to delivery.",
    longDescription:
      "Launch or scale your apparel brand with our comprehensive private label service. We handle every step from concept and sampling through to bulk production and export-ready packaging.",
    highlights: [
      { heading: "Design Development", body: "In-house design and tech pack creation aligned with your brand identity." },
      { heading: "Sampling & Prototyping", body: "Rapid sample turnaround with multiple revision rounds before bulk sign-off." },
      { heading: "Bulk Manufacturing", body: "MOQ-flexible production across wovens, knits, denim, and performance fabrics." },
      { heading: "Brand Packaging", body: "Custom swing tags, labels, and packaging designed to your specification." },
    ],
  },
  {
    title: "Custom Sampling & Bulk Manufacturing",
    slug: "custom-sampling-bulk",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: HardHat,
    description: "From first prototype to full bulk run — flexible manufacturing with low minimum order quantities.",
    longDescription:
      "Whether you're a startup testing your first collection or an established brand scaling up, our sampling and bulk manufacturing service is built for speed, accuracy, and flexibility.",
    highlights: [
      { heading: "Low MOQ Options", body: "Minimum order quantities starting from 50 units per style for new brands." },
      { heading: "Sample Accuracy", body: "High-fidelity samples that match bulk production quality and specifications." },
      { heading: "Fast Turnaround", body: "Sample delivery within 2–3 weeks and bulk lead times from 45 days." },
      { heading: "Full Traceability", body: "End-to-end production tracking with regular quality control checkpoints." },
    ],
  },
  {
    title: "Organic & Sustainable Fabric Options",
    slug: "organic-sustainable",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Leaf,
    description: "Eco-conscious fabric sourcing including GOTS-certified organic cotton, recycled fibres, and natural dyes.",
    longDescription:
      "Sustainability is no longer optional. We source and supply certified organic, recycled, and low-impact fabrics to help brands meet growing consumer and regulatory expectations.",
    highlights: [
      { heading: "GOTS Certified Cotton", body: "Globally certified organic cotton across jerseys, wovens, and blended fabrics." },
      { heading: "Recycled Synthetics", body: "rPET and recycled nylon options for activewear and outerwear." },
      { heading: "Natural Dyes", body: "Plant-based and low-impact dyeing processes to reduce chemical waste." },
      { heading: "Sustainability Reporting", body: "Full supply chain transparency documentation for ESG and brand reporting." },
    ],
  },

  // ─── Jewellery ─────────────────────────────────────────────────────────────
  {
    title: "925 Sterling Silver Jewellery",
    slug: "sterling-silver",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Gem,
    description: "High-quality 925 sterling silver pieces crafted for global retail — rings, necklaces, bracelets, and earrings.",
    longDescription:
      "Our sterling silver range combines fine craftsmanship with accessible luxury, designed for retail buyers and wholesale distributors seeking consistent quality at competitive price points.",
    highlights: [
      { heading: "Hallmarked & Certified", body: "All pieces stamped 925 with internationally recognised hallmarks and certification." },
      { heading: "Full Jewellery Range", body: "Rings, necklaces, bracelets, earrings, and anklets across classic and contemporary styles." },
      { heading: "Rhodium & Plating Options", body: "Rhodium, gold, and rose gold plating available for extended finish options." },
      { heading: "Retail-Ready Packaging", body: "Polished packaging with brand customisation options for retail deployment." },
    ],
  },
  {
    title: "Gold & Platinum Jewellery",
    slug: "gold-platinum",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Crown,
    description: "Luxurious gold and platinum collections spanning fine jewellery for bridal, gifting, and investment markets.",
    longDescription:
      "From 9ct to 22ct gold and certified platinum, our fine jewellery range is crafted for luxury retail, bridal collections, and investment-grade pieces across global markets.",
    highlights: [
      { heading: "Multiple Gold Purities", body: "9ct, 14ct, 18ct, and 22ct yellow, white, and rose gold across all jewellery types." },
      { heading: "Platinum Collections", body: "950 platinum pieces crafted for bridal, anniversary, and luxury gifting markets." },
      { heading: "Bridal & Occasion Sets", body: "Matching sets for engagements, weddings, and milestone gifting." },
      { heading: "Investment Jewellery", body: "High-purity pieces with certification for collectors and investment buyers." },
    ],
  },
  {
    title: "Trend-Driven Fashion Jewellery",
    slug: "fashion-jewellery",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Sparkles,
    description: "Mass market and retail-ready fashion jewellery aligned with global trend forecasts and seasonal collections.",
    longDescription:
      "Fast fashion jewellery with a fine finish — our trend-driven collections are developed season by season to give retailers and wholesalers an edge in the fast-moving accessories market.",
    highlights: [
      { heading: "Seasonal Trend Collections", body: "New collections aligned with SS and AW fashion weeks and trend reports." },
      { heading: "Mass Market Pricing", body: "Competitive pricing structures for large-volume retail and wholesale buyers." },
      { heading: "Materials Range", body: "Brass, zinc alloy, stainless steel, and resin in on-trend finishes and colourways." },
      { heading: "Retail Display Solutions", body: "POS display stands and merchandising support for retail deployment." },
    ],
  },
  {
    title: "Lab-Grown Diamonds & Gemstones",
    slug: "lab-grown",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Gem,
    description: "Ethically produced lab-grown diamonds and certified gemstones for modern, conscious luxury buyers.",
    longDescription:
      "The future of fine jewellery is ethical and sustainable. Our lab-grown diamond and gemstone offering delivers the same optical, physical, and chemical properties as mined stones — with full certification.",
    highlights: [
      { heading: "IGI & GIA Certified", body: "All lab-grown diamonds supplied with internationally recognised grading certificates." },
      { heading: "Coloured Gemstones", body: "Lab-grown sapphires, rubies, emeralds, and moissanite in a range of cuts." },
      { heading: "Ethical Credentials", body: "Fully traceable supply chain with environmental and ethical impact documentation." },
      { heading: "Fine Jewellery Settings", body: "Diamonds and gemstones set in gold, platinum, and sterling silver on request." },
    ],
  },
  {
    title: "Private Label Jewellery Production",
    slug: "private-label",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Tag,
    description: "End-to-end private label manufacturing for jewellery brands — design, sampling, production, and packaging.",
    longDescription:
      "Build or grow your jewellery brand with our private label manufacturing service. From initial concept through to retail-ready product, we manage every step of the production process.",
    highlights: [
      { heading: "Brand Design Development", body: "Custom design creation aligned with your brand aesthetic and target market." },
      { heading: "Hallmarking & Certification", body: "Official hallmarking and grading services included with all fine jewellery." },
      { heading: "Custom Packaging", body: "Bespoke boxes, pouches, and certificates designed to your brand identity." },
      { heading: "Flexible MOQ", body: "Low minimum order quantities suitable for emerging and scaling jewellery brands." },
    ],
  },
  {
    title: "Custom Design Development & Sampling Support",
    slug: "custom-design",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Palette,
    description: "Bespoke design services from concept to prototype, with full sampling support for retail and wholesale buyers.",
    longDescription:
      "Whether you have a sketch on paper or a detailed CAD file, our design and sampling team will bring your jewellery vision to life — with precision craftsmanship and fast turnaround times.",
    highlights: [
      { heading: "CAD Design Services", body: "3D CAD modelling and rendering for sign-off before sampling begins." },
      { heading: "Wax & Metal Sampling", body: "Wax prototypes and metal samples produced to exact specification." },
      { heading: "Gemstone Sourcing", body: "We source matching gemstones for bespoke pieces from certified suppliers." },
      { heading: "Revision Support", body: "Multiple revision rounds included before bulk production approval." },
    ],
  },
];

export function getSubcategory(parent: string, slug: string): SubcategoryData | undefined {
  return subcategories.find((s) => s.parent === parent && s.slug === slug);
}

// ─── Toys & Games ──────────────────────────────────────────────────────────
const toysGamesEntries: SubcategoryData[] = [
  {
    title: "Educational Toys",
    slug: "educational-toys",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: BookOpen,
    description: "STEM kits, learning aids, and cognitive development toys for children across all age groups.",
    longDescription:
      "From phonics sets to robotics kits, our educational toy range is designed to stimulate learning through play — compliant with global safety standards and tailored to curriculum requirements.",
    highlights: [
      { heading: "STEM & Robotics Kits", body: "Coding robots, science experiment sets, and engineering kits for ages 4–14." },
      { heading: "Literacy & Numeracy Aids", body: "Phonics cards, maths manipulatives, and reading game sets for early learners." },
      { heading: "Safety Certified", body: "All products meet EN 71, ASTM F963, and CPSC safety standards." },
      { heading: "School & Retail Supply", body: "Bulk supply for schools, educational retailers, and e-commerce platforms." },
    ],
  },
  {
    title: "Board Games",
    slug: "board-games",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Blocks,
    description: "Strategy, family, and party board games manufactured for retail, wholesale, and private label buyers.",
    longDescription:
      "From classic strategy games to trending party titles, we manufacture and export board games to global retail and wholesale buyers — with custom private label options available.",
    highlights: [
      { heading: "Family & Party Games", body: "Light strategy and social games designed for ages 6+ and group play." },
      { heading: "Strategy & Hobby Games", body: "Complex euro-style and hobby games for enthusiast and specialist retailers." },
      { heading: "Private Label Production", body: "Custom game development from mechanics to box printing and component sourcing." },
      { heading: "Retail-Ready Packaging", body: "Full-colour box printing, rulebooks, and display-ready shelf packaging." },
    ],
  },
  {
    title: "Dolls & Soft Toys",
    slug: "dolls-soft-toys",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Rabbit,
    description: "Safety-certified dolls, plush toys, and stuffed animals for infant to tween markets worldwide.",
    longDescription:
      "Our soft toy and doll range combines premium materials with rigorous safety testing — from newborn-safe plush to fashion dolls and licensed character plush for the global market.",
    highlights: [
      { heading: "Infant-Safe Plush", body: "Ultra-soft, non-toxic plush toys with EN 71 and OEKO-TEX® certification." },
      { heading: "Fashion & Play Dolls", body: "Articulated fashion dolls and play sets for retail and wholesale buyers." },
      { heading: "Custom Character Plush", body: "Licensed or original character plush developed from artwork to production." },
      { heading: "Weighted Fill Options", body: "Anti-anxiety weighted plush options available for therapeutic and gifting markets." },
    ],
  },
  {
    title: "Puzzles",
    slug: "puzzles",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Puzzle,
    description: "Jigsaw puzzles, 3D puzzles, and brain teasers in custom piece counts and themed designs.",
    longDescription:
      "We manufacture and export puzzles across all formats — from toddler floor puzzles to 1000-piece adult jigsaws — with custom artwork and private label options for global retail.",
    highlights: [
      { heading: "Jigsaw Puzzles", body: "Piece counts from 9 to 2000+, with custom imagery and licensing options." },
      { heading: "3D Puzzles & Models", body: "Foam and wooden 3D puzzles for architecture, vehicles, and character themes." },
      { heading: "Educational Puzzles", body: "Alphabet, number, and map puzzles designed for early learning markets." },
      { heading: "Custom Artwork", body: "Branded or licensed artwork printed to specification for private label clients." },
    ],
  },
  {
    title: "Outdoor Toys",
    slug: "outdoor-toys",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: TreePine,
    description: "Garden games, ride-ons, water play, and outdoor activity sets built for durability and safety.",
    longDescription:
      "From sandpits to battery-powered ride-ons, our outdoor toy range is designed for active play — built to withstand weather, heavy use, and the demands of the global toy market.",
    highlights: [
      { heading: "Ride-On Vehicles", body: "Battery-powered and push ride-ons for toddlers through to primary age children." },
      { heading: "Garden & Lawn Games", body: "Croquet, boules, ring toss, and giant garden game sets for retail." },
      { heading: "Water Play", body: "Paddling pools, water tables, and spray toys for seasonal summer markets." },
      { heading: "Swing Sets & Climbing", body: "Modular outdoor play structures for garden retail and institutional supply." },
    ],
  },
  {
    title: "Sports Accessories & Equipment",
    slug: "sports-accessories",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Trophy,
    description: "Junior sports equipment, training accessories, and branded sporting goods for global distribution.",
    longDescription:
      "Our sports accessories and equipment range covers everything from junior training gear to branded team accessories — manufactured for sports retailers, schools, and club supply.",
    highlights: [
      { heading: "Junior Training Equipment", body: "Age-appropriate training sets for football, cricket, tennis, and more." },
      { heading: "Team Accessories", body: "Branded cones, bibs, balls, and training gear for clubs and schools." },
      { heading: "Fitness & Gym Accessories", body: "Resistance bands, jump ropes, agility ladders, and youth fitness equipment." },
      { heading: "Custom Branding", body: "Team and school branding options across all equipment categories." },
    ],
  },
  {
    title: "Arcade Game Equipment",
    slug: "arcade-game-equipment",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Gamepad2,
    description: "Coin-operated and redemption arcade machines, tabletop games, and entertainment centre equipment.",
    longDescription:
      "We supply arcade and amusement equipment to entertainment venues, FECs, and retail operators — from classic coin-op cabinets to modern redemption machines and prize dispensers.",
    highlights: [
      { heading: "Redemption Machines", body: "Ticket and prize redemption arcade games for family entertainment centres." },
      { heading: "Coin-Operated Cabinets", body: "Classic and modern video arcade cabinets built for commercial operation." },
      { heading: "Tabletop & Mini Arcade", body: "Consumer and semi-commercial tabletop arcade units for retail and gifting." },
      { heading: "FEC Supply & Installation", body: "Full venue fit-out supply for family entertainment centres and amusement parks." },
    ],
  },
];

subcategories.push(...toysGamesEntries);

