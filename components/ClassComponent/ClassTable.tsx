import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchClassesByCategory } from "@/store/slices/classSlice"; 
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
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import ProgressBar from "@/components/PaymentProgress";
import Link from "next/link";
import styles from "@/styles/ClassTable.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    backgroundColor: "#002f49",
    fontSize: 12,
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
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

export default function Home() {
  const [tabValue, setTabValue] = useState<number>(0);
  const router = useRouter();
  const { school_name } = router.query;
  const dispatch = useAppDispatch();

  // Fetch classes from Redux store
  const { classes, isLoading: loading, error } = useAppSelector((state) => state.class);

  useEffect(() => {
    const category = tabValue === 0 ? "primary" : "secondary";
    dispatch(fetchClassesByCategory(category));
  }, [tabValue, dispatch]);

  const handleChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const renderTable = (classes: any[]) => (
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
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <CircularProgress size={20} />
              </TableCell>
            </TableRow>
          ) : error ? (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ color: "red" }}>
                {error}
              </TableCell>
            </TableRow>
          ) : (
            classes.map((classItem, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{classItem.className}</StyledTableCell>
                <StyledTableCell>{classItem.classTeacher || "N/A"}</StyledTableCell>
                <StyledTableCell>{classItem.totalStudents }</StyledTableCell>
                <StyledTableCell>
                  <Button sx={{ fontSize: 10, paddingLeft: 0 }} variant="text">
                    {classItem.paymentStatus || "Not Available"}
                  </Button>
                  <ProgressBar progress={classItem.progress || 0} />
                </StyledTableCell>
                <StyledTableCell>
                  <Link href={`/${school_name}/class/${classItem.id}`}>View</Link>
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ paddingRight: 3 }}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${tabValue === 0 ? styles.activeTab : ""}`}
          onClick={() => handleChange(0)}
        >
          Primary
        </div>
        <div
          className={`${styles.tab} ${tabValue === 1 ? styles.activeTab : ""}`}
          onClick={() => handleChange(1)}
        >
          Secondary
        </div>
      </div>

      <Box>{renderTable(classes)}</Box>
    </Box>
  );
}
