import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Link from "next/link";
import Image from "next/image";
import { TbSquareDotFilled } from "react-icons/tb";
import { FaSquareMinus, FaSquareCheck} from "react-icons/fa6";
import { inter, openSans } from "@/app/fonts/fonts";
import { useRouter } from 'next/router'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    backgroundColor: "#002f49",
    color: "white",
    fontFamily: openSans.className,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontFamily: openSans.className,
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

interface TableValue {
  profile: JSX.Element;
  studentID: JSX.Element;
  gender: JSX.Element;
  idClass: JSX.Element;
  schStatus: JSX.Element;
  guardianNum: JSX.Element;
  linkIt: JSX.Element;
}

export default function StudentTable() {
  const router = useRouter();
    const { school_name } = router.query;
  const tableValue: TableValue[] = [
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Joseph Olawole</p>
        </div>
      ),
      studentID: <p>A2-001</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 1A</p>,
      schStatus: <button className="border border-[var(--warning)] text-[var(--warning)] bg-[white] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px]"><TbSquareDotFilled /> Partly paid</button>,
      guardianNum: <p>08145678930</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Grace Adebayo</p>
        </div>
      ),
      studentID: <p>A2-002</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 1A</p>,
      schStatus: <button className="border border-[var(--success)] text-[var(--success)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#a2f8d4ad]"><FaSquareCheck /> Paid</button>,
      guardianNum: <p>08012345678</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Chuka Okafor</p>
        </div>
      ),
      studentID: <p>A2-003</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 1A</p>,
      schStatus: <button className="border border-[var(--redColor2)] text-[var(--redColor2)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#fd9b9bc7]"><FaSquareMinus /> Not paid</button>,
      guardianNum: <p>08123456789</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Uche Ibe</p>
        </div>
      ),
      studentID: <p>A2-004</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 1A</p>,
      schStatus: <button className="border border-[var(--warning)] text-[var(--warning)] bg-[white] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px]"><TbSquareDotFilled /> Partly paid</button>,
      guardianNum: <p>08098765432</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Mary Johnson</p>
        </div>
      ),
      studentID: <p>A2-005</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 1B</p>,
      schStatus: <button className="border border-[var(--success)] text-[var(--success)]  flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#a2f8d4ad]"><FaSquareCheck /> Paid</button>,
      guardianNum: <p>08111223344</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Solomon Adeyemi</p>
        </div>
      ),
      studentID: <p>A2-006</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 1B</p>,
      schStatus: <button className="border border-[var(--warning)] text-[var(--warning)] bg-[white] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px]"><TbSquareDotFilled /> Partly paid</button>,
      guardianNum: <p>08012340987</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Rachel Okoye</p>
        </div>
      ),
      studentID: <p>A2-007</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 1B</p>,
      schStatus: <button className="border border-[var(--redColor2)] text-[var(--redColor2)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#fd9b9bc7]"><FaSquareMinus /> Not paid</button>,
      guardianNum: <p>08055667788</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Adebayo Olatunji</p>
        </div>
      ),
      studentID: <p>A2-008</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 1B</p>,
      schStatus: <button className="border border-[var(--success)] text-[var(--success)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#a2f8d4ad]"><FaSquareCheck /> Paid</button>,
      guardianNum: <p>08122334455</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Shola Akinola</p>
        </div>
      ),
      studentID: <p>A2-009</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 2A</p>,
      schStatus: <button className="border border-[var(--warning)] text-[var(--warning)] bg-[white] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px]"><TbSquareDotFilled /> Partly paid</button>,
      guardianNum: <p>08099887766</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Femi Ajayi</p>
        </div>
      ),
      studentID: <p>A2-010</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 2A</p>,
      schStatus: <button className="border border-[var(--redColor2)] text-[var(--redColor2)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#fd9b9bc7]"><FaSquareMinus /> Not paid</button>,
      guardianNum: <p>08012309098</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>David Adebayo</p>
        </div>
      ),
      studentID: <p>A2-011</p>,
      gender: <p>Male</p>,
      idClass: <p>JSS 2A</p>,
      schStatus: <button className="border border-[var(--success)] text-[var(--success)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#a2f8d4ad]"><FaSquareCheck /> Paid</button>,
      guardianNum: <p>08123232323</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Olivia Adeola</p>
        </div>
      ),
      studentID: <p>A2-012</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 2B</p>,
      schStatus: <button className="border border-[var(--warning)] text-[var(--warning)] bg-[white] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px]"><TbSquareDotFilled /> Partly paid</button>,
      guardianNum: <p>08123450376</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
    { 
      profile: (
        <div className = 'flex items-center gap-3'>
          
          <div className='w-[30px] h-[30px]'>
            <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
          </div>
          <p>Victoria Ofo</p>
        </div>
      ),
      studentID: <p>A2-013</p>,
      gender: <p>Female</p>,
      idClass: <p>JSS 2B</p>,
      schStatus: <button className="border border-[var(--success)] text-[var(--success)] flex items-center gap-2 w-[126px] h-[36px] p-[10px] text-[16px] bg-[#a2f8d4ad]"><FaSquareCheck /> Paid</button>,
      guardianNum: <p>08034567891</p>,
      linkIt: <Link href={`/${school_name}/student-profile`} className="text-[var(--primary)] underline text-[14px]">View Profile</Link>
    },
  ];
  const [tableValues, setTableValues] = useState<any[]>([]); 

  const reshuffleData = () => {
    setTableValues((prev) => [...prev].sort(() => Math.random() - 0.5)); 
  };

  return (
    <Box sx={{ maxWidth: "100%", marginTop:'3rem' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow className={`${openSans.className}`}>
              <StyledTableCell className="text-[18px]">Profile</StyledTableCell>
              <StyledTableCell className="text-[18px]">Student ID</StyledTableCell>
              <StyledTableCell className="text-[18px]">Gender</StyledTableCell>
              <StyledTableCell className="text-[18px]">Class</StyledTableCell>
              <StyledTableCell className="text-[18px]">Sch.fees status</StyledTableCell>
              <StyledTableCell className="text-[18px]">Guardian Mobile no</StyledTableCell>
              <StyledTableCell className="text-[18px]"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableValue.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.profile}</StyledTableCell>
                <StyledTableCell>{row.studentID}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{row.idClass}</StyledTableCell>
                <StyledTableCell>{row.schStatus}</StyledTableCell>
                <StyledTableCell>{row.guardianNum}</StyledTableCell>
                <StyledTableCell>{row.linkIt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
