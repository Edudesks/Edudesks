import { useState, useEffect} from "react";
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
import { FaSquareCheck} from "react-icons/fa6";
import { inter, openSans } from "@/app/fonts/fonts";
import { IoIosArrowBack, IoIosArrowRoundUp} from "react-icons/io";
import { GrMoreVertical } from "react-icons/gr";
import { setActivePage } from "@/store/slices/sidebarSlice";
import { useAppDispatch } from "@/store/hooks";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontWeight: "500",
      backgroundColor: "#002f49",
      color: "white",
      fontFamily: openSans.className,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
      fontFamily: openSans.className,
    },
  }));
  
  const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontWeight: "bold",
      backgroundColor: theme.palette.action.hover,
      fontFamily: openSans.className,
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontFamily: openSans.className,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  interface TableValue {
    date: JSX.Element;
    category: JSX.Element;
    amount: JSX.Element;
    paymentMethod: JSX.Element;
    status: JSX.Element;
    verticalIcon: JSX.Element;
  }
  export default function StudentHistory (){
          const dispatch = useAppDispatch();
    
    useEffect(()=>{
              dispatch(setActivePage({active:"student-history", parentNav: "student"})); 
            })
    const tableValue: TableValue[] = [
      // one
        { 
            date: (
            <div className = 'flex  flex-col gap-3'>
              <h3 className="text-[18px] text-[black]">Fri, 24th May</h3>
              <p className="text-[16px] text-[var(--grey)]">10:00pm</p>
            </div>
          ),
          category: <p className="text-[18px] text-[black]">School fees</p>,
          amount: <div className="flex justify-between items-center">
            <p className="text-[18px] text-[black]">20000.00</p>
            <IoIosArrowRoundUp className="text-[var(--success)]"/>
          </div>,
          paymentMethod: <p className="text-[18px] text-[black]">Cash</p>,
          status: <button className="border border-[var(--success)] text-[var(--success)] flex  gap-2 w-[126px] h-[36px] p-[10px] text-[12px] bg-[#a2f8d4ad]"><FaSquareCheck /> Received</button>,
         verticalIcon:<div>
          <GrMoreVertical className="text-[18px] text-[black]"/>
         </div>
        },
      
        // two
        { 
          date: (
          <div className = 'flex  flex-col gap-3'>
            <h3 className="text-[18px] text-[black]">Mon, 27th May</h3>
            <p className="text-[16px] text-[var(--grey)]">11:00pm</p>
          </div>
        ),
        category: <p className="text-[18px] text-[black]">School fees</p>,
        amount: <div className="flex justify-between items-center">
          <p className="text-[18px] text-[black]">5000.00</p>
          <IoIosArrowRoundUp className="text-[var(--success)]"/>
        </div>,
        paymentMethod: <p className="text-[18px] text-[black]">Bank transfer </p>,
        status: <button className="border border-[var(--success)] text-[var(--success)] flex  gap-2 w-[126px] h-[36px] p-[10px] text-[12px] bg-[#a2f8d4ad]"><FaSquareCheck /> Received</button>,
       verticalIcon:<div>
        <GrMoreVertical className="text-[18px] text-[black]"/>
       </div>
      },

      // three
      { 
        date: (
        <div className = 'flex  flex-col gap-3'>
          <h3 className="text-[18px] text-[black]">Fri, 24th May</h3>
          <p className="text-[16px] text-[var(--grey)]">10:00pm</p>
        </div>
      ),
      category: <p className="text-[18px] text-[black]">School fees</p>,
      amount: <div className="flex justify-between items-center">
        <p className="text-[18px] text-[black]">100000.00</p>
        <IoIosArrowRoundUp className="text-[var(--success)]"/>
      </div>,
      paymentMethod: <p className="text-[18px] text-[black]">Bank transfer</p>,
      status: <button className="border border-[var(--success)] text-[var(--success)] flex  gap-2 w-[126px] h-[36px] p-[10px] text-[12px] bg-[#a2f8d4ad]"><FaSquareCheck /> Received</button>,
     verticalIcon:<div>
      <GrMoreVertical className="text-[18px] text-[black]"/>
     </div>
    },
      ]


    return (
      <>
        <div
          className={`${openSans.className} mt-[2rem] pb-[3rem] pl-4 pr-4 md:pl-4 md:pr-[5rem]`}
        >
          {/* profile section */}
          <div
            className={`${openSans.className} flex flex-col gap-[2.5rem] w-full md:border-none border-b-[var(--border)] border-b-[1px] pb-8`}
          >
            <button className="flex items-center gap-[10px] bg-transparent md:bg-[var(--primary)] text-[16px] md:text-[14px] font-bold text-[black] md:text-[white] w-[169px] h-[42px] rounded-[22px] justify-start md:justify-center border-none md:hover:bg-[#022335]">
              <IoIosArrowBack />
              Back
            </button>

            <div className="w-[543px] md:block hidden">
              <h2 className="font-bold text-[33px] text-[var(--secondary)] leading-[36px]">
                Student Fees Payment History
              </h2>
            </div>

            <div
              className={`flex items-start justify-between flex-col gap-4 md:flex-row`}
            >
              <div className="flex items-center gap-[18px] w-[416px} md:ml-0 ml-5">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src={"/student_profile_icon.svg"}
                    alt="employees icon"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[black] font-[500] text-[24px] leading-[42px]">
                    Anita Nwosu
                  </p>
                  <p className="text-[17px] leading-[21px] text-[var(--grey)]">
                    Assigned teacher: Mr Taiwo
                  </p>
                </div>
              </div>

              <div className="flex w-[452px] flex-col gap-[24px]">
                <h2 className="text-[24px] font-bold text-[black]">Summary</h2>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] text-[var(--grey)]">
                    Total Fees Paid
                  </p>
                  <p className="text-[18px] text-[black]">N125,000.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] text-[var(--grey)]">
                    Outstanding Balance
                  </p>
                  <p className="text-[18px] text-[black]">N125,000.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* table history */}
          <Box sx={{ width: "100%", marginTop: "3rem" }}>
          <TableContainer className={'md:block hidden'}>
  <Table sx={{ width: "100%" }} aria-label="customized table">
    <TableHead>
      <TableRow>
        <StyledTableCell
          colSpan={6}
          className={`${openSans.className} text-[24px] leading-[28px]`}
        >
          Payment History
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell2>Date</StyledTableCell2>
        <StyledTableCell2>Category</StyledTableCell2>
        <StyledTableCell2>Amount</StyledTableCell2>
        <StyledTableCell2>Payment Method</StyledTableCell2>
        <StyledTableCell2>Status</StyledTableCell2>
        <StyledTableCell2></StyledTableCell2>
      </TableRow>
    </TableHead>
    <TableBody>
      {tableValue.map((row, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell>{row.date}</StyledTableCell>
          <StyledTableCell>{row.category}</StyledTableCell>
          <StyledTableCell>{row.amount}</StyledTableCell>
          <StyledTableCell>{row.paymentMethod}</StyledTableCell>
          <StyledTableCell>{row.status}</StyledTableCell>
          <StyledTableCell>{row.verticalIcon}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


            <div className="md:hidden flex flex-col">
              <h2 className="text-[24px] leading-[28px] font-[500]">Payment history</h2>

              <section className="flex flex-col gap-4 mt-3">
                {/* 1 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 2 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 3 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 4 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 5 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 6 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 7 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>

                {/* 8 */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <button className="bg-[var(--success)] w-[49px] h-[49px] rounded-[30px] p-[12px] flex items-center justify-center">
                      <Image
                        src="/icons/money_receive.svg"
                        alt="money receive"
                        width={20}
                        height={20}
                      />
                    </button>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] leading-[18px]">School fees</h3>
                      <p className="text-[14px] text-[#9FA1A3]">Fri, 24th May -  10:00pm</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[18px] text-[var(--grey-700)]">+20000</h3>
                    <p className="text-[14px] text-[var(--success)]">Received</p>
                  </div>
                </section>
              </section>
            </div>
          </Box>
        </div>
      </>
    );
  }