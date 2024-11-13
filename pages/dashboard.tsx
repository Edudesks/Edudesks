// components/Dashboard.js
import { Card, Typography, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import DashboardTable from '@/components/DashboardTable';
import BalanceCard from '@/components/BalancedCard';
import RevenueAnalytics from '@/components/RevenueAnalysis';
import Navbar from '@/components/NavBar';
import CircularChart from '@/components/CircularChart';
import { useState } from 'react';
import styles from '@/styles/Dashboard.module.css';


const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [transaction, setTransaction] = useState({
    reference: '1234567890984789',
    status: 'Success',
    date: 'October 11, 2024 12:20 PM',
    amount: '100,000',
    method: 'Transfer',
    accountCredited: '060603826',
    sender: 'Anita International College',
    remark: 'Maintenance',
    recipientName: 'Adesanya Oluwatumininu',
    recipientAccount: '1029302899',
    recipientBank: 'Wema Bank'
  });

  
  return (
    <div className="flex bg-[var(--secondary-text-color)]">
      <Sidebar />
      <div className="h-screen flex-1 overflow-y-scroll overflow-x-hidden">
        <Navbar />
        
        {/* Balance Cards Row */}
        <div className="flex flex-wrap justify-between gap-1 px-6 mt-4">
          <BalanceCard
            title="Total Balance"
            amount="₦ 1,000,000"
            percentageChange={16.78}
            changeLabel="last year"
            data={[10, 20, 15, 30, 25]}
            backgroundColors={['#4b8bbe33', '#4b8bbe33', '#4b8bbe33', '#4b8bbe33', '#4b8bbe']}
            icon="/icons/balance-icon.svg"
            barColor="#4b8bbe"
            size="medium"
          />
          <BalanceCard
            title="Total Income"
            amount="₦ 5,000,000"
            percentageChange={10.78}
            changeLabel="last year"
            data={[5, 15, 25, 20, 30]}
            backgroundColors={['#08c07433', '#08c07433', '#08c07433', '#08c07433', '#08c074']}
            icon="/icons/income-icon-dark.svg"
            barColor="#48bb78"
            size="large"
          />
          <BalanceCard
            title="Total Expenses"
            amount="₦ 3,000,000"
            percentageChange={-10.78}
            changeLabel="last year"
            data={[15, 25, 20, 30, 35]}
            backgroundColors={['#f6525233', '#f6525233', '#f6525233', '#f6525233', '#f65252']}
            icon="/icons/expenses-icon-dark.svg"
            barColor="#F87171"
            size="medium"
          />
          <BalanceCard
            title="Total Employees"
            amount="250"
            percentageChange={10}
            changeLabel="last year"
            data={[8, 12, 15, 20, 22]}
            backgroundColors={['#ff7d0033', '#ff7d0033', '#ff7d0033', '#ff7d0033', '#ff7d00']}
            icon="/icons/employees-icon-dark.svg"
            barColor="#F97316"
            size="medium"
          />
        </div>
        
        {/* Analytics and Circular Chart Row */}
        <div className={styles.flexContainer}>
          <div className={styles.flexRevenue}>
            <RevenueAnalytics />
          </div>
          <div className={styles.flexChart}>
            <CircularChart />
          </div>
        </div>

        
        {/* Transaction History Table */}
        <div className="px-6 mt-6">
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


