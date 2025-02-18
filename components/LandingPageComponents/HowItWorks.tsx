import { useRef } from 'react';
import styles from '@/styles/LandingPage.module.css';
import { ChevronLeft, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    'Set Up Your Account',
    'Profile Setup',
    'Add Necessary Details',
    'Fund Your Wallet',
  ];

  const handleNext = () => {
    if (stepsRef.current) {
      stepsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (stepsRef.current) {
      stepsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[96vw] relative overflow-hidden">

    <section className={styles.howItWorks}  ref={stepsRef}>
      <h2 className={styles.title}>How It Works</h2>
      <p className={styles.subtitle}>
        Manage Your School’s Income And Expenses In Just A Few Simple Steps
      </p>
      <div className={styles.howItWorksFlow}>
        <div className={styles.topCircles}>
          <div className={styles.circleContainer}>
            <div
              className={`${styles.circle} ${styles.odd} ${styles.one}`}
            >
              1
            </div>
            <div className={styles.joiningLineR}></div>
          </div>
          <div className={styles.circleContainer}>
            <div
              className={`${styles.circle} ${styles.even}`}
            >
              2
            </div>
            <div className={styles.joiningLine}></div>
          </div>
          <div className={styles.circleContainer}>
            <div
              className={`${styles.circle} ${styles.odd} ${styles.three}`}
            >
              3
            </div>
            <div className={styles.joiningLineR}></div>
          </div>
          <div className={styles.circleContainer}>
            <div
              className={`${styles.circle} ${styles.even}`}
            >
              4
            </div>
          </div>
        </div>
        <ol
          className={styles.steps}
        >
          <li className={styles.stepItem + ' ' + styles.stepUp}>
            <h4>{steps[0]}</h4>
            <p>
              Quickly sign up, input your school’s basic details, and pay
              subscription to get started with our financial management tool.
            </p>
          </li>
          <li className={styles.stepItem}>
            <h4>{steps[1]}</h4>
            <p>
              Complete additional profile information, such as uploading a
              school logo and inputting basic details and school fees.
            </p>
          </li>
          <li className={styles.stepItem + ' ' + styles.stepUp}>
            <h4>{steps[2]}</h4>
            <p>
              Enter student information, class information, and staff details;
              including payment schedules and bank details.
            </p>
          </li>
          <li className={styles.stepItem}>
            <h4>{steps[3]}</h4>
            <p>
              Deposit the necessary funds into the secure platform wallet to
              cover salary payments.
            </p>
          </li>
        </ol>
      </div>

      {/* Navigation buttons (only visible in mobile view) */}
<div className="absolute top-2/3 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 lg:hidden">
  <button onClick={handlePrev} className="bg-[var(--border)] text-black px-2 py-2 rounded-full shadow-md">
    <ChevronLeft size={30}/>
  </button>
  <button onClick={handleNext} className="bg-[var(--border)] text-black px-2 py-2 rounded-full shadow-md">
    <ChevronRight size={30}/>
  </button>
</div>

    </section>
    </div>

  );
};

export default HowItWorks;
