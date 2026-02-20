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
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/apparel/:slug" element={<SubcategoryPage parent="apparel" />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/jewellery/:slug" element={<SubcategoryPage parent="jewellery" />} />
          <Route path="/toys-games" element={<ToysGames />} />
          <Route path="/toys-games/:slug" element={<SubcategoryPage parent="toys-games" />} />
          <Route path="/quote" element={<Quote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


