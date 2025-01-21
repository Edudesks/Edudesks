// components/CircularChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Calendar03Icon } from "hugeicons-react";
import styles from "@/styles/CircularChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IncomeCircularChartProps {
  label: string[];
  dataSet: number[];
  backgroundColors: string[];
  hoverBackgroundColors: string[];
  totalAmount: number;
  description: {
    name: string;
    percentage: number;
    amount: number;
    color: string;
  }[];
}

const IncomeCircularChart: React.FC<IncomeCircularChartProps> = ({
  label,
  dataSet,
  backgroundColors,
  hoverBackgroundColors,
  totalAmount = 456789,
  description,
}) => {
  const data = {
    labels: label,
    datasets: [
      {
        data: dataSet,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  };

  const options = {
    responsive: true, // Disable responsiveness
    maintainAspectRatio: false, // Disable aspect ratio to control exact dimensions
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white p-2.5 lg:p-3 rounded-lg border border-[var(--border)] w-full flex flex-col gap-9 lg:gap-12 h-full">
      {/* -------- title and date range -------- */}
      <div className="flex justify-between text-[var(--primary-text-color)] items-center">
        <p>Income Report</p>
        {/* -------- date range -------- */}
        <div className="flex items-center gap-2.5 lg:gap-3 rounded-lg border border-[var(--border)] px-3 py-[6px]">
          <Calendar03Icon width={16} height={16} />
          <p className="text-xs">
            <span>Oct 30</span>
            <span>&nbsp;-&nbsp;</span>
            <span>Sep 28</span>
          </p>
        </div>
      </div>
      {/* -------- doughnut chart -------- */}
      <div className="relative">
        <div className="min-h-[222px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-medium text-[var(--primart-text-color)]">
            ₦{totalAmount.toLocaleString()}.00
          </p>
          <p className="text-xs text-right text-[var(--grey)]">
            Revenue for October
          </p>
        </div>
      </div>
      {/* -------- dynamic description below -------- */}
      <div className="text-[var(--primary-text-color)] flex justify-between">
        {description.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="w-[9px] h-[9px] rounded-full" style={{backgroundColor: item.color}}></div>
              <p className="text-xs">
                {item.name} ({item.percentage})%
              </p>
            </div>
            <p>{item.amount.toLocaleString()}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeCircularChart;
