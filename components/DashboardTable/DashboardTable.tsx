// components/DashboardTable.tsx

import React, { useState, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Box, IconButton, TableFooter, Typography, Popover, TextField } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import StatusButton from '../StatusButton';
import TransactionReceiptModal from '../TransactionReceiptModal'; // Import the modal
import '@/app/globals.css';
import styles from '@/styles/DashboardTable.module.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Transaction {
  id: string;
  name: React.ReactNode;
  category: string;
  amount: number;
  paymentMethod: string;
  status: React.ReactNode;
  isPositiveChange: boolean;
}

function createData(
  id: string,
  name: React.ReactNode,
  category: string,
  amount: number,
  paymentMethod: string,
  status: React.ReactNode,
  isPositiveChange: boolean
): Transaction {
  return { id, name, category, amount, paymentMethod, status, isPositiveChange };
}

const rows: Transaction[] = [
  createData("one", <><h3>Fri, 24th May</h3><p>10:00pm</p></>, 'School fees', 100000, 'Cash', <StatusButton type="Received" />, true),
  createData("two", <><h3>Fri, 24th May</h3><p>10:00pm</p></>, 'Sale of Textbook', 100000, 'Bank transfer', <StatusButton type="Pending" />, true),
  createData("three", <><h3>Fri, 24th May</h3><p>10:00pm</p></>, 'Salary', 100000, 'Bank transfer', <StatusButton type="Paid" />, false),
  createData("four", <><h3>Fri, 24th May</h3><p>10:00pm</p></>, 'School fees', 100000, 'Cash', <StatusButton type="Received" />, true),
  createData("five", <><h3>Fri, 24th May</h3><p>10:00pm</p></>, 'Sale of Textbook', 100000, 'Bank transfer', <StatusButton type="Pending" />, true),
];

const DashboardTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handleDateRangeClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'date-picker-popover' : undefined;

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Transaction History</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <Image src={"/icons/search-icon.svg"} alt="search icon" width={20} height={20} />
            <input type="text" placeholder="Search for keyword" className={styles.searchInput} />
          </div>
          <button aria-describedby={id} onClick={handleDateRangeClick} className={styles.dateRangeButton}>
            <Image src={"/icons/calendar.svg"} alt="calendar icon" width={20} height={20} />
            <span className={styles.dateRangeText}>Date range</span>
          </button>
          <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Box p={2}>
              {/* <DatePicker label="Select Date" value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)} renderInput={(params) => <TextField {...params} />} /> */}
            </Box>
          </Popover>
        </div>
      </div>

      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Payment Method</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow key={row.id} onClick={() => handleRowClick(row)} className={styles.tableRow}>
                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>
                  <Box display="flex" alignItems="center">
                    ₦{row.amount.toLocaleString()}
                    <Image
                      src={row.isPositiveChange ? "/icons/up-rate.svg" : "/icons/down-rate.svg"}
                      alt={row.isPositiveChange ? "up arrow" : "down arrow"}
                      width={18}
                      height={18}
                      style={{ marginLeft: 8 }}
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell>{row.paymentMethod}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <Box className={styles.tableFooter}>
                  <IconButton onClick={() => handleChangePage(page - 1)} disabled={page === 0} aria-label="previous page" className={`${styles.pageButton} ${page === 0 ? styles.disabled : ''}`}>
                    <KeyboardArrowLeft />
                    <Typography className={styles.paginationText}>Previous</Typography>
                  </IconButton>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Typography
                      key={index}
                      onClick={() => handleChangePage(index)}
                      className={`${styles.pageNumber} ${index === page ? styles.activePage : ''}`}
                    >
                      {index + 1}
                    </Typography>
                  ))}
                  <IconButton onClick={() => handleChangePage(page + 1)} disabled={page >= totalPages - 1} aria-label="next page" className={`${styles.pageButton} ${page >= totalPages - 1 ? styles.disabled : ''}`}>
                    <Typography className={styles.paginationText}>Next</Typography>
                    <KeyboardArrowRight />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {selectedTransaction && (
        <TransactionReceiptModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
};

export default DashboardTable;
