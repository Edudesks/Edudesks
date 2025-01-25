import styles from '@/styles/DashboardTable.module.css';
import IncomeCircularChart from "@/components/IncomeComponent/IncomeCircularChart";
import LineGraphCard from "@/components/LineGraphCard";
import GenericTable, { Column } from "@/components/Table";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MoreVert } from "@mui/icons-material";
import { ViewIncome } from "@/types/income";
import Image from 'next/image';
import { Box, IconButton, MenuItem, Popover } from '@mui/material';
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { setActivePage } from '@/store/slices/sidebarSlice';
import { useAppDispatch } from '@/store/hooks';

const DropDown: React.FC<{ row: ViewIncome }> = ({ row }) => {
  const router = useRouter();
  const { school_name } = router.query; 
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [currentRow, setCurrentRow] = useState<ViewIncome | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, row: ViewIncome) => {
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

const incomes: ViewIncome[] = [
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "CCI ",
    requestee: "Laura",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
    dot: ""

  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Class Cleaner",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Nwosu Anita",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Adewuyi Taiwo",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Head Mistress",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Adewuyi Taiwo",
    amount: 100000,
    paymentMethod: "Bank Transfer",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
    dot: ""
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "Blah blah blah",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Bank Transfer",
    status: "Paid",
    dot: ""
  },
];

const incomeColumns: Column<ViewIncome>[] = [
  {
    title: "Date",
    field: "date",
    render: (row) => (
      <div>{row.date}</div>
    ),
  },
  {
    title: "Description",
    field: "description",
  },
  {
    title: "Requestee",
    field: "requestee",
    render: (row) => (
      <div className="flex gap-3 items-center">
        <Image
          src="/icons/avatar-icon.svg" // Use relevant icons
          alt={row.requestee}
          width={32}
          height={32}
          objectFit="cover"
        />
        <div>{row.requestee}</div>
      </div>
    ),
  },
  {
    title: "Amount",
    field: "amount",
    render: (row) => (
      <div className="text-green-600 font-bold">
        {row.amount.toLocaleString()} <span>&uarr;</span>
      </div>
    ),
  },
  {
    title: "Payment Method",
    field: "paymentMethod",
  },
  {
    title: "Status",
    field: "status",
    render: (row) => (
      <span
        className={`px-2 py-1 text-sm font-medium rounded ${
          row.status === "Received"
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    title: " ",
    field: "dot",
    render: (row) => <DropDown row={row} />,
  },
];

const IncomeTable: React.FC<{ incomes: ViewIncome[] }> = ({ incomes }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
    const handleDateRangeClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'date-picker-popover' : undefined;
  
  return (
    <div className={styles.container}>
    <div className={styles.header}>
        <h1>Income</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <Image src={"/icons/search-icon.svg"} alt="search icon" width={20} height={20} />
            <input
              type="text"
              placeholder="Search for keyword"
              className={styles.searchInput}
            />
          </div>
          <button
            aria-describedby={id}
            onClick={handleDateRangeClick}
            className={styles.dateRangeButton}
          >
            <Image src={"/icons/calendar.svg"} alt="calendar icon" width={20} height={20} />
            {/* <CalendarComponent /> */}

            <span className={styles.dateRangeText}>Date range</span>
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box p={2}>
            </Box>
          </Popover>
        </div>
      </div>
      <GenericTable
        rows={incomes}
        columns={incomeColumns}
        rowsPerPage={5}
        headColor="#fff"
        color="#000"
      />
    </div>
  );
};


const IncomeList = () => {
    const dispatch = useAppDispatch();
  
  const data = [
    329034, 101162, 325001, 428094, 317322, 247398, 362087, 297364, 416401,
    349249, 443280, 281720,
  ];
  const percentageDifference = data[data.length - 1] - data[data.length - 2];
  const percentageChange = (percentageDifference / data[data.length - 2]) * 100;

  const initialAmount = 0;
  const totalAmount = data.reduce((acc, curr) => acc + curr, initialAmount);

  const circularChartItems = [
    { name: "Tuition Fees", percentage: 67, amount: 234678, color: "#4B8BBE" },
    { name: "Donations", percentage: 23, amount: 134678, color: "#041822" },
    { name: "Other profit", percentage: 10, amount: 34678, color: "#E2E9F6" },
  ];

  const labels = circularChartItems.map((item) => item.name);
  const circularChartData = circularChartItems.map((item) => item.percentage);
  const circularChartBackgroundColors = circularChartItems.map(
    (item) => item.color
  );
  const circularTotalAmount = circularChartItems.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0);

    useEffect(() => {
        dispatch(setActivePage({ active: "monthly-income", parentNav: "income" }));
      }, [dispatch]);
  return (
    <div className="w-full px-[18px] py-[30px] lg:pl-[31px] lg:pt-[29px] lg:pr-[85px] lg:pb-8 lg:bg-[#F9F9F9]">
      {/* -------- main content -------- */}
      <div className="flex flex-col gap-8 lg:gap-[18px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
          <div className="lg:w-[60%]">
            <LineGraphCard
              title={"Total Income"}
              amount={`₦${totalAmount.toLocaleString()}`}
              percentageChange={percentageChange}
              data={data}
              backgroundColors={[]}
              barColor={"#4B8BBE"}
            />
          </div>
          <div className="lg:w-[40%]">
            <IncomeCircularChart
              label={labels}
              dataSet={circularChartData}
              backgroundColors={circularChartBackgroundColors}
              hoverBackgroundColors={circularChartBackgroundColors}
              totalAmount={circularTotalAmount}
              description={circularChartItems}
            />
          </div>
        </div>
        <IncomeTable incomes={incomes}/>
      </div>
    </div>
  );
};

export default IncomeList;
