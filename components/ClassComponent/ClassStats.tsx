import React from 'react';
import { UserAccountIcon, CapIcon, SchoolIcon } from 'hugeicons-react';
import Image from 'next/image';
import GeneralButton from '../GeneralButton';
import styles from '@/styles/ClassStats.module.css';

interface StatCardProps {
  src: string;
  count: number | string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ src, count, label, className = '' }) => (
  <div className={`${styles.card} ${className}`}>
    <div className={styles.iconContainer}>
      
    <Image 
          src={src}
          alt="Teacher" 
          width={30} 
          height={30} 
          className={styles.icon}
        />
    </div>
    <div className={styles.cardText}>
      <span className={styles.cardCount}>{count}</span>
      <span className={styles.cardLabel}>{label}</span>
    </div>
  </div>
);

const ClassStats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexBetween}>
        <div className={styles.flexGap}>
          <StatCard src={"/icons/desk.svg"} count={24} label="Total Classes" className={styles.darkCard}/>
          <StatCard src="/icons/total-students.svg" count={24} label="Total Students" />
          <StatCard src="/icons/class-teacher.svg" count={34} label="Class Teachers" />
        </div>
        <GeneralButton buttonText='Add new class' size="medium" state="active"
          iconPosition='left'
          icon={<Image 
            src="/icons/plus-user.svg"
            alt="Teacher" 
            width={30} 
            height={30} 
            className={styles.icon}
          />}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default ClassStats;
