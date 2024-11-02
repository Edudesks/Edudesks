import { FC } from 'react';
import ButtonTrial from '@/components/LandingPageComponents/Button';
import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';

const Hero: FC = () => (
  <section className={styles.hero}>
    <p className={styles.heroSmallText}>Start managing your school finances today</p>
    <h1 className={styles.heroBigText}>Simplify school finances with our all-in-one management platform.</h1>
    <h3 className={styles.heroMediumText}>
      Gain full control over income and expenses processes - all from one
      seamless platform designed for schools
    </h3>
    <ButtonTrial variant="light" text="Start 30 days free trial" />
    <Image 
      src="/icons/dashboard.svg"
      alt="Edudesk Logo"
      className={styles.dashboardSvg}
      width={180}
      height={180}
      priority
    />
  </section>
);

export default Hero;
