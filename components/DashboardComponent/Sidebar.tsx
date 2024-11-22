import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Sidebar.module.css';

type Section = "dashboard" | "student" | "class" | "employees" | "add-employee" | "view-employees" | 
               "wallet" | "remit-payment" | "salary" | "income" | "monthly-income" | 
               "annual-income" | "expenses" | "analytics" | "settings";

interface SidebarProp {
  activeSection: string;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: Function;
}

const Sidebar: React.FC<SidebarProp> = ({ activeSection, isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
  const router = useRouter();
  const { school_name } = router.query; // Extract school_name from the URL

  const [isEmployeeOpen, setIsEmployeeOpen] = useState<boolean>(false);
  const [isIncomeOpen, setIsIncomeOpen] = useState<boolean>(false);

  const menuItemClasses = (section: Section): string =>
    `${styles.menuItem} ${activeSection === section ? styles.menuItemActive : ""} ${styles.menuItemHover}`;

  return (
    <div className={`${styles.sidebar} ${styles.sidebarMobile} ${isMobileSidebarOpen ? styles.sidebarMobileOpen : styles.sidebarMobileClose}`}>
      <button onClick={() => setIsMobileSidebarOpen(false)} className={styles.closeButton}>
        &times;
      </button>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src="/icons/logo.svg" alt="logo" width={350} height={50} />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className={styles.nav}>
        <Link href={`/${school_name}/`} className={menuItemClasses("dashboard")}>
          <Image src="/icons/dashboard-icon.svg" alt="Dashboard" width={20} height={20} className={styles.icon} />
          Dashboard
        </Link>

        <Link href={`/${school_name}/student`} className={menuItemClasses("student")}>
          <Image src="/icons/student-icon.svg" alt="Student" width={20} height={20} className={styles.icon} />
          Student
        </Link>

        <Link href={`/${school_name}/class`} className={menuItemClasses("class")}>
          <Image src="/icons/class-icon.svg" alt="Class" width={20} height={20} className={styles.icon} />
          Class
        </Link>

        {/* Employees Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
            className={`${styles.dropdownButton} ${activeSection === "employees" ? styles.dropdownButtonActive : ""} ${styles.dropdownButtonHover}`}
          >
            <div>
              <Image src="/icons/employees-icon.svg" alt="Employees" width={20} height={20} className={styles.icon} />
              Employees
            </div>
            <span>
              {isEmployeeOpen ? (
                <Image src="/icons/arrow-up-dark.svg" alt="arrow up" width={10} height={10} />
              ) : (
                <Image src="/icons/arrow-down-light.svg" alt="arrow down" width={10} height={10} />
              )}
            </span>
          </button>
          {isEmployeeOpen && (
            <div className={styles.dropdownContent}>
              <Link href={`/${school_name}/add-employee`} className={`${styles.dropdownContentText} ${menuItemClasses("add-employee")}`}>
                Add Employee
              </Link>
              <Link href={`/${school_name}/view-employees`} className={`${styles.dropdownContentText} ${menuItemClasses("view-employees")}`}>
                View Employees
              </Link>
            </div>
          )}
        </div>

        <Link href={`/${school_name}/wallet`} className={menuItemClasses("wallet")}>
          <Image src="/icons/wallet-icon.svg" alt="Wallet" width={20} height={20} className={styles.icon} />
          Wallet
        </Link>

        <Link href={`/${school_name}/remit-payment`} className={menuItemClasses("remit-payment")}>
          <Image src="/icons/remit-icon.svg" alt="Remit Payment" width={20} height={20} className={styles.icon} />
          Remit Payment
        </Link>

        <Link href={`/${school_name}/salary`} className={menuItemClasses("salary")}>
          <Image src="/icons/salary-icon.svg" alt="Salary" width={20} height={20} className={styles.icon} />
          Salary
        </Link>

        {/* Income Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsIncomeOpen(!isIncomeOpen)}
            className={`${styles.dropdownButton} ${activeSection === "income" ? styles.dropdownButtonActive : ""} ${styles.dropdownButtonHover}`}
          >
            <div>
              <Image src="/icons/income-icon.svg" alt="Income" width={20} height={20} className={styles.icon} />
              Income
            </div>
            <span>
              {isIncomeOpen ? (
                <Image src="/icons/arrow-up-dark.svg" alt="arrow up" width={10} height={10} />
              ) : (
                <Image src="/icons/arrow-down-light.svg" alt="arrow down" width={10} height={10} />
              )}
            </span>
          </button>
          {isIncomeOpen && (
            <div className={styles.dropdownContent}>
              <Link href={`/${school_name}/monthly-income`} className={`${styles.dropdownContentText} ${menuItemClasses("monthly-income")}`}>
                Monthly Income
              </Link>
              <Link href={`/${school_name}/annual-income`} className={`${styles.dropdownContentText} ${menuItemClasses("annual-income")}`}>
                Annual Income
              </Link>
            </div>
          )}
        </div>

        <Link href={`/${school_name}/expenses`} className={menuItemClasses("expenses")}>
          <Image src="/icons/expenses-icon.svg" alt="Expenses" width={20} height={20} className={styles.icon} />
          Expenses
        </Link>

        <Link href={`/${school_name}/analytics`} className={menuItemClasses("analytics")}>
          <Image src="/icons/analytics-icon.svg" alt="Analytics" width={20} height={20} className={styles.icon} />
          Analytics
        </Link>
      </nav>

      {/* Bottom Settings and Logout */}
      <div className={styles.footer}>
        <Link href={`/${school_name}/settings`} className={menuItemClasses("settings")}>
          <Image src="/icons/settings-icon.svg" alt="Settings" width={20} height={20} className={styles.icon} />
          Settings
        </Link>

        <Link href="/logout" className={`${styles.logout} ${styles.logoutHover}`}>
          <Image src="/icons/logout-icon.svg" alt="Log-out" width={20} height={20} className={styles.icon} />
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
