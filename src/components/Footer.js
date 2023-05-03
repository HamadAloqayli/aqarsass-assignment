const Footer = ({
  initDate,
  initState,
  date,
  state,
  handleClick,
  fetchLoading,
}) => {
  return (
    <div className="max-w-5xl mx-4 lg:mx-auto bg-white rounded-b-3xl py-4 mt-2 text-center">
      <button
        className={`${
          initDate === date && initState === state
            ? "bg-gray-100 text-gray-400 cursor-default"
            : "bg-indigo-200 text-indigo-600 cursor-pointer"
        } w-1/2 py-2 rounded-md focus:outline-none font-medium`}
        onClick={() =>
          initDate === date && initState === state ? null : handleClick()
        }
      >
        {fetchLoading ? "يرجى الإنتظار" : "تطبيق"}
      </button>
    </div>
  );
};

export default Footer;
