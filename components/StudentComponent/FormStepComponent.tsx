import React from "react";
import "../../app/globals.css";
import ImageDialogComponenet from "./ImageDialogComponenet";
import {
  UserIcon,
  Location04Icon,
  Mail01Icon,
  Call02Icon,
  HealthIcon,
} from "hugeicons-react";
import CalenderComponent from "../CalenderComponent";
import { Checkbox, FormControlLabel } from "@mui/material";
import DropdownSelectComponent from "./DropdownSelectComponent";
import InputField from "./InputField";
import GeneralButton from "../GeneralButton";

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
    // -------- personal information --------
    case 0:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Personal Information
          </h3>
          <form action="" className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- add student image -------- */}
            <ImageDialogComponenet />
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- last name -------- */}
              <InputField
                id="student-last-name"
                label="Last Name*"
                className={"py-2.5 px-9"}
                placeholder={"Enter student last name"}
                value={""}
                type={"text"}
                icon={UserIcon}
              />
              {/* -------- other names -------- */}
              <InputField
                label={"Other Names*"}
                id={"student-other-names"}
                placeholder={"Enter student first name / middle name"}
                value={""}
                type={"text"}
                icon={UserIcon}
                className={"py-2.5 px-9"}
              />
              {/* -------- date of birth -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="date-of-birth"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Date of birth*
                </label>
                <div className="w-full flex relative items-center text-[var(--grey)]">
                  <CalenderComponent variant="form" />
                </div>
              </div>
              {/* -------- age -------- */}
              <InputField
                label={"Age*"}
                id={"student-age"}
                placeholder={"Enter student age"}
                value={""}
                type={"text"}
                className="p-2.5"
              />
              {/* -------- gender -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="gender"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Gender*
                </label>
                <div className="w-full flex items-center text-sm text-[var(--primary-text-color)]">
                  {/* -------- male gender -------- */}
                  <FormControlLabel
                    className=""
                    disableTypography
                    control={<Checkbox className="text-[#D0D5DD]" />}
                    label="Male"
                  />
                  <FormControlLabel
                    disableTypography
                    control={<Checkbox className="text-[#D0D5DD]" />}
                    label="Female"
                  />
                </div>
              </div>
              {/* -------- admission date -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="last-name"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Admission Date*
                </label>
                <CalenderComponent variant="form" />
              </div>
              {/* -------- student class -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <DropdownSelectComponent />
              </div>
            </div>
          </form>
        </div>
      );
    // -------- contact information --------
    case 1:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Contact Information
          </h3>
          <form action="" className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- nationality -------- */}
              <InputField
                label={"Nationality*"}
                className={"py-2.5 px-9"}
                id={"student-nationality"}
                placeholder={"Enter student nationality"}
                value={""}
                type={"text"}
                icon={Location04Icon}
              />
              {/* -------- state of origin -------- */}
              <InputField
                label={"State of Origin*"}
                className={"py-2.5 px-9"}
                id={"student-state-of-origin"}
                placeholder={"Enter student state of Origin"}
                value={""}
                type={"text"}
                icon={Location04Icon}
              />
              {/* -------- local government -------- */}
              <InputField
                label={"Local Government*"}
                className={"py-2.5 px-9"}
                id={"student-local-government"}
                placeholder={"Enter student local government of Origin"}
                value={""}
                type={"text"}
                icon={Location04Icon}
              />
              {/* -------- town -------- */}
              <InputField
                label={"Town*"}
                className={"py-2.5 px-9"}
                id={"student-town"}
                placeholder={"Enter student town"}
                value={""}
                type={"text"}
                icon={Location04Icon}
              />
              {/* -------- home address -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                divClass={"lg:col-span-2"}
                id={"student-home-address"}
                placeholder={"Street address/city/state/country"}
                value={""}
                type={"text"}
                icon={Location04Icon}
              />
            </div>
          </form>
        </div>
      );
    // -------- parent information --------
    case 2:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Parent Information
          </h3>
          <form action="" className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- MOTHER INFORMATION -------- */}
              {/* -------- student-mother-guardian-last-name -------- */}
              <InputField
                label={"Mother/Guardian Last Name*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-last-name"}
                placeholder={"Enter last name"}
                value={""}
                type={"text"}
                icon={UserIcon}
              />
              {/* -------- student-mother-guardian-first-name -------- */}
              <InputField
                label={"Mother/Guardian First Name*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-first-name"}
                placeholder={"Enter first name"}
                value={""}
                type={"text"}
                icon={UserIcon}
              />
              {/* -------- student-mother-guardian-email-address -------- */}
              <InputField
                label={"Mother/Guardian First Name*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-email-address"}
                placeholder={"Enter email address"}
                value={""}
                type={"email"}
                icon={Mail01Icon}
              />
              {/* -------- student-mother-guardian-phone-number -------- */}
              <InputField
                label={"Mother/Guardian Phone Number*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-phone-number"}
                placeholder={"000-0000-000"}
                value={""}
                type={"text"}
                icon={Call02Icon}
              />
              {/* -------- student-mother-guardian-phone-number -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-home-address"}
                placeholder={"Street address/city/state/country"}
                value={""}
                type={"text"}
                icon={Location04Icon}
                divClass="lg:col-span-2"
              />

              {/* -------- FATHER INFORMATION -------- */}
              {/* -------- student-father-guardian-last-name -------- */}
              <InputField
                label={"Father/Guardian Last Name*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-last-name"}
                placeholder={"Enter last name"}
                value={""}
                type={"text"}
                icon={UserIcon}
              />
              {/* -------- student-father-guardian-first-name -------- */}
              <InputField
                label={"Father/Guardian First Name*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-first-name"}
                placeholder={"Enter first name"}
                value={""}
                type={"text"}
                icon={UserIcon}
              />
              {/* -------- student-father-guardian-email-address -------- */}
              <InputField
                label={"Father/Guardian Email address*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-email-address"}
                placeholder={"Enter email address"}
                value={""}
                type={"email"}
                icon={Mail01Icon}
              />
              {/* -------- student-father-guardian-phone-number -------- */}
              <InputField
                label={"Father/Guardian Phone Number*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-phone-number"}
                placeholder={"0000-0000-0000"}
                value={""}
                type={"text"}
                icon={Call02Icon}
              />
              {/* -------- student-father-guardian-phone-number -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-home-address"}
                placeholder={"Street address/city/state/country"}
                value={""}
                type={"text"}
                icon={Location04Icon}
                divClass="lg:col-span-2"
              />
            </div>
          </form>
        </div>
      );
    // -------- health information --------
    case 3:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Health Information
          </h3>
          <form action="" className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- current medication -------- */}
              <InputField
                label={"Current Medication"}
                className={"py-2.5 px-9"}
                id={"student-current-medication"}
                placeholder={"Enter student current medication"}
                value={""}
                type={"text"}
                icon={HealthIcon}
              />
              {/* -------- health condition -------- */}
              <InputField
                label={"Health Condition"}
                className={"py-2.5 px-9"}
                id={"student-health-condition"}
                placeholder={"Enter student health condition if any"}
                value={""}
                icon={HealthIcon}
                type={"text"}
              />

              {/* -------- genotype -------- */}
              <InputField
                label={"Genotype"}
                className={"py-2.5 px-9"}
                id={"student-genotype"}
                placeholder={"Enter student genotype"}
                value={""}
                icon={HealthIcon}
                type={"text"}
              />

              {/* -------- blood group -------- */}
              <InputField
                label={"Blood Group"}
                className={"py-2.5 px-9"}
                id={"student-blood-group"}
                placeholder={"Enter student blood group"}
                value={""}
                type={"text"}
                icon={HealthIcon}
              />

              {/* -------- allergies -------- */}
              <InputField
                label={"Allergies"}
                className={"py-2.5 px-9"}
                id={"student-allergies"}
                placeholder={"Enter student allergies if any"}
                value={""}
                type={"text"}
                icon={HealthIcon}
              />
              {/* -------- disabilities -------- */}
              <InputField
                label={"Disabilities"}
                className={"py-2.5 px-9"}
                id={"student-disabilities"}
                placeholder={"Enter student student disabilities if any"}
                value={""}
                type={"text"}
                icon={HealthIcon}
              />
            </div>
          </form>
        </div>
      );
    // -------- school fees details --------
    case 4:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem]">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            School Fees Details
          </h3>
          <form action="" className="flex flex-col items-center gap-10 lg:gap-[3.375rem]">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[2.8125rem] w-full max-w-[34.3125rem]">
              {/* -------- school fees detail -------- */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-[0.9375rem] lg:items-center">
                <label
                  htmlFor="student-school-fees"
                  className=" text-sm text-[var(--primary-text-color)] whitespace-nowrap"
                >
                  School Fees:
                </label>
                <input
                  type="text"
                  id="student-school-fees"
                  name="student-school-fees"
                  className={`border border-solid border-[var(--border)] rounded-[0.625rem] w-full focus:outline-none autofill:bg-none shadow-form-shadow p-2.5`}
                />
              </div>
              {/* -------- discount -------- */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-[0.9375rem] lg:items-center">
                <label
                  htmlFor="student-school-fees"
                  className=" text-sm text-[var(--primary-text-color)] whitespace-nowrap"
                >
                  Discount:
                </label>
                <input
                  type="text"
                  id="student-school-fees"
                  name="student-school-fees"
                  className={`border border-solid border-[var(--border)] rounded-[0.625rem] w-full focus:outline-none autofill:bg-none shadow-form-shadow p-2.5`}
                />
              </div>
              {/* -------- total balance -------- */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-[0.9375rem] lg:items-center lg:place-self-center lg:col-span-2">
                <label
                  htmlFor="student-school-fees"
                  className=" text-sm text-[var(--primary-text-color)] whitespace-nowrap font-semibold"
                >
                  Total Balance:
                </label>
                <input
                  type="text"
                  id="student-school-fees"
                  name="student-school-fees"
                  className={`border border-solid border-[var(--border)] rounded-[0.625rem] w-full focus:outline-none autofill:bg-none shadow-form-shadow p-2.5`}
                />
              </div>
              <GeneralButton buttonText="Get Started" state={"previous"} size={"large"} iconPosition="right" />
            </div>
          </form>
        </div>
      );
  }
};

export default FormStepComponent;
