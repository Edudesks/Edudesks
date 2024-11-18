import { useState } from 'react';
import Image from 'next/image';
import '@/app/globals.css';
import styles from '@/styles/Navbar.module.css';
import Sidebar from '@/components/Sidebar';


interface NavbarProp {
  setIsMobileSidebarOpen:Function;
}

const Navbar:React.FC<NavbarProp> = ({setIsMobileSidebarOpen}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // New state for sidebar

  return (
    <div className={styles.navbarContainer}>
      <Image src="/icons/logo.svg" className={styles.navLogo} alt="logo" width={300} height={45} />

      {isSearchOpen ? (
        <div className={`${styles.searchContainer}`}>
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

          <div
            className={`${styles.mobileSearchContainer}`}
            
          > 
            <div className={styles.menuBar} onClick={() => setIsMobileSidebarOpen((state:boolean) => !state )}>
              <Image
                src="/icons/menu.svg"
                alt="menu icon"
                width={30}
                height={30}
                className={styles.searchIcon}
              />
            </div>
            <div className="searchIcon" 
            
            onClick={() => setIsSearchOpen(true)}
            >
              <Image
                src="/icons/search-icon.svg"
                alt="search icon"
                width={30}
                height={30}
                className={styles.searchIconDark}
              />

            </div>
            <Image
            onClick={() => setIsSearchOpen(true)}
              src="/icons/search-light-icon.svg"
              alt="search icon"
              width={30}
              height={30}
              className={styles.searchIconLight}
            />
          </div>

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
                alt="notification icon"
                width={35}
                height={35}
                className={styles.imageIcon}
              />
              <Image
                src="/icons/avatar-icon.svg"
                alt="avatar icon"
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
