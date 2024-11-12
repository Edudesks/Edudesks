import {CheckmarkCircle02Icon} from "hugeicons-react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import Router from "next/router";
import { inter, openSans } from "@/app/fonts/fonts";
const ResetPassword: React.FC = () => {
    const router = Router;
    return (
        <div className={`${openSans.className} flex flex-col gap-[7rem] align-top pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem]`}>
            <AuthentificationLogo />
            
            <div className="flex flex-col justify-center items-center gap-[.6rem] sm:gap-[1rem]">
                <CheckmarkCircle02Icon size={80} className="text-[var(--primary-text-color)]"/>
                <h3 className="font-[700] text-[28px] sm:text-[32px] leading-[43.58px] text-center tracking-[.25px] text-[var(--primary-text-color)]">Password reset successfully</h3>
                <p className="font-[400] text-[16px] sm:text-[18px] leading-[22.86px] text-center text-[var(--primary-text-color)]">Log in to your account with your new password</p>
                <button
                className={`bg-[var(--primary)] text-[var(--secondary-text-color)]  w-[80%] sm:w-[25rem] mt-4 h-[50px] rounded-[33px] text-lg font-bold leading-5 px-2.5 py-[0.9375rem] hover:bg-[var(--secondary)] active:bg-[var(--secondary)]`}
                type="button"
                onClick={() => router.push("/login")} 
              >
                Log in
              </button>
            </div>
        </div>
    );
}

export default ResetPassword;
