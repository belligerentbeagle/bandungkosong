import ingredientsData from "../../data/ingredients.json";

const Breakdown = () => {
  // TODO: replace with real data
  const ingredients = ingredientsData;

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Breakdown</h1>
      <h2 className="text-xl font-medium mb-6">
        Ingredients to buy for next month
      </h2>
      <div className="h-5/6 w-full rounded-xl border overflow-y-scroll no-scrollbar">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
            {ingredients.map((ingredient) => (
              <tr className="bg-white border-b" key={ingredient.name}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {ingredient.name}
                </th>
                <td className="px-6 py-4">{ingredient.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Breakdown;
