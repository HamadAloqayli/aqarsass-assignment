import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { fetchStats } from "../src/api/stats";
import moment from "moment";

function App() {
  const [initDate, setInitDate] = useState("2022-01-01");
  const [initState, setInitState] = useState("-1");
  const [date, setDate] = useState("2022-01-01");
  const [state, setState] = useState("-1");

  const [statsResidential, setStatsResidential] = useState([]);
  const [statsCommercial, setStatsCommercial] = useState([]);

  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    repeatFetching();
  }, []);

  const handleClick = () => {
    repeatFetching();
    setInitDate(date);
    setInitState(state);
  };

  const repeatFetching = async () => {
    setFetchLoading(true);
    let r = [];
    let c = [];

    for (let i = 0; i < 7; i++) {
      let t = await getStatsByNumber(
        moment(date).subtract(i, "year").format("YYYY-MM-DD")
      );

      r.unshift(t[0]);
      c.unshift(t[1]);
    }

    setFetchLoading(false);
    setStatsResidential(r);
    setStatsCommercial(c);
  };

  const getStatsByNumber = async (reqDate) => {
    try {
      let init = 0;
      let response = await fetchStats(reqDate, state, "number_of_deals");

      let filteredStatsByResidential = response?.data?.Stats_list?.filter(
        (item) => item.Dtype === "سكني"
      );
      let filteredStatsByCommercial = response?.data?.Stats_list?.filter(
        (item) => item.Dtype === "تجاري"
      );

      let totalStatsResidential = filteredStatsByResidential.reduce(
        (total, item) => total + item.Stat,
        init
      );

      let totalStatsCommercial = filteredStatsByCommercial.reduce(
        (total, item) => total + item.Stat,
        init
      );

      return [totalStatsResidential, totalStatsCommercial];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-12">
      <Header date={date} state={state} setDate={setDate} setState={setState} />
      <BarChart
        date={date}
        statsResidential={statsResidential}
        statsCommercial={statsCommercial}
      />
      <Footer
        initDate={initDate}
        initState={initState}
        date={date}
        state={state}
        handleClick={handleClick}
        fetchLoading={fetchLoading}
      />
    </div>
  );
}

export default App;
