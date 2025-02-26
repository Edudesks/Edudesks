import "@/app/globals.css";
import React, { useState } from 'react';
import styles from '@/styles/LandingPage.module.css';
import ButtonTrial from "./Button";
import { useRouter } from "next/router";
import { setPlan } from "@/store/slices/planSlice";
import { useAppDispatch } from "@/store/hooks";

type PlanType = "Monthly" | "Termly" | "Yearly"

const PricingPlan = () => {
  const [planType, setPlanType] = useState<PlanType>("Monthly");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlePlanSelect = (plan: string, price: string, subscription: string) => {
    dispatch(setPlan({ plan, price, subscription }));
    router.push("/pricing-payment");
  };
  return (
    <div className={`${styles.pricingContainer} ${styles.flexCol} ${styles.itemsCenter}`}>
      <h2 className={`${styles.title} ${styles.textCenter}`}>Select Pricing Plan</h2>
      <p className={`${styles.subtitle} ${styles.textCenter}`}>
        Choose The Best Plan For Your School&apos;s Needs And Budget
      </p>

      <div className="flex gap-12 mb-6">
        <span
          className={`cursor-pointer pb-2 text-[var(--primary)] font-semibold ${
            planType === "Monthly"
              && "border-b-2 border-[var(--primary)]"
          }`}
          onClick={() => setPlanType("Monthly")}
        >
          Monthly
        </span>
        <span
          className={`cursor-pointer pb-2 text-[var(--primary)] font-semibold ${
            planType === "Termly"
              && "border-b-2 border-[var(--primary)]"
          }`}
          onClick={() => setPlanType("Termly")}
        >
          Termly
        </span>
        <span
          className={`cursor-pointer pb-2 text-[var(--primary)] font-semibold ${
            planType === "Yearly"
              && "border-b-2 border-[var(--primary)]"
          }`}
          onClick={() => setPlanType("Yearly")}
        >
          Yearly
        </span>
        {/* <span className={styles.discountBadge}>20% Off</span> */}
      </div>

      <div className={`${styles.pricingGrid}`}>
        {/* Basic Plan */}
        <div className={`${styles.planCard}`}>
          <div className={styles.cardTop}>

            <h3 className={styles.planTitle}>Basic Plan</h3>
            <p className={styles.planDescription}>Perfect for small school or short-term needs</p>
            <div className={styles.priceContainer}>
              <p className={styles.price}>₦ {planType === "Monthly" ? "100" : planType === "Termly"? "300" : "1200"}</p>
              <p className={styles.priceLabel}>Per Student</p>
            </div>
            <ButtonTrial onClick={()=>handlePlanSelect("Basic", planType === "Monthly" ? "100" : planType === "Termly"? "300" : "1200", planType )} variant={"dark"} text={"Start 30 days free trial"}/>
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
              <p className={styles.price}>₦ {planType === "Monthly" ? "150" : planType === "Termly"? "450" : "1800"}</p>
              <p className={styles.priceLabel}>Per Student</p>
            </div>
          </div>
          <div className={styles.premiumBottom}>

            <ButtonTrial onClick={()=>handlePlanSelect("Premium", planType === "Monthly" ? "150" : planType === "Termly"? "450" : "1800", planType )} variant={"dark"} text={"Start 30 days free trial"}/>
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
            <p className={styles.price}>₦ {planType === "Monthly" ? "200" : planType === "Termly"? "600" : "2400"}</p>
            <p className={styles.priceLabel}>Per Student</p>
          </div>
          <ButtonTrial onClick={()=>handlePlanSelect("Advance", planType === "Monthly" ? "200" : planType === "Termly"? "600" : "2400", planType )} variant={"dark"} text={"Start 30 days free trial"}/>
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
