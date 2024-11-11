import styles from '@/styles/LandingPage.module.css';

const HowItWorks = () => (
  <section className={styles.howItWorks}>
    <h2 className={styles.title}>How It Works</h2>
    <p className={styles.subtitle}>
      Manage Your School’s Income And Expenses In Just A Few Simple Steps
    </p>
    <div className={styles.howItWorksFlow}>
    <div className={styles.topCircles}>
      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.odd} ${styles.one}`}>1</div>
        <div className={styles.joiningLineR}></div>
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.even}`}>2</div>
        <div className={styles.joiningLine}></div>
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.odd} ${styles.three}`}>3</div>
        <div className={styles.joiningLineR}></div>
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.even}`}>4</div>
      </div>
    </div>
    <ol className={styles.steps}>
      <li className={styles.stepItem + " " + styles.stepUp}>
        <h4>Set Up Your Account</h4>
        <p>
          Quickly sign up, input your school’s basic details, and pay
          subscription to get started with our financial management tool.
        </p>
      </li>
      <li className={styles.stepItem}>
        <h4>Profile Setup</h4>
        <p>
          Complete additional profile information, such as uploading a school
          logo and inputting basic details and school fees.
        </p>
      </li>
      <li className={styles.stepItem + " " + styles.stepUp}>
        <h4>Add Necessary Details</h4>
        <p>
          Enter student information, class information, and staff details;
          including payment schedules and bank details.
        </p>
      </li>
      <li className={styles.stepItem}>
        <h4>Fund Your Wallet</h4>
        <p>
          Deposit the necessary funds into the secure platform wallet to cover
          salary payments.
        </p>
      </li>
    </ol>
    </div>
  </section>
);

export default HowItWorks;
