import { FiSearch } from "react-icons/fi";
import { inter, openSans } from "@/app/fonts/fonts";
import React, { useState } from "react";
import WalletTransactionAllHistory from "./WalletTransactionAllHistory";
import WalletTransactionDepositComponent from "./WalletTransactionHistoryDeposit";
import WalletTransactionWithDrawComponent from "./WalletTransactionHistoryWithDraw";

export default function TransactionComponentHistory() {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <div className="bg-[white] border border-[var(--border)] w-[440px] px-[15px] py-[25px] rounded-[10px]">
                <section className={`${openSans.className} flex flex-col gap-4`}>
                    <h4 className="text-[20px] font-[600]">Transaction History</h4>
                    <div className="flex items-center justify-between border-b border-b-[var(--border)] pb-2">
                        <div className="flex items-center gap-3 text-[14px] text-[var(--grey)]">
                            <button
                                onClick={() => handleTabChange("all")}
                                className={`tab-button ${selectedTab === "all" ? "text-[var(--secondary)] border-b-2 border-b-[var(--secondary)]" : ""}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => handleTabChange("deposit")}
                                className={`tab-button ${selectedTab === "deposit" ? "text-[var(--secondary)] border-b-2 border-b-[var(--secondary)]" : ""}`}
                            >
                                All Deposit
                            </button>
                            <button
                                onClick={() => handleTabChange("withdraw")}
                                className={`tab-button ${selectedTab === "withdraw" ? "text-[var(--secondary)] border-b-2 border-b-[var(--secondary)]" : ""}`}
                            >
                                All Withdrawal
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiSearch className="text-[20px]"/>
                            <input type="text" placeholder="Search date" className="w-[88px] text-[#5A5959] placeholder:text-[#5A5959] text-[14px] p-1" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="">
                        {selectedTab === "all" && <WalletTransactionAllHistory />}
                    </div>
                </section>

                <div className="">
                    {selectedTab === "deposit" && <WalletTransactionDepositComponent />}
                </div>

                <div className="">
                    {selectedTab === "withdraw" && <WalletTransactionWithDrawComponent />}
                </div>
            </div>
        </>
    );
}
