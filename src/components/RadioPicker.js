const CheckPicker = ({ label }) => {
  return (
    <div className="flex flex-col justify-center items-end mt-2">
      <label className="font-medium text-gray-700 mb-1">{label}</label>
      <div>
        <span className="text-gray-700 mr-2">عدد الصفقات</span>
        <input type="radio" name="deal" className="cursor-pointer" />
      </div>
      <div>
        <span className="text-gray-700 mr-2">قيمة الصفقات</span>
        <input type="radio" name="deal" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CheckPicker;
