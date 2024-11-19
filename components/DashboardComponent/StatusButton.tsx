import React from 'react';
import styles from '@/styles/StatusButton.module.css';

interface StatusProps {
  type: 'Received' | 'Pending' | 'Paid';
}

const StatusButton: React.FC<StatusProps> = ({ type }) => {
  let containerStyle, iconStyle;

  // Define styles based on status type
  switch (type) {
    case 'Received':
      containerStyle = `${styles.buttonContainer} ${styles.received}`;
      iconStyle = styles.receivedIcon;
      break;
    case 'Pending':
      containerStyle = `${styles.buttonContainer} ${styles.pending}`;
      iconStyle = styles.pendingIcon;
      break;
    case 'Paid':
      containerStyle = `${styles.buttonContainer} ${styles.paid}`;
      iconStyle = styles.paidIcon;
      break;
    default:
      containerStyle = `${styles.buttonContainer} ${styles.default}`;
      iconStyle = styles.defaultIcon;
  }

  return (
    <div className={containerStyle}>
      <div className={`${styles.icon} ${iconStyle}`} />
      <span className={styles.statusText}>{type}</span>
    </div>
  );
};

export default StatusButton;
