const DatePicker = ({ label, ...props }) => {
  return (
    <div className="flex flex-col justify-center items-end">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type="date"
        className="bg-indigo-50 p-1 rounded-md mt-1 focus:outline-none w-32 md:w-40 text-right"
        {...props}
      />
    </div>
  );
};

export default DatePicker;
