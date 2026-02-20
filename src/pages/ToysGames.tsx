import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Blocks, Rabbit, Puzzle, TreePine, Trophy, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subcategories = [
  {
    title: "Educational Toys",
    slug: "educational-toys",
    description: "STEM kits, learning aids, and cognitive development toys for children across all age groups.",
    icon: BookOpen,
  },
  {
    title: "Board Games",
    slug: "board-games",
    description: "Strategy, family, and party board games manufactured for retail, wholesale, and private label buyers.",
    icon: Blocks,
  },
  {
    title: "Dolls & Soft Toys",
    slug: "dolls-soft-toys",
    description: "Safety-certified dolls, plush toys, and stuffed animals for infant to tween markets worldwide.",
    icon: Rabbit,
  },
  {
    title: "Puzzles",
    slug: "puzzles",
    description: "Jigsaw puzzles, 3D puzzles, and brain teasers in custom piece counts and themed designs.",
    icon: Puzzle,
  },
  {
    title: "Outdoor Toys",
    slug: "outdoor-toys",
    description: "Garden games, ride-ons, water play, and outdoor activity sets built for durability and safety.",
    icon: TreePine,
  },
  {
    title: "Sports Accessories & Equipment",
    slug: "sports-accessories",
    description: "Junior sports equipment, training accessories, and branded sporting goods for global distribution.",
    icon: Trophy,
  },
  {
    title: "Arcade Game Equipment",
    slug: "arcade-game-equipment",
    description: "Coin-operated and redemption arcade machines, tabletop games, and entertainment centre equipment.",
    icon: Gamepad2,
  },
];

const ToysGames = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Toys &amp; Games
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Global-standard toys and games for every market segment. From educational
            STEM kits to arcade equipment — manufactured, certified, and export-ready.
          </p>
        </div>
      </section>

      {/* Subcategory Grid */}
      <section>
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-10 block">
            Categories
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {subcategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/toys-games/${cat.slug}`}
                className="bg-background p-8 md:p-10 flex flex-col hover:bg-muted/40 transition-colors group"
              >
                <cat.icon size={24} className="text-foreground mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl font-medium mb-3 group-hover:underline underline-offset-4">
                  {cat.title}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ToysGames;
