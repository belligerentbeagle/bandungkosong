import { useState } from "react";
import Modal from "./Modal.component";
import ingredientsData from "../../data/ingredients.json";

const Data = () => {
  const [ingredients, setIngredients] = useState(ingredientsData);
  const [isFormShown, setIsFormShown] = useState(false);

  const showModalHandler = () => setIsFormShown(true);
  const hideModalHandler = () => setIsFormShown(false);

  const addIngredient = (ingredient) =>
    setIngredients([...ingredients, ingredient]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Your Data</h1>
      <div className="mb-6 flex items-center gap-3">
        <button
          className="border border-gray-400 py-1 px-3 rounded-lg flex items-center gap-2"
          onClick={showModalHandler}
        >
          <span className="text-xl">&#65291;</span>
          <span>Import</span>
        </button>
        <div className="text-lg">for July</div>
      </div>
      <div className="h-5/6 w-full rounded-xl border"></div>
      {isFormShown && (
        <Modal
          hideModalHandler={hideModalHandler}
          addIngredient={addIngredient}
        ></Modal>
      )}
    </>
  );
};

export default Data;
