import { FC } from 'react';
import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';

const TrustedSection: FC = () => (
  <section className={styles.trusted}>
    <h2>Trusted by over 20 Schools</h2>
    <div className={styles.schools}>
      <div className={styles.schoolImage__text}>
      <Image 
            src="/icons/caleb.svg"
            alt="Caleb Logo"
            className={styles.schoolImage}
            width={10}
            height={10}
            priority
        />
        <div>Caleb International School</div>
      </div>
      <div className={styles.schoolImage__text}>
      <Image 
            src="/icons/crown.svg"
            alt="Crown Logo"
            className={styles.schoolImage}
            width={10}
            height={10}
            priority
        />
        <div>Crowns Gate School</div>
      </div>
      <div className={styles.schoolImage__text}>
      <Image 
            src="/icons/legacy.svg"
            alt="Legacy Logo"
            className={styles.schoolImage}
            width={10}
            height={10}
            priority
        />
        <div>Legacy Schools</div>
      </div>
      <div className={styles.schoolImage__text}>
      <Image 
            src="/icons/pngtree.svg"
            alt="Anita Logo"
            className={styles.schoolImage}
            width={10}
            height={10}
            priority
        />
        <div>Anita College</div>
      </div>
    </div>
  </section>
);

export default TrustedSection;
