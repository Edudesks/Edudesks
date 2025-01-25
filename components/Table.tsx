import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, TableFooter, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';





import MobileTableHistory from '@/components/MobileTable';
import Image from 'next/image';
import styles from '@/styles/MobileTable.module.css';
import StatusButton from '@/components/DashboardComponent/StatusButton';

type TableDataStatus = 'Received' | 'Pending' | 'Paid';

interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  isPositiveChange: boolean;
  status: TableDataStatus;
}

const tabledatas: Transaction[] = [
  { id: 1, title: 'School fees', isPositiveChange: true, date: 'Fri, 24th May', amount: 100000, status: 'Received' },
  { id: 2, title: 'Sales of Textbook', isPositiveChange: true, date: 'Fri, 24th May', amount: 100000, status: 'Received' },
  { id: 3, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Pending' },
  { id: 4, title: 'Salaries', isPositiveChange: false, date: 'Fri, 24th May', amount: 100000, status: 'Paid' },
];

const MobileTable = () => {
  return (
    <MobileTableHistory
      data={tabledatas}
      renderRow={(transaction) => (
        <div className={`${styles.transactionItem} ${styles[transaction.status.toLowerCase()]}`}>
          <div
            className={`${styles.iconStatus} ${
              transaction.status === 'Received'
                ? styles.received
                : transaction.status === 'Pending'
                ? styles.pending
                : styles.paid
            }`}
          >
            <Image
              src={'/icons/transaction-icon.svg'}
              alt={'transaction-icon'}
              width={18}
              height={18}
            />
          </div>
          <div className={styles.transactionDetails}>
            <span className={styles.transactionTitle}>{transaction.title}</span>
            <span className={styles.transactionDate}>{transaction.date}</span>
          </div>
          <div className={styles.transactionAmount}>
            <div className={styles.transactionAmountText}>
              <span>₦{transaction.amount.toFixed(2)}</span>
              <Image
                src={
                  transaction.isPositiveChange
                    ? '/icons/up-rate.svg'
                    : '/icons/down-rate.svg'
                }
                alt={
                  transaction.isPositiveChange ? 'up arrow' : 'down arrow'
                }
                width={18}
                height={18}
                style={{ marginLeft: 8 }}
              />
            </div>
            <StatusButton type={transaction.status} />
          </div>
        </div>
      )}
    />
  );
};




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

export interface Column<T> {
  title: string;
  field: keyof T;
  render?: (row: T) => React.ReactNode;
}

export interface GenericTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  headColor: string;
  color?: string;
}

const GenericTable = <T,>({
  rows,
  columns,
  rowsPerPage = 5,
  headColor = '#002F49',
  color = "white"
}: GenericTableProps<T>) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const StyledHeadCell = styled(StyledTableCell)(({ theme }) => ({
    backgroundColor: headColor,
    fontWeight: 'bold',
    color: color,
  }));

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledHeadCell key={col.field.toString()}>{col.title}</StyledHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((col) => (
                <StyledTableCell key={col.field.toString()}>
                  {col.render ? col.render(row) : (row[col.field] as React.ReactNode) || ''}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton
                  onClick={() => handleChangePage(page - 1)}
                  disabled={page === 0}
                  aria-label="previous page"
                >
                  <KeyboardArrowLeft />
                </IconButton>
                <Typography>
                  Page {page + 1} of {totalPages}
                </Typography>
                <IconButton
                  onClick={() => handleChangePage(page + 1)}
                  disabled={page >= totalPages - 1}
                  aria-label="next page"
                >
                  <KeyboardArrowRight />
                </IconButton>
              </Box>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default GenericTable;
