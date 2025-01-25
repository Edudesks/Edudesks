import React, { useEffect, useState } from 'react';
import styles from '@/styles/Class.module.css';
import { MoreVert } from "@mui/icons-material";

import EmployeeCard from '@/components/EmployeeComponent/EmployeeCard';
import GenericTable, { Column } from '@/components/Table';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import EmployeeSearchFilter from '@/components/EmployeeComponent/EmployeeSearchFilter';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useRouter } from 'next/router';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { IconButton, MenuItem } from '@mui/material';
import { EmployeeData, ViewEmployee } from '@/types/employee';
import { fetchAllEmployees } from '@/store/slices/employeeSlice';




const DropDown: React.FC<{ row: ViewEmployee }> = ({ row }) => {
  const router = useRouter();
  const { school_name } = router.query; 
  const [rowsPerPage] = useState(5); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [currentRow, setCurrentRow] = useState<ViewEmployee | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, row: ViewEmployee) => {
    setMenuAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setCurrentRow(null);
  };
  return (
    <div>
      <><IconButton onClick={(e) => handleMenuClick(e, row)}>
        <MoreVert />
      </IconButton>
        {menuAnchorEl && (
          <ClickAwayListener onClickAway={handleMenuClose}>
            <Card
              sx={{
                position: 'absolute',
                top: menuAnchorEl.getBoundingClientRect().bottom - 10,
                left: menuAnchorEl.getBoundingClientRect().left - 80,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
                zIndex: 1300, // Same as MUI's Popover to ensure it appears on top
              }}
            >
              <CardContent>
                <MenuItem
                  sx={{
                    fontSize: "15px",
                  }}
                  onClick={() => router.push(`/${school_name}/employee-profile`)}>View Employee</MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "15px",
                  }}
                  onClick={() => router.push(`/${school_name}/edit-employee`)}>Edit Employee</MenuItem>
              </CardContent>
            </Card>
          </ClickAwayListener>
        )}</>
    </div>
  )
}

// const employees: Employee[] = [
//   {
//     employeeName: 'Paul',
//     gender: 'Male',
//     role: 'Male',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Mary',
//     gender: 'Female',
//     role: 'Female',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Paul',
//     gender: 'Male',
//     role: 'Male',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Mary',
//     gender: 'Female',
//     role: 'Female',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Paul',
//     gender: 'Male',
//     role: 'Male',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Mary',
//     gender: 'Female',
//     role: 'Female',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Paul',
//     gender: 'Male',
//     role: 'Male',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
//   {
//     employeeName: 'Mary',
//     gender: 'Female',
//     role: 'Female',
//     phoneNumber: '091234545O',
//     salary: '50000',
//     dot: '...',
//   },
// ];


const columns: Column<ViewEmployee>[] = [
  {
    title: 'Name',
    field: 'employeeName',
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
  {
    title: 'Salary',
    field: 'salary',
  },
  {
    title: ' ',
    field: 'dot',
    render: (row) => (
      <DropDown row={row} />
    )
  },
];




const EmployeeTable: React.FC<{employees: ViewEmployee[]}> = ({employees}) => {
 return (
    <>
      <EmployeeSearchFilter />
      <GenericTable
        rows={employees}
        columns={columns}
        rowsPerPage={5}
        headColor="#002F49"
        color="white"
      />
    </>
  );
};





const ViewEmployeePage = () => {
  const dispatch = useAppDispatch();
  const [transformedEmployees, setTransformedEmployees] = useState<ViewEmployee[]>([]);
  const { employees, isLoading } = useAppSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchAllEmployees());
    dispatch(setActivePage({ active: "view-employees", parentNav: "employees" }));
  }, [dispatch]);

  useEffect(() => {
    const transformed = employees.map((emp: any) => ({
      employeeName: `${emp.personal.otherName} ${emp.personal.lastName}`,
      gender: emp.personal.gender[0],
      role: emp.position.role,
      phoneNumber: emp.contact.phoneNumber.toString(),
      salary: emp.personal.expectedSalary,
      dot: "",
    }));
    setTransformedEmployees(transformed);
  }, [employees]);

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

      <EmployeeTable employees={transformedEmployees}/>
    </div>
  )
};

export default ViewEmployeePage