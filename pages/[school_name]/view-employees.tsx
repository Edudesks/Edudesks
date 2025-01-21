import React, { useEffect, useState } from 'react';
import styles from '@/styles/Class.module.css';
import withProtectedRoute from '@/hoc/ProtectedRoute';
import { MoreVert } from "@mui/icons-material";

import EmployeeCard from '@/components/EmployeeComponent/EmployeeCard';
import GenericTable, { Column } from '@/components/Table';
import Link from 'next/link';
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import EmployeeSearchFilter from '@/components/EmployeeComponent/EmployeeSearchFilter';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useRouter } from 'next/router';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { IconButton, MenuItem } from '@mui/material';
import { makeApiCall } from '@/utils/api';




const DropDown: React.FC<{row: Employee}> = ({row}) => {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { school_name } = router.query; // Extract school_name from the URL
    const [rowsPerPage] = useState(5); // Fixed rows per page as per initial code
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [currentRow, setCurrentRow] = useState<Employee | null>(null);
  
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>, row:Employee) => {
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
                    <MoreVert/>
                  </IconButton>
                  {menuAnchorEl && (
  <ClickAwayListener onClickAway={handleMenuClose}>
    <Card
      sx={{
        position: 'absolute',
        top: menuAnchorEl.getBoundingClientRect().bottom -10,
        left: menuAnchorEl.getBoundingClientRect().left -80,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
        zIndex: 1300, // Same as MUI's Popover to ensure it appears on top
      }}
    >
      <CardContent>
        <MenuItem 
        sx={{
        fontSize: "15px",
        }}
        onClick={()=> router.push(`/${school_name}/employee-profile`)}>View Employee</MenuItem>
        <MenuItem 
        sx={{
        fontSize: "15px",
        }}
        onClick={()=> router.push(`/${school_name}/edit-employee`)}>Edit Employee</MenuItem>
      </CardContent>
    </Card>
  </ClickAwayListener>
)}</>
    </div>
  )
}


type EmployeeData = {
  _id: string;
  personal: {
      otherName: string;
      lastName: string;
      gender: ("Male" | "Female")[];
      expectedSalary: string
  };
  position: {
      role: string
  };
  contact: {
      phoneNumber: number
  };
  supportingDocuments: {
      profilePicture: string;
  };
  category: string
}

interface Employee {
  employeeName: string;
  gender: string;
  role: string;
  phoneNumber: string;
  salary: string;
  dot: string;
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
      
     <DropDown row={row}/>
    )
  },
];




const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await makeApiCall("GET", "/employee");

        // Assuming response.payload.employee.employees contains the array of EmployeeData
        const apiEmployees: EmployeeData[] = response.payload.employee.employees;

        // Map API data to the Employee format
        const transformedEmployees: Employee[] = apiEmployees.map((emp) => ({
          employeeName: `${emp.personal.otherName} ${emp.personal.lastName}`,
          gender: emp.personal.gender[0], // Assuming the first gender entry is relevant
          role: emp.position.role,
          phoneNumber: emp.contact.phoneNumber.toString(), // Convert to string
          salary: emp.personal.expectedSalary,
          dot: "", // Placeholder if `dot` is not part of API data
        }));

        setEmployees(transformedEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <EmployeeSearchFilter />
      <GenericTable
        rows={employees}
        columns={columns}
        rowsPerPage={5}
        headColor="#002F49"
      />
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

export default ViewEmployee