import { FC } from 'react';
import { CalendarToday } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from '../../styles/LandingPage.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Tuition Fees', 'Donations', 'Other Profit'],
  datasets: [
    {
      data: [234678.00, 134678.00, 34678.00],
      backgroundColor: ['#4b8bbe', '#041822', '#E2E9F6'],
      hoverBackgroundColor: ['#4b8bbe', '#041822', '#E2E9F6'],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: '65%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.label}: ₦${tooltipItem.raw.toLocaleString()}`;
        },
      },
    },
  },
};

const CallActionOne: FC = () => (
  <section className={styles.callActionOne}>
    <div className={styles.actionLeft}>
      <h2>Optimize School Financial Management with Edudesks</h2>
      <p>
        EduDesks offers a comprehensive solution for seamless school 
        financial management. Designed to streamline budgeting, expense tracking, 
        and payment management, its features include detailed financial reports 
        and real-time analytics, empowering you to gain greater control over your 
        institution&apos;s finances.
      </p>
    </div>
    <div className={styles.actionRight}>
      <div className={styles.actionRightContainer}>
        {/* Top text and date */}
          
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
          <Typography variant="body1" component="div">
            Income Report
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E9F6', borderRadius: '4px', padding: '2px 8px' }}>
            <CalendarToday sx={{ fontSize: '1rem', color: 'gray', mr: 0.5 }} />
            <Typography variant="body2" color="textSecondary">
              Oct 30 - Sep 28
            </Typography>
          </Box>
        </Box>

        {/* Doughnut Chart */}
        <Box sx={{ position: 'relative', display: 'inline-flex', marginBottom: 2 }}>
          <Doughnut data={data} options={options} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" component="div">
              ₦456,789.00
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Revenue for October
            </Typography>
          </Box>
        </Box>

        {/* Bottom details */}
        <div className={styles.bottomDetails}>
          <div className={styles.detailItem}>
            <div className={styles.labelContainer}>

              <div className={styles.dot1} />
              <span className={styles.detailLabel}>Tuition Fees (67%)</span>
            </div>
            <p className={styles.detailValue}>₦234,678.00</p>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.labelContainer}>
              <div className={styles.dot2} />
              <span className={styles.detailLabel}>Donations (23%)</span>
            </div>
            <p className={styles.detailValue}>₦134,678.00</p>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.labelContainer}>
              <div className={styles.dot3} />
              <span className={styles.detailLabel}>Other Profit (10%)</span>
            </div>
            <p className={styles.detailValue}>₦34,678.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallActionOne;
