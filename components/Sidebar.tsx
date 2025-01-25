import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Sidebar.module.css";
import { SidebarSection } from "@/types";


interface SidebarProp {
  activeSection: string;
  activeParentNav: string;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: Function;
}

const Sidebar: React.FC<SidebarProp> = ({
  activeParentNav,
  activeSection,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) => {
  const router = useRouter();
  const { school_name } = router.query; // Extract school_name from the URL
  console.log(activeSection)
  const [isEmployeeOpen, setIsEmployeeOpen] = useState<boolean>(false);
  const [isStudentOpen, setIsStudentOpen] = useState<boolean>(false);
  const [isClassOpen, setIsClassOpen] = useState<boolean>(false);
  const [isIncomeOpen, setIsIncomeOpen] = useState<boolean>(false);

  const menuItemClasses = (section: SidebarSection): string =>
    `${styles.menuItem} ${
      activeSection === section ? styles.menuItemActive : ""
    } ${styles.menuItemHover}`;

  return (
    <div
      className={`${styles.sidebar} ${styles.sidebarMobile} ${
        isMobileSidebarOpen
          ? styles.sidebarMobileOpen
          : styles.sidebarMobileClose
      }`}
    >
      <button
        onClick={() => setIsMobileSidebarOpen(false)}
        className={styles.closeButton}
      >
        &times;
      </button>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={350} height={50} />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className={styles.nav}>
        <Link
          href={`/${school_name}/`}
          className={menuItemClasses("dashboard")}
        >
          <Image
            src="/icons/dashboard-icon.svg"
            alt="Dashboard"
            width={20}
            height={20}
            className={styles.icon}
          />
          Dashboard
        </Link>

         {/* Class Dropdown */}
         <div className="flex flex-col">
          <button
            onClick={() => setIsClassOpen(!isClassOpen)}
            className={`${styles.dropdownButton} ${
              activeSection === "class" ? styles.dropdownButtonActive : ""
            } ${styles.dropdownButtonHover} ${ activeParentNav === "class" && !isClassOpen ? styles.dropdownButtonActive : "" }`}
          >
            <div>
              <Image
                src="/icons/class-icon.svg"
                alt="Class"
                width={20}
                height={20}
                className={styles.icon}
              />
              Class
            </div>
            <span>
              {isClassOpen ? (
                <Image
                  src="/icons/arrow-up-dark.svg"
                  alt="arrow up"
                  width={10}
                  height={10}
                />
              ) : (
                <Image
                  src="/icons/arrow-down-light.svg"
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              )}
            </span>
          </button>
          {isClassOpen && (
            <div className={styles.dropdownContent}>
              <Link
                href={`/${school_name}/add-class`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "add-class"
                )}`}
              >
                Add Class
              </Link>
              <Link
                href={`/${school_name}/view-class`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "view-class"
                )}`}
              >
                View Class
              </Link>
            </div>
          )}
        </div>

        {/* Students Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsStudentOpen(!isStudentOpen)}
            className={`${styles.dropdownButton} ${
              activeSection === "student" ? styles.dropdownButtonActive : ""
            } ${styles.dropdownButtonHover} ${ activeParentNav === "student" && !isStudentOpen ? styles.dropdownButtonActive : "" } `}
          >
            <div>
              <Image
                src="/icons/student-icon.svg"
                alt="Student"
                width={20}
                height={20}
                className={styles.icon}
              />
              Students
            </div>
            <span>
              {isStudentOpen ? (
                <Image
                  src="/icons/arrow-up-dark.svg"
                  alt="arrow up"
                  width={10}
                  height={10}
                />
              ) : (
                <Image
                  src="/icons/arrow-down-light.svg"
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              )}
            </span>
          </button>
          {isStudentOpen && (
            <div className={styles.dropdownContent}>
              <Link
                href={`/${school_name}/add-student`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "add-student"
                )}`}
              >
                Add Student
              </Link>
              <Link
                href={`/${school_name}/view-student`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "view-student"
                )}`}
              >
                View Student
              </Link>
            </div>
          )}
        </div>

        {/* Employees Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
            className={`${styles.dropdownButton} ${
              activeSection === "employees" ? styles.dropdownButtonActive : ""
            } ${styles.dropdownButtonHover} ${ activeParentNav === "employees" && !isEmployeeOpen ? styles.dropdownButtonActive : "" }`}
            >

            <div>
              <Image
                src="/icons/employees-icon.svg"
                alt="Employees"
                width={20}
                height={20}
                className={styles.icon}
              />
              Employees
            </div>
            <span>
              {isEmployeeOpen ? (
                <Image
                  src="/icons/arrow-up-dark.svg"
                  alt="arrow up"
                  width={10}
                  height={10}
                />
              ) : (
                <Image
                  src="/icons/arrow-down-light.svg"
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              )}
            </span>
          </button>
          {isEmployeeOpen && (
            <div className={styles.dropdownContent}>
              <Link
                href={`/${school_name}/add-employee`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "add-employee"
                )}`}
              >
                Add Employee
              </Link>
              <Link
                href={`/${school_name}/view-employees`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "view-employees"
                )}`}
              >
                View Employees
              </Link>
            </div>
          )}
        </div>

        {/* Income Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsIncomeOpen(!isIncomeOpen)}
            className={`${styles.dropdownButton} ${
              activeSection === "income" ? styles.dropdownButtonActive : ""
            } ${styles.dropdownButtonHover} ${ activeParentNav === "income" && !isIncomeOpen ? styles.dropdownButtonActive : "" }`}
            >
            <div>
              <Image
                src="/icons/income-icon.svg"
                alt="Income"
                width={20}
                height={20}
                className={styles.icon}
              />
              Income
            </div>
            <span>
              {isIncomeOpen ? (
                <Image
                  src="/icons/arrow-up-dark.svg"
                  alt="arrow up"
                  width={10}
                  height={10}
                />
              ) : (
                <Image
                  src="/icons/arrow-down-light.svg"
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              )}
            </span>
          </button>
          {isIncomeOpen && (
            <div className={styles.dropdownContent}>
              <Link
                href={`/${school_name}/income-list`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "monthly-income"
                )}`}
              >
                Monthly Income
              </Link>
              <Link
                href={`/${school_name}/income-list`}
                className={`${styles.dropdownContentText} ${menuItemClasses(
                  "annual-income"
                )}`}
              >
                Annual Income
              </Link>
            </div>
          )}
        </div>

        <Link
          href={`/${school_name}/wallet`}
          className={menuItemClasses("wallet")}
        >
          <Image
            src="/icons/wallet-icon.svg"
            alt="Wallet"
            width={20}
            height={20}
            className={styles.icon}
          />
          Wallet
        </Link>

        <Link
          href={`/${school_name}/message`}
          className={menuItemClasses("message")}
        >
          <Image
            src="/icons/remit-icon.svg"
            alt="Remit Payment"
            width={20}
            height={20}
            className={styles.icon}
          />
          Message
        </Link>
      </nav>

      {/* Bottom Settings and Logout */}
      <div className={styles.footer}>
        <Link
          href={`/${school_name}/settings`}
          className={menuItemClasses("settings")}
        >
          <Image
            src="/icons/settings-icon.svg"
            alt="Settings"
            width={20}
            height={20}
            className={styles.icon}
          />
          Settings
        </Link>

        <Link
          href="/logout"
          className={`${styles.logout} ${styles.logoutHover}`}
        >
          <Image
            src="/icons/logout-icon.svg"
            alt="Log-out"
            width={20}
            height={20}
            className={styles.icon}
          />
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
