import React from 'react';
import styles from '@/styles/ClassExtraStats.module.css';
import Image from 'next/image';
import { UserAccountIcon } from 'hugeicons-react'; // Update with the correct icons
import GeneralButton from '../GeneralButton';

interface StatCard2Props {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bgColor: 'bgPrimary' | 'bgSecondary';
}

const StatCard2: React.FC<StatCard2Props> = ({ icon, label, value, bgColor }) => (
  <div className={`${styles.statCard} ${styles[bgColor]}`}>
    <div
      className={`${styles.iconContainer} ${
        bgColor === 'bgSecondary' ? styles.iconBlue : styles.iconWhite
      }`}
    >
      {icon}
    </div>
    <div className={styles.spaceY}>
      <p
        className={`${styles.statLabel} ${
          bgColor === 'bgSecondary' ? styles.labelGray : styles.labelWhite
        }`}
      >
        {label}
      </p>
      <p
        className={`${styles.statValue} ${
          bgColor === 'bgSecondary' ? styles.valueGray : styles.valueWhite
        }`}
      >
        {value}
      </p>
    </div>
  </div>
);

const ClassExtraStats: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>J.S.S.1.A</h2>
        <div className={styles.buttonGroup}>
          <GeneralButton
            buttonText="Edit Class Profile"
            size="medium"
            state="active"
            iconPosition="left"
            icon={
              <Image
                src="/icons/edit-white.svg"
                alt="Edit"
                width={20}
                height={20}
                className={styles.icon}
              />
            }
            className={styles.editButton}
          />
          <GeneralButton
            buttonText="Add new student"
            size="medium"
            state="active"
            iconPosition="left"
            icon={
              <Image
                src="/icons/user-plus-dark.svg"
                alt="Add"
                width={20}
                height={20}
                className={styles.icon}
              />
            }
            className={styles.addButton}
          />
        </div>
      </div>

      <p className={styles.description}>Assigned Class teacher: Mr Taiwo Adewuyi</p>

      <div className={styles.grid}>
        <StatCard2
          icon={<UserAccountIcon />}
          label="Total Expected Fees"
          value="₦5,060,000"
          bgColor="bgPrimary"
        />
        <StatCard2
          icon={<UserAccountIcon />}
          label="Total Fees Received"
          value="₦2,000,000"
          bgColor="bgPrimary"
        />
        <StatCard2
          icon={<UserAccountIcon />}
          label="Total number of Students"
          value={22}
          bgColor="bgSecondary"
        />
        <StatCard2
          icon={<UserAccountIcon />}
          label="Numbers of Females"
          value={12}
          bgColor="bgSecondary"
        />
        <StatCard2
          icon={<UserAccountIcon />}
          label="Numbers of Males"
          value={10}
          bgColor="bgSecondary"
        />
      </div>
    </div>
  );
};

export default ClassExtraStats;
