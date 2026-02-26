import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apparel from "./pages/Apparel";
import Jewellery from "./pages/Jewellery";
import ToysGames from "./pages/ToysGames";
import SubcategoryPage from "./pages/SubcategoryPage";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import AboutUs from "./pages/about/AboutUs";
import CategoriesPage from "./pages/about/Categories";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import OurUSPs from "./pages/about/OurUSPs";
import GlobalConnectionsPage from "./pages/about/GlobalConnections";
import CertificationsPage from "./pages/about/Certifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* About Us */}
          <Route path="/about/about" element={<AboutUs />} />
          <Route path="/about/categories" element={<CategoriesPage />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about/our-usps" element={<OurUSPs />} />
          <Route path="/about/global-connections" element={<GlobalConnectionsPage />} />
          <Route path="/about/certifications" element={<CertificationsPage />} />
          {/* Products */}
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/apparel/:slug" element={<SubcategoryPage parent="apparel" />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/jewellery/:slug" element={<SubcategoryPage parent="jewellery" />} />
          <Route path="/toys-games" element={<ToysGames />} />
          <Route path="/toys-games/:slug" element={<SubcategoryPage parent="toys-games" />} />
          <Route path="/services/:slug" element={<SubcategoryPage parent="services" />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
