import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart = () => {
  const data = {
    labels: ["1", "8", "15", "22", "31"],
    datasets: [
      {
        label: "Money in",
        data: [1000000, 20000000, 25000000, 45000000, 100000],
        borderColor: "#F9E8D9",
        backgroundColor: "rgba(254, 236, 220, 0.5)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Money out",
        data: [0, 1, 10000000, 30000000, 10000000],
        borderColor: "#ff4d4f",
        backgroundColor: "rgba(255, 77, 79, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const moneyInTotal = data.datasets[0].data.reduce((sum, val) => sum + val, 0);
  const moneyOutTotal = data.datasets[1].data.reduce(
    (sum, val) => sum + val,
    0
  );

  const formatCurrency = (val) => {
    return `₦${val.toLocaleString()}`;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        position: "right",
        beginAtZero: true,
        max: 50000000,
        ticks: {
          stepSize: 10000000,
          callback: (value) => {
            if (value >= 1000000) return `₦${value / 1000000}m`;
            if (value >= 1000) return `₦${value / 1000}k`;
            return `₦${value}`;
          },
        },
        grid: {
          color: "#f5f5f5",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ₦${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="bg-white p-6 border w-full max-w-md h-full justify-between">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Money out/Money in
        </h3>
        <select className="text-sm text-gray-600 bg-[#f2f2f3] rounded-lg px-2 py-1">
          <option>Date Range</option>
        </select>
      </div>

  
      <div className="flex gap-6 mt-4 items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#ffab91] inline-block" />
         <span className="text-xs text-gray-400">Money in </span> {formatCurrency(moneyInTotal)}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#ff4d4f] inline-block" />
        <span className="text-xs text-gray-400">Money out </span> {formatCurrency(moneyOutTotal)}
        </div>
      </div>

      <div className="mt-4 h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
