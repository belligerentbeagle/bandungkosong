import { useContext, useRef, useState } from "react";
import SalesForm from "./SalesForm.component";
import AppContext from "../../store/context";

const SalesModal = ({ hideModalHandler }) => {
  const appContext = useContext(AppContext);
  const recipes = appContext.recipes;
  const sales = appContext.sales;
  const updateIsToastShown = appContext.updateIsToastShown;
  const addSale = appContext.addSale;
  const [week, setWeek] = useState(sales.length + 1);
  const [inputFields, setInputFields] = useState(
    recipes.map((recipe) => ({ name: recipe.name, quantity: 1000 }))
  );

  const formChangeHandler = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;

    setInputFields(data);
  };

  const submitHandler = () => {
    //* for potential csv usage

    // const csvContent =
    //   "data:text/csv;charset=utf-8,week," +
    //   recipes.map((recipe) => recipe.name).join(",") +
    //   "\n" +
    //   [week, ...inputFields.map((field) => field.quantity)].join(",");

    // window.open(encodeURI(csvContent));

    const sale = { time: +week };
    inputFields.forEach((field) => {
      sale[field.name] = field.quantity;
    });
    addSale(sale);
    updateIsToastShown(true);
    hideModalHandler();
  };
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-9/12">
        <div className="relative p-4 h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-4 rounded-t border-b">
              <h3 className="text-xl font-semibold text-slate-900">
                Add weekly sales
              </h3>
              <button
                type="button"
                className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
              <SalesForm
                formChangeHandler={formChangeHandler}
                inputFields={inputFields}
                week={week}
                setWeek={setWeek}
              ></SalesForm>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-slate-200">
              <button
                onClick={submitHandler}
                type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
              <button
                onClick={hideModalHandler}
                type="button"
                className="text-slate-500 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg border border-slate-200 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-10"
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

export default SalesModal;
