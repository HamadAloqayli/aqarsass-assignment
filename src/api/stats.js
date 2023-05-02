import axios from "axios";

export const fetchStats = (date, state, type) => {
  return axios.post("https://www.aqarsas.com/aj_dashboard", {
    start_date: date,
    end_date: date,
    state: state,
    stat_type: type,
  });
};
