const SelectPicker = ({ label, data, ...props }) => {
  return (
    <div className="flex flex-col justify-center items-end">
      <label className="font-medium text-gray-700">{label}</label>
      <select
        className="bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-500 p-1 rounded-md mt-1 focus:outline-none text-right appearance-none cursor-pointer w-40"
        {...props}
      >
        {data.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPicker;
