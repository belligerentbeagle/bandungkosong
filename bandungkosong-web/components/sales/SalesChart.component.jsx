import { useContext } from "react";
import AppContext from "../../store/context";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  bezierCurve: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      title: { display: true, text: "Week" },
      grid: {
        color: "#eee",
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 10,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      title: { display: true, text: "Quantity" },
      grid: {
        color: "#eee",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Historical Sales",
    },
    tooltip: {
      callbacks: {
        title: ([item]) => {
          return "Week " + item.label;
        },
      },
    },
  },
};

const SalesChart = () => {
  const appContext = useContext(AppContext);
  const sales = appContext.sales;

  const data = {
    labels: sales.map((sale) => +sale.time),
    datasets: [
      {
        label: "300gm Rib-eye",
        data: sales.map((sale) => +sale["300gm Rib-eye"]),
        borderColor: "rgba(37, 100, 235, 0.7)",
        backgroundColor: "rgba(37, 100, 235, 0.5)",
        borderWidth: 3,
      },
      {
        label: "300gm Sirloin",
        data: sales.map((sale) => +sale["300gm Sirloin"]),
        borderColor: "rgba(146, 51, 234, 0.7)",
        backgroundColor: "rgba(146, 51, 234, 0.5)",
        borderWidth: 3,
      },
      {
        label: "Herb Roasted Chicken",
        data: sales.map((sale) => +sale["Herb Roasted Chicken"]),
        borderColor: "rgba(219, 39, 119, 0.7)",
        backgroundColor: "rgba(219, 39, 119, 0.5)",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="w-full h-content">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SalesChart;
