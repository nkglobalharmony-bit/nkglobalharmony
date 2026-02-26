import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const regions = [
  { heading: "North America", body: "Active partnerships with retailers and distributors across the United States and Canada." },
  { heading: "Europe", body: "Wholesale and private label supply to markets in the UK, Germany, France, Italy, and Scandinavia." },
  { heading: "Middle East & Africa", body: "Growing trade relationships with buyers in the UAE, Saudi Arabia, South Africa, and East Africa." },
  { heading: "Asia Pacific", body: "Manufacturing and sourcing networks across India, Bangladesh, Vietnam, and China." },
  { heading: "South America", body: "Emerging trade partnerships with fashion and retail buyers in Brazil and Colombia." },
  { heading: "Australia & New Zealand", body: "Export supply for apparel, jewellery, and toys markets across Oceania." },
];

const GlobalConnectionsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="bg-foreground text-background">
        <div className="container py-20 md:py-28">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Global Connections</h1>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
            Our trade network spans 30+ countries across 5 continents.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-10 block">Regions</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((r) => (
              <div key={r.heading} className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">{r.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default GlobalConnectionsPage;
