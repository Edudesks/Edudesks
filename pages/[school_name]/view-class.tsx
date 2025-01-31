import React, { useEffect } from 'react';
import styles from '@/styles/Class.module.css';
import mobileTableStyle from '@/styles/MobileTable.module.css';

import tableStyle from '@/styles/DashboardTable.module.css';
// import MobileTable from '@/components/DashboardComponent/TransactionHistory';
import MobileTableHistory from '@/components/MobileTable';

import ClassExtraStats from '@/components/ClassComponent/ClassExtraStats';
import StatusButton from '@/components/DashboardComponent/StatusButton';
import GenericTable, { Column } from '@/components/Table';
import Link from 'next/link';
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import Image from 'next/image';

interface Student {
  studentName: string;
  gender: string;
  amountDue: number;
  guardianNumber: string;
  viewProfile: string;
  schoolFeesStatus: 'Pending' | 'Received' | 'Paid';
}

const students: Student[] = [
  {
    studentName: 'Paul',
    gender: 'Male',
    amountDue: 100000,
    guardianNumber: '+1 23314',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Received',
  },
  {
    studentName: 'Mary',
    gender: 'Female',
    amountDue: 100000,
    guardianNumber: '+1 22341',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Pending',
  },
  {
    studentName: 'Paul',
    gender: 'Male',
    amountDue: 100000,
    guardianNumber: '+1 23314',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Received',
  },
  {
    studentName: 'Mary',
    gender: 'Female',
    amountDue: 100000,
    guardianNumber: '+1 22341',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Pending',
  },
  {
    studentName: 'Paul',
    gender: 'Male',
    amountDue: 100000,
    guardianNumber: '+1 23314',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Received',
  },
  {
    studentName: 'Mary',
    gender: 'Female',
    amountDue: 100000,
    guardianNumber: '+1 22341',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Pending',
  },
  {
    studentName: 'Paul',
    gender: 'Male',
    amountDue: 100000,
    guardianNumber: '+1 23314',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Received',
  },
  {
    studentName: 'Mary',
    gender: 'Female',
    amountDue: 100000,
    guardianNumber: '+1 22341',
    viewProfile: 'View Profile',
    schoolFeesStatus: 'Pending',
  },
];

const columns: Column<Student>[] = [
  { title: 'Student Name', field: 'studentName',
    render: (row) =>
        <div className="flex gap-3 items-center">
            <Image
              src="/icons/avatar-icon.svg"
              alt="Staff 4"
              width={32}
              height={32}
              objectFit="cover"
            />
            <div>{row.studentName}</div>
          </div>
   },
  { title: 'Gender', field: 'gender' },
  {
    title: 'Sch.fees status',
    field: 'schoolFeesStatus',
    render: (row) => <StatusButton type={row.schoolFeesStatus} />,
  },
  {
    title: 'Amount due',
    field: 'amountDue',
    render: (row) => `₦${row.amountDue.toLocaleString()}`,
  },
  { title: 'Guardian Mobile No.', field: 'guardianNumber' },
  { title: ' ',
    field: 'viewProfile',
    render: (row) => <Link className={styles.viewProfile} href="#profile">{row.viewProfile}</Link>
  },
];


const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Names of Students in J.S.S.1A</h1>
      <div className={styles.sortContainer}>
        <label htmlFor="sort" className={styles.sortLabel}>Sort by:</label>
        <select id="sort" className={styles.sortDropdown}>
          <option value="all">All students</option>
          <option value="name">Name</option>
          <option value="grade">Grade</option>
        </select>
      </div>
    </div>
  );
};

const MobileTable = () => {
  return (
    <MobileTableHistory
      data={students}
      renderRow={(student) => (
        <li className={`${mobileTableStyle.transactionItem} ${mobileTableStyle["Pending"]}`}>
          <div
            className={`${mobileTableStyle.iconStatus} ${
              
              mobileTableStyle.paid
            }`}
          >
            <Image
              src={'/icons/transaction-icon.svg'}
              alt={'transaction-icon'}
              width={18}
              height={18}
            />
          </div>
          <div className={mobileTableStyle.transactionDetails}>
            <span className={mobileTableStyle.transactionTitle}>{student.studentName}</span>
            <span className={mobileTableStyle.transactionDate}>{student.studentName}</span>
          </div>
          <div className={mobileTableStyle.transactionAmount}>
            <div className={mobileTableStyle.transactionAmountText}>
              <span>₦{student.studentName}</span>
              <Image
                src={
                  student.studentName
                    ? '/icons/up-rate.svg'
                    : '/icons/down-rate.svg'
                }
                alt={
                  student.studentName ? 'up arrow' : 'down arrow'
                }
                width={18}
                height={18}
                style={{ marginLeft: 8 }}
              />
            </div>
            <StatusButton type={"Pending"} />
          </div>
        </li>
      )}
    />
  );
};

const ClassTable = () => {
  return (
    <div className={tableStyle.container}>
    <Header/>
    <GenericTable rows={students} columns={columns} rowsPerPage={5} headColor = '#002F49'/>
    </div>
  );
};




const ViewClass = () => {
  const dispatch = useAppDispatch();
     useEffect(()=>{
      dispatch(setActivePage({active:"view-class", parentNav: "class"}));
       
     })
  return (
  
    <div className={styles.container}>
    <ClassExtraStats />
        <ClassTable/>
        <MobileTable/>

    </div>
)};

export default ViewClass