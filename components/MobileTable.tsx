// components/TransactionHistory.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/MobileTable.module.css';
import StatusButton from '@/components/DashboardComponent/StatusButton';

interface MobileTableHistoryProps<T> {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

const MobileTableHistory = <T,>({ data, renderRow }: MobileTableHistoryProps<T>) => {
  return (
    <div className={styles.transactionHistory}>
      <h2>Transaction History</h2>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for keyword" />
        <FaSearch className={styles.searchIcon} />
      </div>
      <ul className={styles.transactionList}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {renderRow(item)}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MobileTableHistory;
