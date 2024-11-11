import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Sidebar.module.css';

type Section = "Dashboard" | "Student" | "Class" | "Employees" | "Add Employee" | "View Employees" | 
               "Wallet" | "Remit Payment" | "Salary" | "Income" | "Monthly Income" | 
               "Annual Income" | "Expenses" | "Analytics" | "Settings";

const Sidebar: React.FC = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState<boolean>(false);
  const [isIncomeOpen, setIsIncomeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<Section>("Dashboard");

  const menuItemClasses = (section: Section): string =>
    `${styles.menuItem} ${activeSection === section ? styles.menuItemActive : ""} ${styles.menuItemHover}`;

  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/icons/iconLogo.svg" alt="logo" width={40} height={40} />
        <div className={styles.dot}></div>
      </div>

      {/* Menu Items */}
      <nav className={styles.nav}>
        <a href="#" onClick={() => setActiveSection("Dashboard")} className={menuItemClasses("Dashboard")}>
          <Image src="/icons/dashboard-icon.svg" alt="Dashboard" width={20} height={20} className={styles.icon} />
          Dashboard
        </a>

        <a href="#" onClick={() => setActiveSection("Student")} className={menuItemClasses("Student")}>
          <Image src="/icons/student-icon.svg" alt="Student" width={20} height={20} className={styles.icon} />
          Student
        </a>

        <a href="#" onClick={() => setActiveSection("Class")} className={menuItemClasses("Class")}>
          <Image src="/icons/class-icon.svg" alt="Class" width={20} height={20} className={styles.icon} />
          Class
        </a>

        {/* Employees Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
            className={`${styles.dropdownButton} ${activeSection === "Employees" ? styles.dropdownButtonActive : ""} ${styles.dropdownButtonHover}`}
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
              <a href="#" onClick={() => setActiveSection("Add Employee")} className={menuItemClasses("Add Employee")}>
                Add Employee
              </a>
              <a href="#" onClick={() => setActiveSection("View Employees")} className={menuItemClasses("View Employees")}>
                View Employees
              </a>
            </div>
          )}
        </div>

        <a href="#" onClick={() => setActiveSection("Wallet")} className={menuItemClasses("Wallet")}>
          <Image src="/icons/wallet-icon.svg" alt="Wallet" width={20} height={20} className={styles.icon} />
          Wallet
        </a>

        <a href="#" onClick={() => setActiveSection("Remit Payment")} className={menuItemClasses("Remit Payment")}>
          <Image src="/icons/remit-icon.svg" alt="Remit Payment" width={20} height={20} className={styles.icon} />
          Remit Payment
        </a>

        <a href="#" onClick={() => setActiveSection("Salary")} className={menuItemClasses("Salary")}>
          <Image src="/icons/salary-icon.svg" alt="Salary" width={20} height={20} className={styles.icon} />
          Salary
        </a>

        {/* Income Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsIncomeOpen(!isIncomeOpen)}
            className={`${styles.dropdownButton} ${activeSection === "Income" ? styles.dropdownButtonActive : ""} ${styles.dropdownButtonHover}`}
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
              <a href="#" onClick={() => setActiveSection("Monthly Income")} className={menuItemClasses("Monthly Income")}>
                Monthly Income
              </a>
              <a href="#" onClick={() => setActiveSection("Annual Income")} className={menuItemClasses("Annual Income")}>
                Annual Income
              </a>
            </div>
          )}
        </div>

        <a href="#" onClick={() => setActiveSection("Expenses")} className={menuItemClasses("Expenses")}>
          <Image src="/icons/expenses-icon.svg" alt="Expenses" width={20} height={20} className={styles.icon} />
          Expenses
        </a>

        <a href="#" onClick={() => setActiveSection("Analytics")} className={menuItemClasses("Analytics")}>
          <Image src="/icons/analytics-icon.svg" alt="Analytics" width={20} height={20} className={styles.icon} />
          Analytics
        </a>
      </nav>

      {/* Bottom Settings and Logout */}
      <div className={styles.footer}>
        <a href="#" onClick={() => setActiveSection("Settings")} className={menuItemClasses("Settings")}>
          <Image src="/icons/settings-icon.svg" alt="Settings" width={20} height={20} className={styles.icon} />
          Settings
        </a>

        <a href="#" className={`${styles.logout} ${styles.logoutHover}`}>
          <Image src="/icons/logout-icon.svg" alt="Log-out" width={20} height={20} className={styles.icon} />
          Log out
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
