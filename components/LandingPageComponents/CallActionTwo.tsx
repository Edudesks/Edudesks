import styles from '@/styles/LandingPage.module.css';
import Image from 'next/image';

const CallActionTwo = () => (
  <section className={styles.callActionTwo}>
    <div className={styles.actionTwoRight}>
      <div className={styles.backCircle}>
        <div className={`${styles.floatingCardOne} ${styles.floatingCard}`}>
          <p>Total Outstanding</p>
          <div className={styles.cardPrice}>
            <h4>₦46,456</h4>
            <span className={`${styles.percentage} ${styles.negative}`}>-5.7%</span>
          </div>
          <div className={styles.loaderOne}>
            <div className={styles.inner}></div>
          </div>
        </div>
        <Image 
            src="/images/confirmation-pop-up.png"
            alt="confirm-payment"
            className={styles.conImage}
            width={319}
            height={312}
            priority
        />
        <div className={`${styles.floatingCardTwo} ${styles.floatingCard}`}>
          <p>Total Payout</p>
          <div className={styles.cardPrice}>
            <h4>₦456,456</h4>
            <span className={`${styles.percentage} ${styles.positive}`}>+2.7%</span>
          </div>
          <div className={styles.loaderTwo}>
          <div className={styles.inner}></div>

          </div>
        </div>
      </div>
    </div>
    <div className={styles.actionTwoLeft}>
      <h2>Seamless and Efficient Salary Payment Solutions</h2>
      <p>
        Streamline your school&apos;s payroll process with our secure 
        wallet system, enabling quick and efficient salary payments. 
        With just a few clicks, you can reduce administrative workload, 
        minimize errors, and ensure accurate, timely staff payments. 
        This allows you to focus on what truly matters educating and 
        supporting your students.
      </p>
    </div>
  </section>
);

export default CallActionTwo;
