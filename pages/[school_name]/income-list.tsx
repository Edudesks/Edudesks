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
        <p className="text-[var(--primary-text-color)] font-normal text-lg">{row.date}</p>
        <p className="text-[var(--grey)]">{row.time}</p>
      </div>
    ),
  },
];

const IncomeList = () => {
  return (
    <div>
      <CircularChart />
      <DashboardTable />
      <LineGraphCard />
    </div>
  );
};

export default IncomeList;
