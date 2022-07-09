const SalesForm = ({ formChangeHandler, inputFields, week, setWeek }) => {
  const changeWeekHandler = (event) => {
    setWeek(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <div className="mb-6">
          <label
            htmlFor="week"
            className="block mb-2 text-sm font-medium text-slate-900"
          >
            Week number
          </label>
          <input
            type="number"
            id="week"
            className="border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 max-w-xs"
            placeholder={week}
            required
            value={week}
            onChange={changeWeekHandler}
          />
        </div>
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="block mb-2 text-sm font-medium text-slate-900">
                  Dish
                </div>
                <div className="bg-slate-50 border border-slate-300 text-slate-500 text-sm rounded-lg block w-full p-2.5">
                  {input.name}
                </div>
              </div>
              <div>
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-slate-900"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="default-input"
                  name="quantity"
                  value={input.quantity}
                  onChange={(event) => formChangeHandler(index, event)}
                  className="border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                />
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default SalesForm;
