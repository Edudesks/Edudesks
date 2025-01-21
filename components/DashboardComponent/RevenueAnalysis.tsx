import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { MenuItem, Select } from '@mui/material';
import styles from '@/styles/RevenueAnalytics.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueAnalytics: React.FC = () => {
  // Modify labels to remove the year
  const data = {
    labels: ['31 Jan', '29 Feb', '30 Mar', '30 Apr', '30 May', '30 Jun', '30 Jul', '30 Aug'],
    datasets: [
      {
        label: 'Expenses',
        data: [200, 300, 150, 500, 600, 400, 200, 300],
        backgroundColor: '#4b8bbe',
        barPercentage: 0.8,
        borderRadius: 10,
        categoryPercentage: 0.9,
      },
      {
        label: 'Income',
        data: [400, 500, 250, 700, 900, 800, 500, 600],
        backgroundColor: '#E2E9F6',
        barPercentage: 0.8,
        borderRadius: 10,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#002F49',
        padding: 20,
        usePointStyle: true,
        titleSpacing: 10,
        titleMarginBottom: 10,

        callbacks: {

          title: () => '',
          // Show the full date with year in the tooltip title
          beforeTitle: (context) => {
            const fullDates = ['31 Jan, 2024', '29 Feb, 2024', '30 Mar, 2024', '30 Apr, 2024', '30 May, 2024', '30 Jun, 2024', '30 Jul, 2024', '30 Aug, 2024'];
            return fullDates[context[0].dataIndex];
          },
          label: (context) => {
            const value = context.raw as number;
            const label = context.dataset.label == "Income"? 'Income generated' : 'Expenses'
            return [`${label}`, `₦${value.toLocaleString()}.00`, ' '];
          },
        },
        bodyColor: '#f9f9f9'
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => `₦${value}k`,
        },
        grid: {
          color: '#E5E7EB',
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Analytics</h2>
          <p className={styles.subtitle}>Total revenue analytics for this year</p>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.expensesDot} /> <span>Expenses</span>
            <div className={styles.incomeDot} /> <span>Income</span>
          </div>
          <Select defaultValue="This Year" variant="outlined" size="small" className={styles.selectBox}>
            <MenuItem value="This Year">2024</MenuItem>
            <MenuItem value="Last Year">2023</MenuItem>
          </Select>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueAnalytics;
