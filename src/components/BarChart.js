import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ date, statsResidential, statsCommercial }) => {
  return (
    <div className="max-w-5xl mx-4 lg:mx-auto bg-white pt-4 mt-2">
      <Bar
        data={{
          labels: [
            moment(date).subtract(6, "year").format("YYYY-MM-DD"),
            moment(date).subtract(5, "year").format("YYYY-MM-DD"),
            moment(date).subtract(4, "year").format("YYYY-MM-DD"),
            moment(date).subtract(3, "year").format("YYYY-MM-DD"),
            moment(date).subtract(2, "year").format("YYYY-MM-DD"),
            moment(date).subtract(1, "year").format("YYYY-MM-DD"),
            date,
          ],
          datasets: [
            {
              label: "سكني",
              data: [
                statsResidential[0],
                statsResidential[1],
                statsResidential[2],
                statsResidential[3],
                statsResidential[4],
                statsResidential[5],
                statsResidential[6],
              ],
              backgroundColor: ["#B8C2EB"],
              borderRadius: 999,
              barThickness: 10,
            },
            {
              label: "تجاري",
              data: [
                statsCommercial[0],
                statsCommercial[1],
                statsCommercial[2],
                statsCommercial[3],
                statsCommercial[4],
                statsCommercial[5],
                statsCommercial[6],
              ],
              backgroundColor: ["#7686CA"],
              borderRadius: 999,
              barThickness: 10,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: {
                  style: "normal",
                  weight: "600",
                },
                boxHeight: 7.5,
                boxWidth: 7.5,
                borderRadius: 7.5,
                usePointStyle: true,
                pointSytle: "circle",
                padding: 20,
              },
              position: "top",
              align: "end",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default BarChart;
