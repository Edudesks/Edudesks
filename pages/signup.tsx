import AuthentificationLogo from "@/components/AuthentificationLogo";
import "../app/globals.css";
import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const signUp = () => {
  return (
    <>
      <div className={`${openSans.className} flex flex-col lg:flex-row justify-between h-screen`}>
        {/* -------- left half of signup page -------- */}
        <div className="flex flex-col align-top gap-[1.34125rem] lg:gap-[8.9375rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-[30px] max-h-[24.5625rem] lg:max-h-full">
          <AuthentificationLogo />
          <div className="w-[16.625rem] lg:w-[33.6875rem] self-center">
            <Image
              src={"/loginIcon.svg"}
              alt="login image"
              width={539}
              height={539}
            />
          </div>
        </div>
        {/* -------- form input of signup page -------- */}
        <div>
          <div>
            <h2
              className={`text-[var-primary-text-color] text-4xl lg:text-[2.5rem] font-bold leading-normal`}
            >
              Create an account
            </h2>
            <p className="text-xl leading-5">
              Already have an account?&nbsp;<Link href={"/login"}>Login</Link>
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default signUp;
