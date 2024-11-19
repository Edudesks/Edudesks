// components/BalanceCard.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import styles from '@/styles/BalanceCard.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BalanceCardProps {
  title: string;
  amount: string;
  percentageChange: number;
  changeLabel: string;
  data: number[];
  backgroundColors: string[];
  icon: string;
  barColor: string;
  size?: 'small' | 'medium' | 'large';
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  percentageChange,
  changeLabel,
  data,
  backgroundColors,
  icon,
  barColor,
}) => {
  const chartData = {
    labels: Array(data.length).fill(''),
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
        barPercentage: 1.3,
        categoryPercentage: 0.7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className={`${styles.card} `}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Image src={icon} alt={`${title} icon`} width={20} height={20} />
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.amountContainer}>
          <div className={styles.amount}>{amount}</div>
          <div className={`${styles.changeInfo} ${percentageChange >= 0 ? styles.changePositive : styles.changeNegative}`}>
            <span>{percentageChange >= 0 ? '▲' : '▼'} {Math.abs(percentageChange)}%</span>
            <span className={styles.changeLabel}>{changeLabel}</span>
          </div>
        </div>
        <div className={styles.chartContainer}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
