import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footer}>
    
    <Image
            src="/icons/logo.svg"
            alt="Edudesk Logo"
            className={styles.logoIcon}
            width={10}
            height={10}
            priority
          />
    <ul>
      <li>
        <a href="#features">Home</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#plans">Pricing</a>
      </li>
      <li>
        <a href="#faq">Contact us</a>
      </li>
      <li>
        <a href="#faq">Terms of service</a>
      </li>
      <li>
        <a href="#faq">Privacy policy</a>
      </li>
    </ul>
    <div className={styles.hLine} />
    <div className={styles.footerBottom}>
      <p>© 2024 Edudesks. All rights reserved</p>
      <div className={styles.socials}>
        <div className={styles.socialItem}>
          <Image
          src={"/icons/instagram.svg"}
          alt="Arrow Icon"
          className={styles.arrowIcon}
          width={25}
          height={10}
        />
          {/* <img src={instagram} alt="" /> */}
        </div>
        <div className={styles.socialItem}>
          <Image
            src={"/icons/twitter.svg"}
            alt="Arrow Icon"
            className={styles.arrowIcon}
            width={25}
            height={10}
          />
          {/* <img src={twitter} alt="" /> */}
        </div>
        <div className={styles.socialItem}>
          <Image
            src={"/icons/linkedin.svg"}
            alt="Arrow Icon"
            className={styles.arrowIcon}
            width={25}
            height={10}
          />
          {/* <img src={linkedin} alt="" /> */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
