import React from "react";
// import { openSans } from '@/app/fonts/fonts'
import "../../app/globals.css";
import ImageDialogComponenet from "./ImageDialogComponenet";
import { UserAccountIcon, UserIcon } from "hugeicons-react";
import Calender from "../CalenderComponent";

/**
 *
 * * Is there an error state for the forms?
 * TODO: parse input for age to number data type automatically
 */

interface FormStepComponentProps {
  step: number;
}

const FormStepComponent: React.FC<FormStepComponentProps> = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <div className="flex flex-col lg:py-[1.[875rem] px-[1.125rem] lg:px-[1.875rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9`}
          >
            Personal Information
          </h3>
          <form action="" className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- add student image -------- */}
            <ImageDialogComponenet />
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- last name -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="last-name"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Last Name*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <span className="absolute left-2.5">
                    <UserIcon size={18} />
                  </span>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter student last name"
                    className="border py-2.5 px-9 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
              {/* -------- other names -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="other-names"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Other Names*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <span className="absolute left-2.5">
                    <UserIcon size={18} />
                  </span>
                  <input
                    type="text"
                    id="other-names"
                    name="other-names"
                    placeholder="Enter student first name / middle name"
                    className="border py-2.5 px-9 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
              {/* -------- date of birth -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="date-of-birth"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Date of birth*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <input
                    type="text"
                    id="date-of-birth"
                    name="date-of-birth"
                    placeholder="DD/MM/YYYY"
                    className="border p-2.5 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
              {/* -------- age -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="age"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Age*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="Enter student age"
                    className="border p-2.5 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
              {/* -------- gender -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="gender"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Gender*
                </label>
                <div className="w-full flex items-center text-[var(--grey)]">
                  {/* -------- male gender -------- */}
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="male"
                      name="male"
                      className="border p-2.5 border-solid border-[var(--border)] rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  {/* -------- female gender -------- */}
                  <div className="w-full flex items-center text-[var(--grey)]">
                    <input
                      type="checkbox"
                      id="female"
                      name="female"
                      className="border p-2.5 border-solid border-[var(--border)] rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              {/* -------- last name -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="last-name"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Last Name*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <span className="absolute left-2.5">
                    <UserIcon size={18} />
                  </span>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter student last name"
                    className="border p-2.5 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
              {/* -------- last name -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="last-name"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Last Name*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <span className="absolute left-2.5">
                    <UserIcon size={18} />
                  </span>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter student last name"
                    className="border p-2.5 border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none"
                  />
                </div>
              </div>
            </div>
          </form>
          <Calender />
        </div>
      );
  }
};

export default FormStepComponent;
