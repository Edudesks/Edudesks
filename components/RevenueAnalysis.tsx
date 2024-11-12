// components/RevenueAnalytics.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { MenuItem, Select } from '@mui/material';
import styles from '@/styles/RevenueAnalytics.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueAnalytics: React.FC = () => {
  const data = {
    labels: ['31 Jan', '29 Feb', '30 Mar', '30 Apr', '30 May', '30 Jun', '30 Jul', '30 Aug'],
    datasets: [
      {
        label: 'Expenses',
        data: [200000, 300000, 150000, 500000, 600000, 400000, 200000, 300000],
        backgroundColor: '#4b8bbe',
        barPercentage: .8,
        borderRadius: 10,
        categoryPercentage: .9,
      },
      {
        label: 'Income',
        data: [400000, 500000, 250000, 700000, 900000, 800000, 500000, 600000],
        backgroundColor: '#E2E9F6',
        barPercentage: .8,
        borderRadius: 10,
        categoryPercentage: .9,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 10,
          font: {
            size: 10,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ₦${context.toLocaleString()}.00`,
        },
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
          // drawBorder: false,
        },
      },
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Revenue Analytics</h2>
          <p className={styles.subtitle}>Total revenue analytics for this year</p>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.expensesDot} /> <span>Expenses</span>
            <div className={styles.incomeDot} /> <span>Income</span>
          </div>
          <Select defaultValue="This Year" variant="outlined" size="small" className={styles.selectBox}>
            <MenuItem value="This Year">This Year</MenuItem>
            <MenuItem value="Last Year">Last Year</MenuItem>
          </Select>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} height={150} />
      </div>
    </div>
  );
};

export default RevenueAnalytics;
