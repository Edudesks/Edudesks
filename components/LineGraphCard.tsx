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
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Custom HTML Legend Plugin
const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart: ChartJS) {
    const legendContainer = document.getElementById("legend-container");
    if (!legendContainer) return;

    // Clear previous legend content
    legendContainer.innerHTML = "";

    // Create Total Income Section
    const totalIncomeDiv = document.createElement("div");
    totalIncomeDiv.style.marginRight = "231px";
    totalIncomeDiv.style.flex = "1";
    totalIncomeDiv.innerHTML = `
      <div style="font-size: 0.875rem; color: #041822;">Total Income</div>
      <div style="display: flex; align-items: center; gap: 6px;">
      <span style="font-size: 1.5rem; color: #041822;">₦1,000,000</span>
      <div style="width: 9px; height: 9px; background-color: #08C074; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
      <div style="width: 4px; height: 4px; background-color: #F8FBFD; border-radius: 50%;"></div>
      </div>
      <span style="color: #08C074; font-size: 0.75rem;">+20%</span>
      </div>
    `;
    legendContainer.appendChild(totalIncomeDiv);

    // Generate legend items
    const legendList = document.createElement("ul");
    legendList.style.listStyle = "none";
    legendList.style.padding = "0";
    legendList.style.display = "flex";
    legendList.style.justifyContent = "flex-end";
    legendList.style.gap = "32px";
    legendList.style.justifyItems = "flex-end";

    chart.legend?.legendItems?.forEach((item: LegendItem, index: number) => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.flexDirection = "row-reverse";
      li.style.gap = "7px";
      li.style.alignItems = "center";
      li.style.cursor = "pointer";
      li.style.marginBottom = "10px";

      // Color box
      const box = document.createElement("span");
      box.style.display = "inline-block";
      box.style.width = "9px";
      box.style.height = "9px";
      box.style.backgroundColor = (item.fillStyle as string) || "transparent";
      box.style.borderRadius = "50%";
      // box.style.marginRight = "8px";

      // Label text
      const text = document.createElement("span");
      text.style.fontSize = "12px";
      text.style.color = "#041822";
      text.innerText = item.text;
      text.style.lineHeight = "30px";

      li.appendChild(box);
      li.appendChild(text);

      // Toggle dataset visibility on click
      li.onclick = () => {
        chart.setDatasetVisibility(index, !chart.isDatasetVisible(index));
        chart.update();
      };

      legendList.appendChild(li);
    });

    legendContainer.appendChild(legendList);

    // Dropdown
    const dropdownDiv = document.createElement("div");
    dropdownDiv.style.marginLeft = "35px";
    dropdownDiv.innerHTML = `
      <select style="padding: 5px; font-size: 14px; border: 1px solid #ccc; border-radius: 5px;">
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="yearly">Yearly</option>
      </select>
    `;
    legendContainer.appendChild(dropdownDiv);
  },
};

ChartJS.register(htmlLegendPlugin);

const LineGraphCard = () => {
  const data = {
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
        label: "Expenses", // Line 1 label
        data: [220, 1, 127, 100, 282, 14, 21, 260, 406, 50, 264, 324], // Y-axis data for Line 1
        borderColor: "#F65252", // Line color
        backgroundColor: "#F65252", // Fill color
        tension: 0.7, // Smooth curve
        borderWidth: 2.982,
      },
      {
        label: "Income", // Line 2 label
        data: [430, 37, 56, 78, 172, 11, 458, 210, 15, 183, 58, 16], // Y-axis data for Line 2

        borderColor: "#4B8BBE", // Line color
        backgroundColor: "#4B8BBE", // Fill color
        tension: 0.7, // Smooth curve
        borderWidth: 2.982,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
        // position: "top", // Position of the legend
        // align: "end",
        // pointStyle: "circle", // Point style
      },
      htmlLegend: {
        containerID: "legend-container",
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        beginAtZero: true, // Start Y-axis at 0
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        beginAtZero: true, // Start Y-axis at 0
      },
    },
  };

  return (
    <div>
      <h2>Two Line Plot</h2>
      <div id="legend-container" className="flex items-center justify-between">
        <div id="dataset1">
          {/* <div className="w-[9px] h-[9px] bg-[var(--danger)] rounded-full"></div> */}
        </div>
        <div id="dataset2">
          {/* <div className="w-[9px] h-[9px] bg-[var(--secondary-text-color)] rounded-full"></div> */}
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraphCard;

//this is what I got from ai you can follow it
