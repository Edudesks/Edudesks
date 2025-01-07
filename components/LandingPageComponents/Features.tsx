import { FC } from 'react';
import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';
// import Wallet from '../../assets/wallet.svg';
// import Expense from '../../assets/expense.svg';
// import SchoolFees from '../../assets/school-fees.svg';
// import Performance from '../../assets/performance.svg';
// import Income from '../../assets/income.svg';
// import Bill from '../../assets/bill.svg';
// import './Features.css';

const Features: FC = () => (
  <section id="features" className={styles.features}>
    <h2>Robust Solutions For Streamlined school
    Financial Management</h2>
    <p>
      Streamline Your School&apos;s Financial Operations By Efficiently Managing
      Salary Payments And Expenses.
    </p>
    <div className={styles.imageBlock}>
      <div className={styles.blockSectionOne}>
        <div className={styles.block}>
          <div>
          <Image 
            src="/icons/bill.svg"
            alt="Edudesk Logo"
            width={30}
            height={30}
            priority
        />
            <h2>Secured Wallet Management</h2>
          </div>
          <p>
            Access a secure wallet to handle payments for salaries and expenses
            without any hassle
          </p>
          <Image 
            src="/icons/wallet.svg"
            alt="Edudesk Logo"
            className={styles.featuresImage}
            width={50}
            height={50}
            priority
        />
        </div>
        <div className={styles.block}>
          <div>
          <Image 
            src="/icons/bill.svg"
            alt="Edudesk Logo"
            width={30}
            height={30}
            priority
        />
            {/* <img src={Bill} alt="" /> */}
            <h2>Expense Tracking Made Simple</h2>
          </div>
          <p>
            Monitor and track all school-related expenses with a streamlined
            payment system
          </p>
          <Image 
            src="/icons/expense.svg"
            alt="Edudesk Logo"
            className={styles.featuresImage}
            width={50}
            height={50}
            priority
        />
          {/* <img src={Expense} alt="" /> */}
        </div>
        <div className={styles.block}>
          <div>
          <Image 
            src="/icons/bill.svg"
            alt="Edudesk Logo"
            width={30}
            height={30}
            priority
        />
            {/* <img src={Bill} alt="" /> */}
            <h2>Effortless School fees tracking</h2>
          </div>
          <p>
            With our platform, schools can effortlessly monitor fee payments.
          </p>
          <Image 
            src="/icons/school-fees.svg"
            alt="Edudesk Logo"
            className={styles.featuresImage}
            width={50}
            height={50}
            priority
        />
          {/* <img src={SchoolFees} alt="" /> */}
        </div>
      </div>
      <div className={styles.blockSectionTwo}>
        <div className={styles.block + " " + styles.blockTwo}>
          <div>
          <Image 
            src="/icons/bill.svg"
            alt="Edudesk Logo"
            width={30}
            height={30}
            priority
        />
            {/* <img src={Bill} alt="" /> */}
            <h2>Effortless Income tracking</h2>
          </div>
          <p>
            Our platform provides a clear and detailed view of your earnings,
            helping you monitor every income stream effortlessly.
          </p>
          <Image 
            src="/icons/income.svg"
            alt="Edudesk Logo"
            className={styles.featuresImage}
            width={50}
            height={50}
            priority
        />
          {/* <img src={Income} alt="" /> */}
        </div>
        <div className={styles.block}>
          <div>
          <Image 
            src="/icons/bill.svg"
            alt="Edudesk Logo"
            width={30}
            height={30}
            priority
        />
            {/* <img src={Bill} alt="" /> */}
            <h2>Monitor Overall performance</h2>
          </div>
          <p>
            Edudesk helps you turn data into actionable information, helping you
            track performance.
          </p>
          <Image 
            src="/icons/performance.svg"
            alt="Edudesk Logo"
            className={styles.featuresImage}
            width={50}
            height={50}
            priority
        />
          {/* <img src={Performance} alt="" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
