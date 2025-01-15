import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LegendItem,
  ChartOptions,
} from "chart.js";
import DropdownSelectComponent from "./StudentComponent/DropdownSelectComponent";

// Register the required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface LineGraphCardProps {
  title: string;
  amount: string;
  percentageChange: number;
  data: number[];
  backgroundColors: string[];
  barColor: string;
  size?: "small" | "medium" | "large";
}

const LineGraphCard: React.FC<LineGraphCardProps> = ({
  title,
  amount,
  percentageChange,
  data,
  backgroundColors,
  barColor,
  size,
}) => {
  const year = new Date().getFullYear();
  const dataSet = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels
    datasets: [
      {
        label: "Income", // Line 2 label
        data: data,

        borderColor: barColor, // Line color
        backgroundColor: barColor, // Fill color
        tension: 0.7, // Smooth curve
        borderWidth: 2.982,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        backgroundColor: "#ffffff",
        bodyColor: "#041822",
        borderColor: "#E2E9F6",
        borderWidth: 2,
        cornerRadius: 6,
        displayColors: false,
        padding: 10,
        titleColor: "#041822",
        titleMarginBottom: 8,
        titleFont: {
          size: 12,
          family: "Inter",
          weight: 500,
        },
        bodyFont: {
          size: 15,
          family: "Inter",
          weight: 400,
        },
        callbacks: {
          title: (context) => {
            if (context[0]?.chart) {
              const index = context[0].dataIndex;
              const label = context[0]?.chart?.data?.labels?.[index];
              return `${label}, ${year}`;
            }
            return "";
          },
          label: (context) => {
            const value = context.raw as number;
            return `₦${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Months",
        },
        ticks: {
          font: {
            family: "Open Sans",
          },
          color: "#59676E",
        },
        grid: {
          display: false,
        },
        beginAtZero: true, // Start Y-axis at 0
      },
      y: {
        title: {
          display: false,
          text: "Values",
        },
        ticks: {
          callback: (tickValue: string | number) => {
            const value =
              typeof tickValue === "number" ? tickValue : parseFloat(tickValue);
            if (value === 0) {
              return value;
            }
            return `${value / 1000}K`;
          },
          stepSize: 100000,
          font: {
            family: "Open Sans",
          },
          color: "#59676E",
        },
        grid: {
          color: "#E2E9F6",
          drawTicks: false,
          tickBorderDash: [10, 5],
        },
        beginAtZero: true, // Start Y-axis at 0
      },
    },
  };

  return (
    <div className="flex flex-col gap-[30px] border border-solid border-[var(--border)] bg-white w-full pl-5 pt-[18px] lg:pb-[10px] lg:pr-[53px] rounded-lg">
      {/* -------- legend -------- */}
      <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
        {/* -------- total income -------- */}
        <div className="flex flex-col gap-2 self-start lg:self-auto">
          <p className="text-sm text-[var(--primary-text-color)]">{title}</p>
          <div className="flex gap-[6px] items-center">
            <p className="text-2xl text-[var(--primary-text-color)]">
              {amount}
            </p>
            <div className="flex gap-[6px] items-center">
              {/* -------- green circle -------- */}
              <div
                className={`w-[9px] h-[9px] rounded-full ${
                  percentageChange < 0
                    ? "bg-[var(--danger)]"
                    : "bg-[var(--success)]"
                } flex items-center justify-center`}
              >
                <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
              </div>
              {/* -------- percentage change -------- */}
              <p
                className={`text-xs ${
                  percentageChange < 0
                    ? "text-[var(--danger)]"
                    : "text-[var(--success)]"
                }`}
              >
                <span>{percentageChange < 0 ? "" : "+"}</span>
                <span>{percentageChange.toFixed(2)}%</span>
              </p>
            </div>
          </div>
        </div>
        {/* -------- income and monthly dropdown -------- */}
        <div className="flex items-center gap-[35px] justify-between w-full lg:w-auto">
          {/* -------- income -------- */}
          <div className="flex items-center gap-[7px]">
            <p className="text-xs text-[var(--primary-text-color)] leading-[30px]">
              Income
            </p>
            <div className="w-[9px] h-[9px] bg-[var(--secondary)] rounded-full"></div>
          </div>
          {/* -------- dropdown -------- */}
          <div className="mr-[26px] lg:m-0">
            <DropdownSelectComponent
              name={""}
              options={["Monthly", "Annual"]}
            />
          </div>
        </div>
      </div>
      <Line data={dataSet} options={options} />
    </div>
  );
};

export default LineGraphCard;
