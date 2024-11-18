// components/CircularChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from '@/styles/CircularChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart: React.FC = () => {
  const data = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#6495ED', '#0a3c57'],
        hoverBackgroundColor: ['#6495ED', '#0a3c57'],
        borderWidth: 0,
        cutout: '70%',
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
    <div className={styles.container}>
      <h3 className={styles.title}>Number of students</h3>
      <div className={styles.chartContainer} style={{ width: '250px', height: '250px' }}> {/* Adjust size here */}
        <Doughnut data={data} options={options}  />
        <div className={styles.overlayText}>
          <p className={styles.overlayLabel}>Total</p>
          <p className={styles.overlayValue}>1500</p>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statBlock}>
          <p className={styles.statLabel}>Female</p>
          <p className={styles.statValue}>70%</p>
          <div className={styles.progressBarBackground}>
            <div className={styles.progressBarFill} style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className={styles.statBlock}>
          <p className={styles.statLabel}>Male</p>
          <p className={styles.statValue}>30%</p>
          <div className={styles.progressBarBackground}>
            <div className={styles.progressBarFillMale} style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
