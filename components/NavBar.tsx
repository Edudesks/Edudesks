// components/Navbar.js
import { useState } from 'react';
import Image from 'next/image';
import '@/app/globals.css'
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      {isSearchOpen ? (
        <div className={`${styles.searchContainer} `}>
          <Image
            src="/icons/search-icon.svg"
            alt="search icon"
            width={20}
            height={20}
            className={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="Search for keyword"
            className={styles.searchInput}
          />
          <button
            className={styles.closeButton}
            onClick={() => setIsSearchOpen(false)}
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          <div className={`${styles.searchContainer} ${styles.desktopSearch}`}>
            <Image
              src="/icons/search-icon.svg"
              alt="search icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search for keyword"
              className={styles.searchInput}
            />
          </div>
          <button
            className={` ${styles.mobileSearchContainer}`}
            onClick={() => setIsSearchOpen(true)}
          > 
          <div className={styles.menuBar}>
          <Image
              src="/icons/menu.svg"
              alt="search icon"
              width={30}
              height={30}
              className={styles.searchIcon}
            />
          </div>
            <Image
                src="/icons/search-icon.svg"
                alt="search icon"
                width={30}
                height={30}
                className={styles.searchIconDark}
              />
            <Image
              src="/icons/search-light-icon.svg"
              alt="search icon"
              width={30}
              height={30}
              className={styles.searchIconLight}
            />
          </button>

          {!isSearchOpen && (
            <div className={styles.freeTrialContainer}>
              <div className={styles.freeTrialTop}>
                <span className={styles.freeTrialLabel}>Free trial</span>
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}></div>
                </div>
              </div>
              <span className={styles.trialDays}>7/30 days</span>
            </div>
          )}

          {!isSearchOpen && (
            <div className={styles.rightIconsContainer}>
              <Image
              src="/icons/notification-icon.svg"
              alt="search icon"
              width={35}
              height={35}
              className={styles.imageIcon}
            />
              <Image
              src="/icons/avatar-icon.svg"
              alt="search icon"
              width={35}
              height={35}
              className={styles.imageIcon}
            />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
