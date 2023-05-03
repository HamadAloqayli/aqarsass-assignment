import axios from "axios";

export const fetchStats = (date, state, type) => {
  return axios.post("https://www.aqarsas.com/aj_dashboard/", {
    start_date: date,
    end_date: date,
    state: Number(state) === -1 ? null : Number(state),
    stat_type: type,
  });
};
