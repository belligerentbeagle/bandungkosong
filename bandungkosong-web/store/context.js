import { createContext, useState } from "react";
import recipesData from "../data/recipes.json";
import salesData from "../data/sales.json";

const AppContext = createContext({
  sales: [],
  recipes: [],
  addSale: (sale) => {},
  currentSlug: "breakdown",
  updateCurrentSlug: (slug) => {},
  isToastShown: false,
  updateIsToastShown: (bool) => {},
});

export const AppContextProvider = ({ children }) => {
  const [sales, setSales] = useState(salesData || []);
  const [recipes, setRecipes] = useState(recipesData || []);
  const [currentSlug, setCurrentSlug] = useState("breakdown");
  const [isToastShown, setIsToastShown] = useState(false);
  const addSale = (sale) => setSales([...sales, sale]);
  const updateCurrentSlug = (slug) => setCurrentSlug(slug);
  const updateIsToastShown = (bool) => setIsToastShown(bool);

  const context = {
    sales,
    recipes,
    currentSlug,
    isToastShown,
    updateCurrentSlug,
    addSale,
    updateIsToastShown,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
