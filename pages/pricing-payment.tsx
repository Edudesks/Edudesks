import Footer from "@/components/LandingPageComponents/Footer";
import Navbar from "@/components/LandingPageComponents/NavBar";
import React from "react";
import "../app/globals.css";
import { openSans } from "@/app/fonts/fonts";
import Image from "next/image";
import SubscriptionDropdown from "@/components/PricingPaymentComponent/SubscriptionDropdown";

/**
 *
 * TODO: Functionality for monthly and annual payment
 */

const PricingPayment = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* -------- billing details and order details section -------- */}
      <div className="flex flex-col max-w-[78.0625rem] w-full self-center p-[1.125rem] lg:p-0 gap-20 lg:gap-[3.75rem]">
        {/* -------- complete payment heading -------- */}
        <div className="flex flex-col gap-[0.9375rem] items-center mt-[4.1875rem] self-center">
          <h2
            className={`font-bold text-4xl leading-[49px] text-[var(--secondary)] text-center`}
          >
            Complete Payment
          </h2>
          <p className={`text-xl text-[var(--primary-text-color)] text-center`}>
            Select The Best Plan For Your School&apos;s Needs And Budget
          </p>
        </div>
        {/* -------- billing section and order section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[3.1875rem] lg:gap-[8.1875rem] lg:px-4">
          {/* -------- billing details -------- */}
          <div className="flex flex-col gap-3">
            <h3 className={`${openSans.className} text-2xl font-bold`}>
              Billing details
            </h3>
            <form
              className="flex flex-col gap-[1.625rem] border border-solid border-[var(--border)] rounded-[10px] py-4 px-[0.8125rem] lg:px-[1.375rem]"
              action=""
            >
              {/* -------- email address -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="email-address"
                  className="text-sm font-semibold text-[var(--primary)]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  className="flex items-center- p-2.5 border border-solid border-[var(--border)] rounded-[10px] placeholder:text-[var(--grey)] placeholder:opacity-60 focus:outline-none autofill:bg-none text-[var(--primary)]"
                  placeholder="Enter email address"
                />
              </div>
              {/* -------- card number -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="card-number"
                  className="text-sm font-semibold text-[var(--primary)]"
                >
                  Card Number
                </label>
                <input
                  type="email"
                  id="card-number"
                  name="card-number"
                  className="flex items-center- p-2.5 border border-solid border-[var(--border)] rounded-[10px] placeholder:text-[var(--grey)] placeholder:opacity-60 focus:outline-none autofill:bg-none text-[var(--primary)]"
                  placeholder="Enter card number"
                />
              </div>
              {/* -------- card name -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="card-name"
                  className="text-sm font-semibold text-[var(--primary)]"
                >
                  Name on the card
                </label>
                <input
                  type="text"
                  id="card-name"
                  name="card-name"
                  className="flex items-center- p-2.5 border border-solid border-[var(--border)] rounded-[10px] placeholder:text-[var(--grey)] placeholder:opacity-60 focus:outline-none autofill:bg-none text-[var(--primary)]"
                  placeholder="Enter the name on the card"
                />
              </div>
              {/* -------- expiration date and security code -------- */}
              <div className="flex justify-center lg:justify-between items-end gap-[0.8125rem] lg:gap-5">
                {/* -------- expiration date -------- */}
                <div className="flex flex-col gap-[0.4375rem] max-w-[7.9375rem] lg:max-w-[12.1875rem]">
                  <label
                    htmlFor="expiration-date"
                    className="text-sm font-semibold text-[var(--primary)]"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    className="flex items-center- p-2.5 border border-solid border-[var(--border)] rounded-[10px] placeholder:text-[var(--grey)] placeholder:opacity-60 focus:outline-none autofill:bg-none text-[var(--primary)]"
                    placeholder="MM/YY"
                  />
                </div>
                {/* -------- security code -------- */}
                <div className="flex flex-col gap-[0.4375rem] max-w-[7.9375rem] lg:max-w-[12.1875rem]">
                  <label
                    htmlFor="security-code"
                    className="text-sm font-semibold text-[var(--primary)]"
                  >
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="security-code"
                    name="security-code"
                    className="flex items-center- p-2.5 border border-solid border-[var(--border)] rounded-[10px] placeholder:text-[var(--grey)] placeholder:opacity-60 focus:outline-none autofill:bg-none text-[var(--primary)]"
                    placeholder="CVV"
                  />
                </div>
                {/* -------- credit card image -------- */}
                <Image
                  src={"/images/credit-card.svg"}
                  width={68}
                  height={48.875}
                  alt="credit-card"
                />
              </div>
              {/* -------- secured by paystack -------- */}
              <div className="flex gap-[3px] items-center justify-center mt-2.5">
                <Image
                  className="self-end"
                  src={"/icons/lock.svg"}
                  alt="lock-icon"
                  width={24}
                  height={24}
                />
                <p className="text-[var(--grey)] opacity-60 leading-none">
                  Secured by
                </p>
                <Image
                  src={"images/paystack.svg"}
                  alt="paystack"
                  width={78.833}
                  height={22}
                />
              </div>
            </form>
          </div>
          {/* -------- order details -------- */}
          <div className="flex flex-col gap-3 w-full">
            <h3 className={`${openSans.className} text-2xl font-bold`}>
              Order details
            </h3>
            {/* -------- premium plan box -------- */}
            <div className="flex flex-col gap-[1.625rem] border border-solid border-[var(--border)] rounded-[10px] py:2.75rem lg:py-[1.625rem] px-[0.8125rem] lg:px-[1.1875rem]">
              <div>
                <h3 className="text-3xl font-bold text-var(--primary)">
                  Premium Plan
                </h3>
                <div className="w-full h-[1px] bg-[var(--border)] my-[1.375rem]"></div>
                {/* -------- monthly subscription -------- */}
                <div>
                    <SubscriptionDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPayment;
