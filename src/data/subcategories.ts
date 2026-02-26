import { Briefcase, Shirt, Dumbbell, HardHat, Baby, Gem, Tag, Leaf, Palette, Crown, Sparkles, BookOpen, Blocks, Rabbit, Puzzle, TreePine, Trophy, Gamepad2, Lightbulb, TrendingUp, Box, Megaphone, Globe, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubcategoryData {
  title: string;
  slug: string;
  parent: "apparel" | "jewellery" | "toys-games" | "services";
  parentLabel: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  highlights: { heading: string; body: string }[];
}

export const subcategories: SubcategoryData[] = [
  // ─── Apparel ───────────────────────────────────────────────────────────────
  {
    title: "Women's Wear",
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
    title: "Men's Wear",
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
    title: "Kids Wear",
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
    title: "Unisex",
    slug: "unisex",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: Shirt,
    description: "Gender-neutral apparel designed for versatility, comfort, and broad market appeal.",
    longDescription:
      "Our unisex range embraces inclusive fashion with relaxed silhouettes and universal sizing — perfect for brands targeting modern, gender-fluid consumers and corporate uniform programs.",
    highlights: [
      { heading: "Universal Sizing", body: "Size-inclusive ranges designed to fit all body types with comfort and style." },
      { heading: "Casual Essentials", body: "T-shirts, hoodies, joggers, and outerwear in gender-neutral cuts." },
      { heading: "Corporate & Uniform", body: "Branded workwear and uniform solutions in unisex sizing systems." },
      { heading: "Sustainable Options", body: "Organic cotton and recycled fabric options available across all styles." },
    ],
  },
  {
    title: "Industrial",
    slug: "industrial",
    parent: "apparel",
    parentLabel: "Apparel",
    icon: HardHat,
    description: "Industrial workwear, PPE, and protective garments built for demanding environments.",
    longDescription:
      "From hi-vis construction wear to flame-resistant industrial garments, our industrial range delivers consistent quality at scale — with custom branding and safety compliance built in.",
    highlights: [
      { heading: "Industrial & PPE", body: "Hi-visibility, flame-resistant, and protective workwear for demanding environments." },
      { heading: "Safety Compliance", body: "All garments meet international EN, ANSI, and OSHA safety standards." },
      { heading: "Custom Branding", body: "Branded workwear with embroidery, screen print, and woven labels." },
      { heading: "Healthcare Garments", body: "Scrubs, lab coats, and medical uniforms to hygiene standards." },
    ],
  },

  // ─── Jewellery ─────────────────────────────────────────────────────────────
  {
    title: "American Diamonds",
    slug: "american-diamonds",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Gem,
    description: "High-quality American diamond jewellery crafted for brilliance and affordability.",
    longDescription:
      "Our American diamond collection offers the sparkle and elegance of fine jewellery at accessible price points — ideal for retail, wholesale, and online buyers seeking premium CZ jewellery.",
    highlights: [
      { heading: "Premium CZ Stones", body: "AAA-grade cubic zirconia stones with diamond-like brilliance and fire." },
      { heading: "Full Range", body: "Rings, necklaces, bracelets, earrings, and sets in contemporary and classic designs." },
      { heading: "Plating Options", body: "Gold, rose gold, rhodium, and silver plating for diverse market preferences." },
      { heading: "Retail-Ready", body: "Polished packaging with customisation options for retail and e-commerce." },
    ],
  },
  {
    title: "Indo Western",
    slug: "indo-western",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Crown,
    description: "Fusion jewellery blending Indian craftsmanship with contemporary Western design aesthetics.",
    longDescription:
      "Our Indo Western collection bridges traditional Indian jewellery techniques with modern Western styling — creating versatile pieces suited for both ethnic and contemporary occasions.",
    highlights: [
      { heading: "Fusion Designs", body: "Traditional motifs reimagined in modern silhouettes for crossover appeal." },
      { heading: "Occasion Versatility", body: "Pieces designed to complement both ethnic and Western outfits." },
      { heading: "Handcrafted Elements", body: "Artisan-crafted components combined with precision manufacturing." },
      { heading: "Bridal Collections", body: "Indo Western bridal sets for modern brides seeking a contemporary edge." },
    ],
  },
  {
    title: "Kundan",
    slug: "kundan",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Sparkles,
    description: "Traditional Kundan jewellery featuring uncut gemstones set in gold foil — a heritage art form.",
    longDescription:
      "Kundan jewellery is one of India's oldest and most prestigious art forms. Our collection preserves this heritage with meticulous craftsmanship — from bridal sets to statement pieces for global luxury buyers.",
    highlights: [
      { heading: "Heritage Craftsmanship", body: "Hand-set uncut gemstones in gold foil using traditional techniques." },
      { heading: "Bridal & Festive Sets", body: "Complete bridal sets including necklaces, earrings, tikkas, and bangles." },
      { heading: "Premium Materials", body: "High-quality meenakari work and semi-precious gemstone detailing." },
      { heading: "Export Quality", body: "International packaging and certification for global luxury retail." },
    ],
  },
  {
    title: "Oxidised",
    slug: "oxidised",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Gem,
    description: "Vintage-inspired oxidised silver jewellery with rustic charm and artisanal character.",
    longDescription:
      "Oxidised jewellery brings a rustic, antique aesthetic to modern fashion. Our range spans tribal-inspired statement pieces to delicate everyday wear — crafted for the boho and ethnic fashion markets.",
    highlights: [
      { heading: "Artisan Finish", body: "Hand-oxidised silver and alloy pieces with authentic vintage patina." },
      { heading: "Tribal & Boho Styles", body: "Statement necklaces, jhumkas, cuffs, and anklets inspired by tribal art." },
      { heading: "Lightweight Designs", body: "Comfortable, lightweight construction for everyday wearability." },
      { heading: "Bulk & Retail", body: "Available in wholesale and retail quantities with custom packaging options." },
    ],
  },
  {
    title: "Pearls",
    slug: "pearls",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Sparkles,
    description: "Elegant pearl jewellery featuring freshwater, cultured, and baroque pearls for classic and modern styles.",
    longDescription:
      "Pearls are timeless. Our pearl jewellery collection ranges from classic strands to modern statement pieces — sourced from trusted farms and crafted for luxury retail, bridal, and gifting markets.",
    highlights: [
      { heading: "Freshwater & Cultured", body: "High-lustre freshwater and cultured pearls in a range of sizes and colours." },
      { heading: "Baroque & Keshi", body: "Irregular and unique pearl shapes for contemporary and artistic designs." },
      { heading: "Bridal Collections", body: "Classic pearl sets designed for bridal and occasion markets." },
      { heading: "Custom Stringing", body: "Custom pearl stringing and knotting services for bespoke orders." },
    ],
  },
  {
    title: "Antique",
    slug: "antique",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Crown,
    description: "Antique-finish jewellery with heritage designs inspired by Mughal, Victorian, and temple traditions.",
    longDescription:
      "Our antique jewellery collection draws from centuries of design heritage — Mughal, Victorian, and South Indian temple styles reinterpreted for modern luxury and ethnic fashion markets.",
    highlights: [
      { heading: "Temple Jewellery", body: "South Indian temple-inspired pieces with intricate detailing and gold finishes." },
      { heading: "Mughal-Inspired", body: "Ornate designs featuring meenakari, jadau, and polki techniques." },
      { heading: "Victorian Revival", body: "Vintage European-inspired pieces with filigree and gemstone settings." },
      { heading: "Heritage Collections", body: "Curated sets for bridal, festive, and high-end retail markets." },
    ],
  },
  {
    title: "Fashion Jewellery",
    slug: "fashion-jewellery",
    parent: "jewellery",
    parentLabel: "Jewellery",
    icon: Sparkles,
    description: "Trend-driven fashion jewellery for mass market retail aligned with global seasonal collections.",
    longDescription:
      "Fast fashion jewellery with a fine finish — our trend-driven collections are developed season by season to give retailers and wholesalers an edge in the fast-moving accessories market.",
    highlights: [
      { heading: "Seasonal Trend Collections", body: "New collections aligned with SS and AW fashion weeks and trend reports." },
      { heading: "Mass Market Pricing", body: "Competitive pricing structures for large-volume retail and wholesale buyers." },
      { heading: "Materials Range", body: "Brass, zinc alloy, stainless steel, and resin in on-trend finishes and colourways." },
      { heading: "Retail Display Solutions", body: "POS display stands and merchandising support for retail deployment." },
    ],
  },

  // ─── Toys & Games ──────────────────────────────────────────────────────────
  {
    title: "Top Brands",
    slug: "top-brands",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Trophy,
    description: "Authorised distribution of leading global toy and game brands for retail and wholesale buyers.",
    longDescription:
      "We partner with top global toy brands to provide authorised distribution and wholesale supply — ensuring authentic products, competitive pricing, and reliable fulfilment for retailers worldwide.",
    highlights: [
      { heading: "Authorised Distribution", body: "Official partnerships with leading toy and game manufacturers worldwide." },
      { heading: "Competitive Wholesale Pricing", body: "Volume-based pricing structures for retail chains and distributors." },
      { heading: "Authentic Products", body: "100% genuine branded products with full manufacturer warranties." },
      { heading: "Global Fulfilment", body: "International shipping and logistics for wholesale and retail orders." },
    ],
  },
  {
    title: "Shop by Themes",
    slug: "shop-by-themes",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Puzzle,
    description: "Curated toy and game collections organised by popular themes — STEM, outdoor, creative, and more.",
    longDescription:
      "Browse our toy and game catalogue by theme — from STEM and educational to outdoor adventure, creative play, and licensed character collections. Perfect for themed retail displays and gifting.",
    highlights: [
      { heading: "STEM & Educational", body: "Science, technology, engineering, and maths toys for curious minds." },
      { heading: "Creative & Arts", body: "Craft kits, art supplies, and creative play sets for budding artists." },
      { heading: "Outdoor Adventure", body: "Garden games, sports equipment, and outdoor play for active kids." },
      { heading: "Licensed Characters", body: "Popular character-themed toys and games from leading entertainment brands." },
    ],
  },
  {
    title: "Shop by Age",
    slug: "shop-by-age",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: BookOpen,
    description: "Age-appropriate toys and games carefully categorised from infant to teen age groups.",
    longDescription:
      "Find the perfect products for every age group — our catalogue is segmented by developmental stage to help retailers and buyers select age-appropriate, safety-compliant toys and games.",
    highlights: [
      { heading: "0–2 Years", body: "Sensory toys, teethers, rattles, and soft play items for infants and toddlers." },
      { heading: "3–5 Years", body: "Pre-school learning toys, building blocks, and imaginative play sets." },
      { heading: "6–9 Years", body: "Board games, construction sets, outdoor toys, and creative kits." },
      { heading: "10+ Years", body: "Strategy games, hobby kits, sports equipment, and teen-focused products." },
    ],
  },
  {
    title: "Other Brands",
    slug: "other-brands",
    parent: "toys-games",
    parentLabel: "Toys & Games",
    icon: Gamepad2,
    description: "Emerging and specialty toy brands offering unique products for niche and mainstream markets.",
    longDescription:
      "Beyond the top global brands, we source and distribute emerging, indie, and specialty toy brands — giving retailers access to unique, differentiated products that stand out on the shelf.",
    highlights: [
      { heading: "Indie & Emerging Brands", body: "Curated selection of up-and-coming toy brands with unique value propositions." },
      { heading: "Specialty & Niche", body: "Wooden toys, eco-friendly brands, and culturally diverse product lines." },
      { heading: "Private Label Options", body: "White-label and private label toy manufacturing for your own brand." },
      { heading: "Discovery Collections", body: "Seasonal discovery boxes and curated collections for retail and gifting." },
    ],
  },
];

// ─── Services ──────────────────────────────────────────────────────────────
const servicesEntries: SubcategoryData[] = [
  {
    title: "Brand Building & Consulting",
    slug: "brand-building-consulting",
    parent: "services",
    parentLabel: "Services",
    icon: Lightbulb,
    description: "Strategic brand development and consulting services to position your label for global success.",
    longDescription:
      "From market entry strategy to visual identity and brand architecture, our consulting team helps emerging and established brands build lasting commercial presence across international markets.",
    highlights: [
      { heading: "Brand Strategy & Positioning", body: "Market analysis, competitive benchmarking, and positioning frameworks tailored to your target demographics." },
      { heading: "Visual Identity Development", body: "Logo design, brand guidelines, colour palettes, and typography systems for cohesive brand expression." },
      { heading: "Market Entry Planning", body: "Go-to-market strategies for new geographies including pricing, distribution, and regulatory guidance." },
      { heading: "Brand Audit & Refresh", body: "Comprehensive review of existing brand assets with actionable recommendations for modernisation." },
    ],
  },
  {
    title: "Market Research & Trend Forecasting Services",
    slug: "market-research-trend-forecasting",
    parent: "services",
    parentLabel: "Services",
    icon: TrendingUp,
    description: "Data-driven market intelligence and trend forecasting to keep your brand ahead of the curve.",
    longDescription:
      "Our research and forecasting team delivers actionable insights on consumer behaviour, market sizing, competitive landscapes, and emerging trends — empowering confident product and business decisions.",
    highlights: [
      { heading: "Consumer Insights", body: "Qualitative and quantitative research on target demographics, purchasing habits, and brand perception." },
      { heading: "Trend Forecasting", body: "Seasonal and macro trend reports covering colour, material, silhouette, and lifestyle directions." },
      { heading: "Competitive Analysis", body: "Detailed competitor benchmarking across pricing, product range, and market positioning." },
      { heading: "Market Sizing & Opportunity", body: "Data-backed market sizing reports to validate new product lines and geographic expansion." },
    ],
  },
  {
    title: "Product Development & Prototyping Services",
    slug: "product-development-prototyping",
    parent: "services",
    parentLabel: "Services",
    icon: Box,
    description: "End-to-end product development from concept sketches to production-ready prototypes and samples.",
    longDescription:
      "Transform ideas into market-ready products with our full-service development and prototyping capability — covering design, material sourcing, sampling, and pre-production testing across all categories.",
    highlights: [
      { heading: "Concept Development", body: "Collaborative design sessions to translate briefs into detailed product concepts and specifications." },
      { heading: "Rapid Prototyping", body: "Fast-turnaround prototypes using 3D printing, pattern cutting, and handcraft techniques." },
      { heading: "Material Sourcing", body: "Global fabric and component sourcing with sustainability and compliance screening." },
      { heading: "Pre-Production Testing", body: "Fit, function, and safety testing before bulk manufacturing sign-off." },
    ],
  },
  {
    title: "Social Media Creatives & E-Commerce Marketing Services",
    slug: "social-media-ecommerce-marketing",
    parent: "services",
    parentLabel: "Services",
    icon: Megaphone,
    description: "Scroll-stopping social content and e-commerce marketing assets designed to drive sales and engagement.",
    longDescription:
      "Our creative team produces high-converting visual content for social media platforms and e-commerce channels — from product photography and video to ad creatives and listing optimisation.",
    highlights: [
      { heading: "Product Photography", body: "Studio and lifestyle product shoots optimised for e-commerce listings and social media." },
      { heading: "Social Media Content", body: "Platform-specific visual content for Instagram, TikTok, Pinterest, and Facebook campaigns." },
      { heading: "Ad Creative Production", body: "Performance-focused ad creatives designed for conversion across paid social and display." },
      { heading: "Listing Optimisation", body: "SEO-driven product titles, descriptions, and A+ content for Amazon, Shopify, and marketplace listings." },
    ],
  },
  {
    title: "Strategic Management in International Business",
    slug: "strategic-management-international",
    parent: "services",
    parentLabel: "Services",
    icon: Globe,
    description: "Expert guidance on international trade, compliance, logistics, and cross-border business operations.",
    longDescription:
      "Navigate the complexities of international trade with our strategic management services — covering regulatory compliance, supply chain optimisation, trade finance, and cross-cultural business operations.",
    highlights: [
      { heading: "Trade Compliance", body: "Import/export regulation guidance, tariff classification, and customs documentation support." },
      { heading: "Supply Chain Optimisation", body: "End-to-end supply chain mapping, cost reduction strategies, and vendor management." },
      { heading: "International Logistics", body: "Freight forwarding coordination, Incoterms advisory, and shipping route optimisation." },
      { heading: "Cross-Border Strategy", body: "Market entry frameworks, joint venture advisory, and international partnership development." },
    ],
  },
  {
    title: "Fashion Tech Packs & Management",
    slug: "fashion-tech-packs",
    parent: "services",
    parentLabel: "Services",
    icon: FileText,
    description: "Professional tech pack creation and production management services for fashion and apparel brands.",
    longDescription:
      "Our tech pack and production management service bridges the gap between design and manufacturing — delivering factory-ready specification documents and hands-on production oversight for apparel brands of all sizes.",
    highlights: [
      { heading: "Tech Pack Creation", body: "Detailed specification documents including flat sketches, measurements, BOM, and construction notes." },
      { heading: "Grading & Size Charts", body: "Professional grading across international sizing systems with detailed measurement charts." },
      { heading: "Production Management", body: "On-the-ground factory coordination, timeline management, and quality checkpoints." },
      { heading: "Sample Tracking", body: "End-to-end sample tracking from proto through to pre-production with revision management." },
    ],
  },
];

subcategories.push(...servicesEntries);

export function getSubcategory(parent: string, slug: string): SubcategoryData | undefined {
  return subcategories.find((s) => s.parent === parent && s.slug === slug);
}
