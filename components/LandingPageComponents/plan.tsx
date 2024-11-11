import "@/app/globals.css";
import React, { useState } from 'react';
import styles from '@/styles/LandingPage.module.css';
import ButtonTrial from "./Button";

const PricingPlan = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <div className={`${styles.pricingContainer} ${styles.flexCol} ${styles.itemsCenter}`}>
      <h2 className={`${styles.title} ${styles.textCenter}`}>Select Pricing Plan</h2>
      <p className={`${styles.subtitle} ${styles.textCenter}`}>
        Choose The Best Plan For Your School&apos;s Needs And Budget
      </p>

      <div className={`${styles.toggleWrapper}`}>
        <span
          className={`${!isAnnually ? styles.activeToggleText : styles.inactiveToggleText}`}
          onClick={() => setIsAnnually(false)}
        >
          Monthly
        </span>
        <div
          onClick={() => setIsAnnually(!isAnnually)}
          className={`${styles.toggleSwitch}`}
        >
          <span
            className={`${styles.toggleBall} ${isAnnually ? styles.translateRight : styles.translateLeft}`}
          />
        </div>
        <span
          className={`${isAnnually ? styles.activeToggleText : styles.inactiveToggleText}`}
          onClick={() => setIsAnnually(true)}
        >
          Annually
        </span>
        <span className={styles.discountBadge}>20% Off</span>
      </div>

      <div className={`${styles.pricingGrid}`}>
        {/* Basic Plan */}
        <div className={`${styles.planCard}`}>
          <div className={styles.cardTop}>

            <h3 className={styles.planTitle}>Basic Plan</h3>
            <p className={styles.planDescription}>Perfect for small school or short-term needs</p>
            <div className={styles.priceContainer}>
              <p className={styles.price}>₦ {isAnnually ? "60000" : "5000"}</p>
              <p className={styles.priceLabel}>{isAnnually ? "Annually" : "Per Month"}</p>
            </div>
            <ButtonTrial url="/pricing-payment" variant={"dark"} text={"Start 30 days free trial"}/>
          </div>
          <div className={styles.lineDivider}></div>
          <h4 className={styles.featuresTitle}>Features</h4>
          <ul className={styles.featureList}>
            <li><div className={styles.checkList}>✔</div> Access to basic features</li>
            <li><div className={styles.checkList}>✔</div> Add up to 200 students</li>
            <li><div className={styles.checkList}>✔</div> Expense and income tracking</li>
            <li><div className={styles.checkList}>✔</div> Class, students and staff details</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className={`${styles.planCard} ${styles.premiumCard}`}>
          <div className={styles.premiumTop}>
          <h3 className={styles.planTitle}>Premium Plan</h3>
          <p className={styles.planDescription}>Enjoy premium features at a reduced rate.</p>
          <div className={styles.priceContainer}>
              <p className={styles.price}>₦ {isAnnually ? "120000" : "10000"}</p>
              <p className={styles.priceLabel}>{isAnnually ? "Annually" : "Per Month"}</p>
            </div>
          </div>
          <div className={styles.premiumBottom}>

            <ButtonTrial url="/pricing-payment" variant={"dark"} text={"Start 30 days free trial"}/>
            <div className={styles.lineDivider}></div>
            <h4 className={styles.featuresTitle}>Features</h4>
            <ul className={`${styles.featureList} ${styles.textWhite}`}>
              <li><div className={styles.checkList}>✔</div> Advance features</li>
              <li><div className={styles.checkList}>✔</div> Add up to 400 students</li>
              <li><div className={styles.checkList}>✔</div> Advance reporting and analysis</li>
              <li><div className={styles.checkList}>✔</div> Expense and income tracking</li>
              <li><div className={styles.checkList}>✔</div> Class, students and staff details</li>
            </ul>
          </div>
        </div>

        {/* Advance Plan */}
        <div className={`${styles.planCard}`}>
        <div className={styles.cardTop}>
          <h3 className={styles.planTitle}>Advance Plan</h3>
          <p className={styles.planDescription}>
            Long-term solutions to enhance financial management and operational efficiency.
          </p>
          <div className={styles.priceContainer}>
            <p className={styles.price}>₦ {isAnnually ? "180000" : "15000"}</p>
            <p className={styles.priceLabel}>{isAnnually ? "Annually" : "Per Month"}</p>
          </div>
          <ButtonTrial url="/pricing-payment" variant={"dark"} text={"Start 30 days free trial"}/>
          </div>
          <div className={styles.lineDivider}></div>
          <h4 className={styles.featuresTitle}>Features</h4>
          <ul className={styles.featureList}>
            <li><div className={styles.checkList}>✔</div> Access to all features</li>
            <li><div className={styles.checkList}>✔</div> Advance reporting and analysis</li>
            <li><div className={styles.checkList}>✔</div> Add up to 600+ students</li>
            <li><div className={styles.checkList}>✔</div> Advance Expense and income tracking</li>
            <li><div className={styles.checkList}>✔</div> Class, students and staff details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
