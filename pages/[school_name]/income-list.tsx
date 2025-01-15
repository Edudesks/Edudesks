import CircularChart from "@/components/DashboardComponent/CircularChart";
import DashboardTable from "@/components/DashboardComponent/DashboardTable";
import TransactionHistory from "@/components/DashboardComponent/TransactionHistory";
import LineGraphCard from "@/components/LineGraphCard";
import { Column } from "@/components/Table";
import React from "react";

interface Income {
  date: string;
  time: string;
  description: string;
  requestee: string;
  amount: number;
  paymentMethod: string;
  status: "Pending" | "Received" | "Paid";
}

const data = [
    329034, 101162, 325001, 428094, 317322, 247398, 362087, 297364,
    416401, 349249, 43280, 281720,
  ] // Y-axis data for Line 2

const income: Income[] = [
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Nwosu Anita",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Class Cleaner",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Nwosu Anita",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Adewuyi Taiwo",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Head Mistress",
    amount: 100000,
    paymentMethod: "Bank transfer",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Adewuyi Taiwo",
    amount: 100000,
    paymentMethod: "Bank Transfer",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    date: "Fri 24th May",
    time: "10:00pm",
    description: "School fees",
    requestee: "Principal",
    amount: 100000,
    paymentMethod: "Bank Transfer",
    status: "Paid",
  },
];

const columns: Column<Income>[] = [
  {
    title: "Date",
    field: "date",
    render: (row) => (
      <div className="flex flex-col items-start">
        <p className="text-[var(--primary-text-color)] font-normal text-lg">
          {row.date}
        </p>
        <p className="text-[var(--grey)]">{row.time}</p>
      </div>
    ),
  },
];

const IncomeList = () => {
  return (
    <div className="w-full px-[18px] py-[30px] lg:pl-[31px] lg:pt-[29px] lg:pr-[85px] lg:pb-8 lg:bg-[#F9F9F9]">
      {/* -------- main content -------- */}
      <div className="flex flex-col gap-8 lg:gap-[18px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
          <div className="lg:w-[60%]">
            <LineGraphCard
              title={"Total Income"}
              amount={""}
              percentageChange={0}
              changeLabel={""}
              data={data}
              backgroundColors={[]}
              icon={""}
              barColor={""}
            />
          </div>
          <CircularChart />
        </div>
        <DashboardTable />
      </div>
    </div>
  );
};

export default IncomeList;
