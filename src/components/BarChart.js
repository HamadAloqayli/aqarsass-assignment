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

const BarChart = () => {
  return (
    <div className="max-w-5xl mx-4 lg:mx-auto bg-white pt-4 mt-2">
      <Bar
        data={{
          labels: [
            "Yesterday",
            "Today",
            "Yesterday",
            "Today",
            "Yesterday",
            "Today",
          ],
          datasets: [
            {
              label: "Projects",
              data: [1, 2, 3, 4, 5, 6],
              backgroundColor: ["#B8C2EB"],
              borderRadius: 999,
              barThickness: 10,
            },
            {
              label: "Earnings",
              data: [5, 6, 7, 8, 9, 10],
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
