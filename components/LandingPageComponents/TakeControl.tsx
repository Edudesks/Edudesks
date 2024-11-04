import styles from '@/styles/LandingPage.module.css';
import ButtonTrial from './Button';

const TakeControl = () => (
  <section className={styles.takeControl}>
    <h2>Take control of your school’s finance today</h2>
    <p>
      Join hundreds of schools already benefiting from our financial management
      platform
    </p>
    <ButtonTrial url="/pricing-plan" variant="light" text="Get started for free now" />
  </section>
);

export default TakeControl;
