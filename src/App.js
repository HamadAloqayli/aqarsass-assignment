import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { states } from "./data/states";
import { fetchStats } from "../src/api/stats";

function App() {
  const [initDate, setInitDate] = useState("2022-01-01");
  const [initState, setInitState] = useState(0);
  const [date, setDate] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    getStatsByValue();
    // getStatsByNumber();
  }, []);

  const getStatsByValue = async () => {
    try {
      let response = await fetchStats(initDate, initState, "value_of_deals");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatsByNumber = async () => {
    try {
      let response = await fetchStats(initDate, initState, "number_of_deals");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-12">
      <Header date={date} state={state} setDate={setDate} setState={setState} />
      <BarChart />
      <Footer
        initDate={initDate}
        initState={initState}
        date={date}
        state={state}
      />
    </div>
  );
}

export default App;
