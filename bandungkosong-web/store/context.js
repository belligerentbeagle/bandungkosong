import { createContext, useEffect, useState } from "react";
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
  const [sales, setSales] = useState(
    (typeof window !== "undefined" &&
      localStorage.getItem("sales") !== null &&
      JSON.parse(localStorage.getItem("sales"))) ||
      salesData ||
      []
  );
  const [recipes, setRecipes] = useState(
    (typeof window !== "undefined" &&
      localStorage.getItem("recipes") !== null &&
      JSON.parse(localStorage.getItem("recipes"))) ||
      recipesData ||
      []
  );
  const [currentSlug, setCurrentSlug] = useState("breakdown");
  const [isToastShown, setIsToastShown] = useState(false);
  const addSale = (sale) => setSales([...sales, sale]);
  const updateCurrentSlug = (slug) => setCurrentSlug(slug);
  const updateIsToastShown = (bool) => setIsToastShown(bool);

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("sales", JSON.stringify(sales));
  }, [sales]);

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

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
