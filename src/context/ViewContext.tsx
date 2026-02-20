import { createContext, useContext, useState, ReactNode } from "react";

export type ViewState =
  | { type: "home" }
  | { type: "category"; parent: "apparel" | "jewellery" | "toys-games" }
  | { type: "subcategory"; parent: "apparel" | "jewellery" | "toys-games"; slug: string };

interface ViewContextValue {
  view: ViewState;
  setView: (v: ViewState) => void;
}

const ViewContext = createContext<ViewContextValue | null>(null);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ViewState>({ type: "home" });
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used inside ViewProvider");
  return ctx;
};
