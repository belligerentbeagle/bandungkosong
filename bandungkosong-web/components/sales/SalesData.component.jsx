import { useState } from "react";
import SalesChart from "./SalesChart.component";
import SalesModal from "./SalesModal.component";

const SalesData = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  const showModalHandler = () => setIsFormShown(true);
  const hideModalHandler = () => setIsFormShown(false);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Your Data</h1>
      <div className="mb-6 flex items-center gap-3">
        <button
          className="border border-slate-400 py-1 px-3 rounded-lg flex items-center gap-2"
          onClick={showModalHandler}
        >
          <span className="text-xl">&#65291;</span>
          <span>Add Sales</span>
        </button>
        <div className="text-lg">for July</div>
      </div>
      <div className="h-5/6 w-full rounded-xl border">
        <SalesChart></SalesChart>
      </div>
      {isFormShown && (
        <SalesModal hideModalHandler={hideModalHandler}></SalesModal>
      )}
    </>
  );
};

export default SalesData;
