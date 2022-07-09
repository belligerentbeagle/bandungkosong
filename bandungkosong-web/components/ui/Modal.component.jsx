import { useRef } from "react";

const Modal = ({ hideModalHandler, addIngredient }) => {
  const nameInputRef = useRef(null);
  const quantityInputRef = useRef(null);

  const addIngredientHandler = (event) => {
    event.preventDefault();

    addIngredient({
      name: nameInputRef.current.value,
      quantity: quantityInputRef.current.value,
    });
  };

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-9/12">
        <div className="relative p-4 h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-4 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Add another ingredient
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={hideModalHandler}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <input type="text" ref={nameInputRef} />
              <input type="text" ref={quantityInputRef} />
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
              <button
                onClick={addIngredientHandler}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add ingredient
              </button>
              <button
                onClick={hideModalHandler}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 z-10 bg-black/25"
        onClick={hideModalHandler}
      ></div>
    </>
  );
};

export default Modal;
