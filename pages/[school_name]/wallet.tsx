import WalletBalanceComponent from "@/components/WalletComponent/WalletBalance";
import { useEffect } from "react";
import { openSans } from "@/app/fonts/fonts";
import WalletChartComponent from "@/components/WalletComponent/WalletChart";
import { useAppDispatch } from "@/store/hooks";
import { setActivePage } from "@/store/slices/sidebarSlice";
import TransactionComponentHistory from "@/components/WalletComponent/WalletTransactionHistory";
// import React, { useEffect, useState } from "react";
// import CreatePinComponent from "@/components/WalletComponent/WalletModal/CreatePin";
// import CreatePinComponent from "./WalletModal/CreatePin";
export default function WalletComponent() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(setActivePage({active:"wallet", parentNav: "wallet"})); 
    })
    return (
        <>
            <div className={`${openSans.className} my-5 mx-3`}>
                <h2 className={`${openSans.className} text-[32px] text-[var(--secondary)] mb-4`}>Wallet</h2>

                <div className="flex items-start xl:gap-8 gap-2 lg:flex-row flex-col w-full">
                    <div className="flex flex-col gap-8 mb-2 w-full lg:w-[90%] xl:w-full">
                        <WalletBalanceComponent />
                        <WalletChartComponent />
                    </div>

                    <div className="w-full">
                        <TransactionComponentHistory />
                    </div>
                </div>
            </div>
        </>
    )
}