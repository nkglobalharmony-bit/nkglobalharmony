import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";
import GlobalReach from "@/components/GlobalReach";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <FeaturedCategories />
      <QuoteSection />
      <Services />
      <GlobalReach />
      <CallToAction />
    </main>
    <Footer />
  </div>
);

export default Index;
