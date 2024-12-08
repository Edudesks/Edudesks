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

// Generic type for rows
export interface Column<T> {
  title: string;
  field: keyof T;
  render?: (row: T) => React.ReactNode; // Custom render function for a column
}

export interface GenericTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  headColor : string;
}

// Generic Table Component
const GenericTable = <T,>({
  rows,
  columns,
  rowsPerPage = 5,
  headColor = '#002F49'
}: GenericTableProps<T>) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const StyledHeadCell = styled(StyledTableCell)(({ theme }) => ({
    backgroundColor: headColor,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  }));
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledHeadCell key={col.field.toString()}>{col.title}</StyledHeadCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((col) => (
                <StyledTableCell key={col.field.toString()}>
                  {col.render ? col.render(row) : row[col.field]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>

        {/* Table Footer */}
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
