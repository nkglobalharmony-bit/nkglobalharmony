import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomeView, CategoryView, SubcategoryView } from "@/components/ContentViews";
import { ViewProvider, useView } from "@/context/ViewContext";

const PageContent = () => {
  const { view } = useView();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      {view.type === "home" && <HomeView />}
      {view.type === "category" && <CategoryView parent={view.parent} />}
      {view.type === "subcategory" && (
        <SubcategoryView parent={view.parent} slug={view.slug} />
      )}
      <Footer />
    </div>
  );
};

const Index = () => (
  <ViewProvider>
    <PageContent />
  </ViewProvider>
);

export default Index;
