const SalesForm = ({ formChangeHandler, inputFields, setWeek }) => {
  const now = new Date();
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const week = Math.ceil(
    ((now.getTime() - firstDay.getTime()) / 86400000 + firstDay.getDay() + 1) /
      7
  );

  const changeWeekHandler = (event) => {
    setWeek(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <div className="mb-6">
          <label
            htmlFor="week"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Week number
          </label>
          <input
            type="number"
            id="week"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-xs"
            placeholder={week}
            required
            onChange={changeWeekHandler}
          />
        </div>
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="block mb-2 text-sm font-medium text-gray-900">
                  Dish
                </div>
                <div className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                  {input.name}
                </div>
              </div>
              <div>
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="default-input"
                  name="quantity"
                  value={input.quantity}
                  onChange={(event) => formChangeHandler(index, event)}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
