import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Link from "next/link";
import styles from '@/styles/ClassTable.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    backgroundColor: "#002f49",
    color: "white", // Set header text color to blue
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Section {
  name: string;
  classes: string[];
}

export default function Home() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const sections: Section[] = [
    { name: "Kindergarten", classes: ["Creche", "Kindergarten 1", "Kindergarten 2"] },
    { name: "Nursery", classes: ["Nursery 1", "Nursery 2"] },
    { name: "Primary", classes: ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"] },
  ];

  const secondarySections: Section[] = [
    { name: "Junior secondary", classes: ["JSS 1A", "JSS 1B", "JSS 1C"] },
    { name: "Senior secondary", classes: ["SSS 1A", "SSS 2A", "SSS 3A"] },
  ];

  const renderTable = (classes: string[]) => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell>Class Teacher</StyledTableCell>
            <StyledTableCell>Class Population</StyledTableCell>
            <StyledTableCell>Payments</StyledTableCell>
            <StyledTableCell>Arrow</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((className, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{className}</StyledTableCell>
              <StyledTableCell>Mary Adebowale</StyledTableCell>
              <StyledTableCell>119 students</StyledTableCell>
              <StyledTableCell>
                <Button variant="text">Fully Paid</Button>
              </StyledTableCell>
              <StyledTableCell>
                <Link href="#">View</Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ padding: 4 }}>
        <div className={styles.tabContainer}
        >
            <div
            className={`${styles.tab} ${tabValue === 0 ? styles.activeTab : ''}`}
            onClick={()=>handleChange(0)}
          >Primary</div>
            <div
            className={`${styles.tab} ${tabValue === 1 ? styles.activeTab : ''}`}
            onClick={()=>handleChange(1)}
            >Secondary</div>
        </div>
  {tabValue === 0 && (
    <Box>
      {sections.map((section, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            {section.name}
          </Typography>
          {renderTable(section.classes)}
        </Box>
      ))}
    </Box>
  )}
  {tabValue === 1 && (
    <Box>
      {secondarySections.map((section, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            {section.name}
          </Typography>
          {renderTable(section.classes)}
        </Box>
      ))}
    </Box>
  )}
    </Box>
  );
}
