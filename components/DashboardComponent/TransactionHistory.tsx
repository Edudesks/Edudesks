// components/TransactionHistory.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/MobileTable.module.css'; // Ensure the CSS filename matches
import StatusButton from './StatusButton';

type TransactionStatus = 'Received' | 'Pending' | 'Paid';

interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  isPositiveChange: boolean;
  status: TransactionStatus;
}

const transactions: Transaction[] = [
  { id: 1, title: 'School fees', isPositiveChange: true, date: 'Fri, 24th May', amount: 100000, status: 'Received' },
  { id: 2, title: 'Sales of Textbook', isPositiveChange: true, date: 'Fri, 24th May', amount: 100000, status: 'Received' },
  { id: 3, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Pending' },
  { id: 4, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Paid' },
  { id: 5, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Pending' },
  { id: 6, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Paid' },
];

const TransactionHistory: React.FC = () => {
  return (
    <div className={styles.transactionHistory}>
      <h2>Transaction History</h2>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for keyword" />
        <FaSearch className={styles.searchIcon} />
      </div>
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`${styles.transactionItem} ${styles[transaction.status.toLowerCase()]}`}>
            <div className={`${styles.iconStatus} ${transaction.status === 'Received' ? styles.received: transaction.status === 'Pending' ? styles.pending: styles.paid}`}>
              {/* {transaction.status === 'Received' ? ( */}
                <Image
                      src={"/icons/transaction-icon.svg"}
                      alt={"transaction-icon"}
                      width={18}
                      height={18}
                    />
                 
            </div>
            <div className={styles.transactionDetails}>
              <span className={styles.transactionTitle}>{transaction.title}</span>
              <span className={styles.transactionDate}>{transaction.date}</span>
            </div>
            <div className={styles.transactionAmount}>
              <div className={styles.transactionAmountText}>
                <span>₦{transaction.amount.toFixed(2)}</span>
                <Image
                      src={transaction.isPositiveChange  ? "/icons/up-rate.svg" : "/icons/down-rate.svg"}
                      alt={transaction.isPositiveChange  ? "up arrow" : "down arrow"}
                      width={18}
                      height={18}
                      style={{ marginLeft: 8 }}
                    />
              </div>
              <StatusButton type={transaction.status}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
