import { FC, useState } from 'react';
import styles from '../../styles/LandingPage.module.css';
import ButtonTrial from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.topPage}>
        <p className={styles.topPageText}>Buy Now And Save 20% Off Plan</p>
        <Link href="/pricing-plan" className={styles.topPagePricing}>
          See Plans and Pricing
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.navBar}>
        <Link href='/'>
          <Image
            src="/icons/logo.svg"
            alt="Edudesk Logo"
            className={styles.logoIcon}
            width={10}
            height={10}
            priority
            />
        </Link>
          
          {/* Hamburger icon */}
          

          {/* Desktop Navigation Links */}
          <ul className={styles.navLinks}>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/pricing-plan">Pricing</Link>
            </li>
            <li>
              <Link href="/#faq">Contact us</Link>
            </li>
          </ul>

          <div className={styles.navActions}>
            <div className={styles.logIn}>
              <a href="login">Log in</a>
              <Image
                src="/icons/arrow-right-dark.svg"
                alt="Edudesk Logo"
                className="dark:invert"
                width={20}
                height={50}
                priority
              />
            </div>
            <ButtonTrial url="/signup" variant="dark" text="Start 30 days free trial" />
          </div>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            ☰
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? 'show' : ''}`}>
          <a href="#features" onClick={toggleMobileMenu}>Home</a>
          <a href="#features" onClick={toggleMobileMenu}>Features</a>
          <a href="#plans" onClick={toggleMobileMenu}>Pricing</a>
          <a href="#faq" onClick={toggleMobileMenu}>Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
