import Footer from "@/components/LandingPageComponents/Footer";
import Navbar from "@/components/LandingPageComponents/NavBar";
import React from "react";
import "../app/globals.css";
import { openSans } from "@/app/fonts/fonts";
import { CheckmarkCircle04Icon, ArrowRight02Icon } from "hugeicons-react";
import { useMediaQuery } from "@mui/material";
import Router from "next/router";
import Link from "next/link";

/**
 *
 * TODO: Functionality for monthly and annual payment
 * TODO: Form validation
 */

const PricingConfirmation = () => {
  const router = Router;
  const isSmallScreen = useMediaQuery("(min-width: 385px)"); // sm breakpoint
  const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // lg breakpoint

  const iconSize = isLargeScreen ? 113 : isSmallScreen ? 71.368 : 90;

  return (
    <>
      <div
        className={`${openSans.className} flex flex-col justify-center items-center`}
      >
        <Navbar />
        {/* -------- main content -------- */}
        <div className="flex flex-col items-center justify-center mt-[3.4375rem] lg:mt-[4.375rem] px-[1.125rem] lg:px-4 w-full max-w-[65.625rem]">
          {/* -------- free trial has started -------- */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center p-[6.32px] lg:p-[9.42px]">
              <CheckmarkCircle04Icon size={iconSize} color="#08C074" />
            </div>
            <div className="flex flex-col items-center justify-center mt-1.5">
              <h2 className="text-2xl lg:text-4xl font-bold leading-[49px] text-[var(--success)] whitespace-nowrap text-center">
                Your Free Trial Has Started
              </h2>
              <p className="text-center lg:text-xl text-[#4D585E] max-w-[65.625rem] mt-[0.6875rem]">
                You have successfully subscribed to the monthly plan on 31st
                January, 2024 and you will have this plan available to you for
                30 days. The following features are available to you:
              </p>
            </div>
          </div>
          {/* -------- available features -------- */}
          <div className="flex flex-col self-start items-start mt-[2.125rem] lg:mt-[2.625rem] gap-5">
            <div className="flex gap-[1.0625rem] items-center justify-center text-[var(--primary-text-color)]">
              <div className="w-[11px] h-[11px] bg-[var(--primary)] rounded-full flex-shrink-0"></div>
              <p>Access to all Edudesk&apos;s advance features</p>
            </div>
            <div className="flex gap-[1.0625rem] items-center justify-center text-[var(--primary-text-color)]">
              <div className="w-[11px] h-[11px] bg-[var(--primary)] rounded-full flex-shrink-0"></div>
              <p>You can add up to 400 students into the platform system</p>
            </div>
            <div className="flex gap-[1.0625rem] items-center justify-center text-[var(--primary-text-color)]">
              <div className="w-[11px] h-[11px] bg-[var(--primary)] rounded-full flex-shrink-0"></div>
              <p>Access to advance reporting, analysis and trend statistics</p>
            </div>
            <div className="flex gap-[1.0625rem] items-center justify-center text-[var(--primary-text-color)]">
              <div className="w-[11px] h-[11px] bg-[var(--primary)] rounded-full flex-shrink-0"></div>
              <p>
                Easily keep track of your school expenses and income and make
                updates.
              </p>
            </div>
            <div className="flex gap-[1.0625rem] items-center justify-center text-[var(--primary-text-color)]">
              <div className="w-[11px] h-[11px] bg-[var(--primary)] rounded-full flex-shrink-0"></div>
              <p>
                View total number of classes, students and staffs and their
                relevant details
              </p>
            </div>
          </div>
          {/* -------- buttons -------- */}
          <div className="flex flex-col items-center justify-center lg:flex-row gap-[1.32rem] lg:gap-[2.375rem] w-full mt-[3.5625rem] lg:mt-16">
            <Link href="/Edudesk"
              className={`flex items-center justify-center gap-2.5 bg-[var(--primary)]
              px-2.5 py-4 rounded-[33px] leading-5 text-[var(--secondary-text-color)] w-full max-w-[25.25rem]`}
              type="button"
            >
              Go to Dashboard
              <ArrowRight02Icon size={24} color="#fff" />
            </Link>
            <button
              className={`bg-[var(--secondary-text-color)] text-[var(--primary)] border border-solid border-[#BBC0CA] hover:text-[var(--secondary-text-color)] hover:bg-[var(--primary)] px-2.5 py-4 rounded-[33px] leading-5 w-full shadow-custom-lg max-w-[25.25rem]`}
              type="button"
              onClick={() => router.push("/")}
            >
              BACK TO HOMEPAGE
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingConfirmation;
