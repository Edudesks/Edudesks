import WalletBalanceComponent from "@/components/WalletComponent/WalletBalance";
import { inter, openSans } from "@/app/fonts/fonts";
import WalletChartComponent from "@/components/WalletComponent/WalletChart";
import TransactionComponentHistory from "@/components/WalletComponent/WalletTransactionHistory";
export default function WalletComponent (){
    return(
        <>
            <div className={`${openSans.className} my-5 mx-8`}>
                <h2 className={`${openSans.className} text-[32px] text-[var(--secondary)] mb-4`}>Wallet</h2>

                <div className="flex items-start gap-8">
                <div className="flex flex-col gap-8 mb-2">
                <WalletBalanceComponent/>
                <WalletChartComponent/>
                </div>

            <div className="">
                <TransactionComponentHistory/>
            </div>
                </div>
            </div>
        </>
    )
}