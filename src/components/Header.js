import DatePicker from "./DatePicker";
import SelectPicker from "./SelectPicker";
import { states } from "../data/states";

const Header = ({ date, state, setDate, setState }) => {
  return (
    <div className="max-w-5xl mx-4 lg:mx-auto bg-white rounded-t-3xl">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center px-8 py-4">
        <div className="flex justify-center items-start gap-12">
          <SelectPicker
            label={"المنطقة"}
            data={states}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <DatePicker
            label={"الفترة الزمنية"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <p className="text-3xl font-medium text-gray-700 text-right mb-4 md:mb-0">
            رسم بياني تفاعلي
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
