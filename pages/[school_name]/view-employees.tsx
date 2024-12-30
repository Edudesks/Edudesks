import React, { useEffect } from 'react';
import styles from '@/styles/Class.module.css';
import withProtectedRoute from '@/hoc/ProtectedRoute';
import { MoreVert } from "@mui/icons-material";

import EmployeeCard from '@/components/EmploComponent/EmployeeCard';
import GenericTable, { Column } from '@/components/Table';
import Link from 'next/link';
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import EmployeeSearchFilter from '@/components/EmploComponent/EmployeeSearchFilter';
import Image from 'next/image';

interface Employee {
  employeeName: string;
  gender: string;
  role: string;
  phoneNumber: string;
  salary: string;
  dot: string;
}

const employees: Employee[] = [
  {
    employeeName: 'Paul',
    gender: 'Male',
    role: 'Male',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Mary',
    gender: 'Female',
    role: 'Female',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Paul',
    gender: 'Male',
    role: 'Male',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Mary',
    gender: 'Female',
    role: 'Female',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Paul',
    gender: 'Male',
    role: 'Male',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Mary',
    gender: 'Female',
    role: 'Female',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Paul',
    gender: 'Male',
    role: 'Male',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
  {
    employeeName: 'Mary',
    gender: 'Female',
    role: 'Female',
    phoneNumber: '091234545O',
    salary: '50000',
    dot: '...',
  },
];

const columns: Column<Employee>[] = [
  { 
    title: 'Name', 
    field: 'employeeName' ,
    render: (row) =>
    <div className="flex gap-3 items-center">
        <Image
          src="/icons/avatar-icon.svg"
          alt="Staff 4"
          width={32}
          height={32}
          objectFit="cover"
        />
        <div>{row.employeeName}</div>
      </div>,

  },
  { title: 'Gender', field: 'gender' },
  {
    title: 'Role',
    field: 'role',
  },
  { title: 'Phone number', field: 'phoneNumber' },
  { title: 'Salary',
    field: 'salary',
  },
  { title: ' ',
    field: 'dot',
    render: (row) => (
      <MoreVert/>
    )
  },
];


const Header = () => {
  return (
    <div className={styles.header}>
        <EmployeeSearchFilter />
        
    </div>
  );
};



const EmployeeTable = () => {
  return (
    <>
        <EmployeeSearchFilter />
    <GenericTable rows={employees} columns={columns} rowsPerPage={5} headColor = '#002F49'/>
    </>
  );
};




const ViewEmployee = () => {
  const dispatch = useAppDispatch();
     useEffect(()=>{
      dispatch(setActivePage({active:"view-employees", parentNav: "employees"}));
       
     })
  return (
  
    <div className={styles.container}>
      <div className="flex justify-between">
  <div className="w-1/4 px-2">
    <EmployeeCard title="Total Employee" value={50} />
  </div>
  <div className="w-1/4 gap-2">
    <EmployeeCard title="Teaching Staff" value={200} />
  </div>
  <div className="w-1/4 px-2">
    <EmployeeCard title="Non Teaching Staff" value={50} />
  </div>
  <div className="w-1/4 px-2">
    <EmployeeCard title="Total Salaries" value={50000} />
  </div>
</div>

        <EmployeeTable/>
    </div>
)};

export default ViewEmployee;