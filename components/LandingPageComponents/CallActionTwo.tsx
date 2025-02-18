import styles from '@/styles/LandingPage.module.css';
import Image from 'next/image';

const CallActionTwo = () => (
  <section className={styles.callActionTwo}>
    <div className={styles.actionTwoRight}>
      <div className={styles.actionContainer}>

      <div className={styles.backCircle}>
        
      </div>
      <Image 
            src="/images/highest-sales.svg"
            alt="confirm-payment"
            className={styles.higImage}
            width={200}
            height={150}
            priority
        />
        <Image 
            src="/images/analytics.svg"
            alt="analytics"
            className={styles.conImage}
            width={600}
            height={500}
            priority
        />
    </div>
    </div>

    <div className={styles.actionTwoLeft}>
      <h2>Smart Sales Tracking for Seamless Operations</h2>
      <p>
      Eliminate manual errors and streamline financial management with automated fee processing, expense tracking, and real-time analytics. Keep your school&apos;s cash flow organized and optimize revenue collection effortlessly.
      </p>
    </div>
  </section>
);

export default CallActionTwo;
