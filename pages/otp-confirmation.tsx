import React from "react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import "../app/globals.css";
import Image from "next/image";
import Router from "next/router";

/**
 * TODO: nil
 */

const OtpConfirmation: React.FC = () => {
  const router = Router;
  return (
    <div className="flex flex-col items-center justify-center pt-[1.75rem] lg:pt-[2.75rem] px-[1.125rem] lg:pl-[5.625rem] text-[var(--primary-text-color)] h-screen relative">
      <div className="absolute top-0 left-0 pt-[1.75rem] lg:pt-[2.75rem] pl-[1.125rem] lg:pl-[5.625rem]">
        <AuthentificationLogo />
      </div>
      {/* -------- image and button -------- */}
      <div
        className={` lg:rounded-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:p-8 h-full max-h-[37.0625rem] w-full max-w-[41.3125rem] flex flex-col justify-center items-center lg:shadow-custom-lg`}
      >
        <div className="shadow-custom-lg lg:shadow-none">
          <Image
            src={"/images/confirmed-otp.svg"}
            alt="otp-confirmation"
            width={249}
            height={249}
          />
        </div>
        <div className="flex flex-col gap-[2.125rem] w-full max-w-[26.625rem] items-center justify-center">
          <h1 className={`font-bold text-[2.5rem] leading-snug`}>
            OTP Verified
          </h1>
          <button
            className={`bg-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)] w-full max-w-[26.625rem flex items-center justify-center`}
            type="button"
            onClick={() => router.push("/pricing-plan")}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpConfirmation;
