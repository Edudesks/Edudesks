import React from 'react';
import styles from '@/styles/Class.module.css';
import withProtectedRoute from '@/hoc/ProtectedRoute';

import ClassExtraStats from '@/components/ClassComponent/ClassExtraStats';
import StatusButton from '@/components/DashboardComponent/StatusButton';
import GenericTable, { Column } from '@/components/Table';
import Link from 'next/link';

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
  { title: 'Student Name', field: 'studentName' },
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



const ClassTable = () => {
  return (
    <>
    <Header/>
    <GenericTable rows={students} columns={columns} rowsPerPage={5} headColor = '#002F49'/>
    </>
  );
};




const ViewClass = () => (
    <div className={styles.container}>
    <ClassExtraStats />
        <ClassTable/>
    </div>
);

export default ViewClass