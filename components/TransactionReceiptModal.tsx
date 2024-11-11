// components/TransactionReceiptModal.tsx

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/TransactionReceiptModal.module.css'; // Import the CSS module

interface Transaction {
  recipientName: string;
  amount: number;
  reference: string;
  status: string;
  date: string;
  method: string;
  accountCredited: string;
  sender: string;
  remark: string;
  recipientAccount: string;
  recipientBank: string;
}

interface TransactionReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction;
}

const TransactionReceiptModal: React.FC<TransactionReceiptModalProps> = ({ isOpen, onClose, transaction }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlay}
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>

        <h2 className={styles.modalTitle}>Transaction Receipt</h2>
        <p className={styles.modalSubtitle}>Thank you for your payment! Below are the details of your transaction.</p>
        
        <div className={styles.transactionSummary}>
          <div className={styles.transactionHeader}>
            <p className={styles.transactionText}>Received money to {transaction.recipientName}...</p>
            <p className={styles.transactionAmount}>+₦{transaction.amount.toLocaleString()}</p>
          </div>
          <p className={styles.transactionType}>Transfer</p>
        </div>

        <div className={styles.transactionDetails}>
          <h3 className={styles.sectionTitle}>Transaction Details</h3>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Transaction Reference:</p>
            <p className={styles.detailValue}>{transaction.reference}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Status:</p>
            <p className={styles.detailValue}>{transaction.status}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Date:</p>
            <p className={styles.detailValue}>{transaction.date}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Amount:</p>
            <p className={styles.detailValue}>₦{transaction.amount.toLocaleString()}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Payment Method:</p>
            <p className={styles.detailValue}>{transaction.method}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Account Credited:</p>
            <p className={styles.detailValue}>{transaction.accountCredited}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Sender:</p>
            <p className={styles.detailValue}>{transaction.sender}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Remark:</p>
            <p className={styles.detailValue}>{transaction.remark}</p>
          </div>
        </div>

        <div className={styles.recipientDetails}>
          <h3 className={styles.sectionTitle}>Recipient Details</h3>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Name:</p>
            <p className={styles.detailValue}>{transaction.recipientName}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Account Number:</p>
            <p className={styles.detailValue}>{transaction.recipientAccount}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.detailLabel}>Bank:</p>
            <p className={styles.detailValue}>{transaction.recipientBank}</p>
          </div>
        </div>

        <button className={styles.downloadButton}>
          Download Receipt
          <Image
          src="icons/download-icon.svg"
          alt=''
          className={styles.downloadIcon}
          width={20} height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default TransactionReceiptModal;
