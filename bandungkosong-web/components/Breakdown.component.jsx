import { useContext } from "react";
import AppContext from "../store/context";

const Breakdown = () => {
  const SALES_LIMIT = 3;

  const appContext = useContext(AppContext);
  const sales = appContext.sales;
  const recipes = appContext.recipes;
  const recentSales = sales.slice(-SALES_LIMIT);
  const ingredientMap = {};

  const weights = [0.3, 0.4, 0.4];

  for (let i = 0; i < SALES_LIMIT; i++) {
    const sale = recentSales[i];
    const weight = weights[i];

    Object.entries(sale).forEach(([dish, dishQuantity]) => {
      const ingredients = recipes.find(
        (recipe) => recipe.name === dish
      )?.ingredients;

      if (!ingredients) return;

      ingredients.forEach(
        ({ name: ingredient, quantity: ingredientQuantity }) => {
          if (!(ingredient in ingredientMap)) ingredientMap[ingredient] = 0;

          ingredientMap[ingredient] +=
            ingredientQuantity * dishQuantity * weight;
        }
      );
    });
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Breakdown</h1>
      <h2 className="text-xl font-medium mb-6">
        Ingredients to buy for next week
      </h2>
      <div className="h-5/6 w-full rounded-xl border overflow-y-scroll no-scrollbar">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-xl">
                Ingredient
              </th>
              <th scope="col" className="px-6 py-3 rounded-tr-xl">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(ingredientMap).map(([name, quantity]) => (
              <tr className="bg-white border-b" key={name}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap"
                >
                  {name[0].toUpperCase() + name.substring(1)}
                </th>
                <td className="px-6 py-4">{Math.round(quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Breakdown;
