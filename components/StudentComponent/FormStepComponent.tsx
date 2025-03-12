import React, { useState } from "react";
import "../../app/globals.css";
import UploadDialogComponenet from "./UploadDialogComponent";
import {
  UserIcon,
  Location04Icon,
  Mail01Icon,
  Call02Icon,
  HealthIcon,
} from "hugeicons-react";
import { GrCircleInformation } from "react-icons/gr";
import CalenderComponent from "../CalenderComponent";
import { Checkbox, FormControlLabel } from "@mui/material";
import DropdownSelectComponent from "./DropdownSelectComponent";
import InputField from "./InputField";
import GeneralButton from "../GeneralButton";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { studentFormData } from "@/features/auth/studentSchema";
// import { FormData } from "@/pages/[school_name]/add-student";
import GenderField from "./GenderComponent";

/**
 *
 * TODO: parse input for age to number data type automatically
 */

interface FormStepComponentProps {
  step: number;
  methods: UseFormReturn<studentFormData>;
  onEditDetails?: () => void;
}

const FormStepComponent: React.FC<FormStepComponentProps> = ({
  step,
  methods,
  onEditDetails,
}) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useFormContext<studentFormData>();

  const classes = [
    "Creche",
    "Nursery",
    "Kindergarten",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "Junior Secondary 1",
    "Junior Secondary 2",
    "Junior Secondary 3",
    "Senior Secondary 1",
    "Senior Secondary 2",
    "Senior Secondary 3",
  ];

  // const [parentID, setParentID] = useState("");
  // const [studentID, setStudentID] = useState("");

  const parentID = watch("parent.parentID");
  const studentID = watch("personal.studentID");

  const generateParentID = () => {
    const newID = `PARENT-${Math.floor(100000 + Math.random() * 900000)}`; // Example: PARENT-123456
    setValue("parent.parentID", newID);
  };

  const generateStudentID = () => {
    const newID = `STUDENT-${Math.floor(100000 + Math.random() * 900000)}`; // Example: PARENT-123456
    setValue("personal.studentID", newID);
  };

  switch (step) {
    // -------- personal information --------
    case 0:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem] bg-white">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Personal Information
          </h3>
          <div className="flex flex-col gap-10 lg:gap-[3.375rem]">
            {/* -------- add student image -------- */}
            <UploadDialogComponenet
              uploadType={"image"}
              onFileUpload={() => {}}
            />
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- last name -------- */}
              <InputField
                id="student-last-name"
                label="Last Name*"
                className={"py-2.5 px-9"}
                placeholder={"Enter student last name"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.lastName")}
                // error={errors.personalInformation?.lastName?.message}
              />
              {/* -------- first name -------- */}
              <InputField
                id="student-first-name"
                label="First Name*"
                className={"py-2.5 px-9"}
                placeholder={"Enter student first name"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.firstName")}
                // error={errors.personalInformation?.lastName?.message}
              />
              {/* -------- other names -------- */}
              <InputField
                label={"Other Names*"}
                id={"student-other-names"}
                placeholder={"Enter student first name / middle name"}
                type={"text"}
                icon={UserIcon}
                className={"py-2.5 px-9"}
                {...register("personal.otherNames")}
                // error={errors.personalInformation?.otherNames?.message}
              />
              {/* -------- date of birth -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="date-of-birth"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Date of birth*
                </label>
                <div className="w-full flex flex-col relative items-center text-[var(--grey)]">
                  <CalenderComponent
                    variant="form"
                    {...register("personal.dateOfBirth")}
                  />
                  {/* {errors.personalInformation?.dateOfBirth?.message && (
                    <p className="self-start text-sm text-[var(--danger)] mt-1">
                      {errors.personalInformation?.dateOfBirth?.message}
                    </p>
                  )} */}
                </div>
              </div>
              {/* -------- gender -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <GenderField fieldName={"personal.gender"} />
                {/* {errors.personalInformation?.gender?.message && (
                  <p className="self-start text-sm text-[var(--danger)] mt-1">
                    {errors.personalInformation?.gender?.message}
                  </p>
                )} */}
              </div>
              {/* -------- admission date -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="last-name"
                  className=" text-sm text-[var(--primary-text-color)]"
                >
                  Admission Date*
                </label>
                <CalenderComponent
                  variant="form"
                  {...register("personal.admissionDate")}
                />
                {/* {errors.personalInformation?.admissionDate?.message && (
                  <p className="text-sm text-[var(--danger)] mt-1">
                    {errors.personalInformation?.admissionDate?.message}
                  </p>
                )} */}
              </div>
              {/* -------- student class -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <DropdownSelectComponent
                  {...register("personal.classes")}
                  options={classes}
                  label="Classes*"
                  placeholder="select class"
                  value={methods.watch("personal.classes")}
                />
                {/* {errors.personalInformation?.classes?.message && (
                  <p className="text-sm text-[var(--danger)] mt-1">
                    {errors.personalInformation?.classes?.message}
                  </p>
                )} */}
              </div>
              {/* -------- student id -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="student-id"
                  className="text-sm text-[var(--primary-text-color)] whitespace-nowrap"
                >
                  Student ID*
                </label>
                <div className="flex items-end justify-between border border-solid border-[var(--border)] h-fit rounded-[0.625rem] overflow-hidden">
                  <InputField
                    className={"py-2.5 px-2 border-none"}
                    id={"student-id"}
                    placeholder={"Generate student ID"}
                    type={"text"}
                    value={studentID}
                    readOnly={true}
                    {...register("personal.studentID")}
                    divClass="h-fit gap-0 flex-grow"
                  />
                  <GeneralButton
                    buttonText="Generate Student ID"
                    state={"active"}
                    size={"small"}
                    className="text-[10px] rounded-r-[0.625rem] rounded-l-[0.625rem] border-0 h-full"
                    type="button"
                    onClick={generateStudentID}
                  />
                </div>

                <p className="text-[var(--secondary)] text-[14px] flex items-center gap-1 hover:cursor-pointer">
                  <GrCircleInformation />
                  Click the button to generate student ID
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    // -------- contact information --------
    case 1:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem] bg-white">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Contact Information
          </h3>
          <div className="flex flex-col">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- nationality -------- */}
              <InputField
                label={"Nationality*"}
                className={"py-2.5 px-9"}
                id={"student-nationality"}
                placeholder={"Enter student nationality"}
                type={"text"}
                icon={Location04Icon}
                {...register("contact.nationality")}
                // error={errors.contactInformation?.nationality?.message}
              />
              {/* -------- state of origin -------- */}
              <InputField
                label={"State of Origin*"}
                className={"py-2.5 px-9"}
                id={"student-state-of-origin"}
                placeholder={"Enter student state of Origin"}
                type={"text"}
                icon={Location04Icon}
                {...register("contact.stateOfOrigin")}
                // error={errors.contactInformation?.stateOfOrigin?.message}
              />
              {/* -------- local government -------- */}
              <InputField
                label={"Local Government*"}
                className={"py-2.5 px-9"}
                id={"student-local-government"}
                placeholder={"Enter student local government of Origin"}
                type={"text"}
                icon={Location04Icon}
                {...register("contact.localGovernment")}
                // error={errors.contactInformation?.localGovernment?.message}
              />
              {/* -------- town -------- */}
              <InputField
                label={"Town*"}
                className={"py-2.5 px-9"}
                id={"student-town"}
                placeholder={"Enter student town"}
                type={"text"}
                icon={Location04Icon}
                {...register("contact.town")}
                // error={errors.contactInformation?.town?.message}
              />
              {/* -------- home address -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                divClass={"lg:col-span-2"}
                id={"student-home-address"}
                placeholder={"Street address/city/state/country"}
                type={"text"}
                icon={Location04Icon}
                {...register("contact.homeAddress")}
                // error={errors.contactInformation?.homeAddress?.message}
              />
            </div>
          </div>
        </div>
      );
    // -------- parent information --------
    case 2:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem] bg-white">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Parent Information
          </h3>
          <div className="flex flex-col">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- MOTHER INFORMATION -------- */}
              {/* -------- student-mother-guardian-last-name -------- */}
              <InputField
                label={"Mother/Guardian Last Name*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-last-name"}
                placeholder={"Enter last name"}
                type={"text"}
                icon={UserIcon}
                {...register("parent.mother.lastName")}
                error={errors.parent?.mother?.lastName?.message}
              />
              {/* -------- student-mother-guardian-first-name -------- */}
              <InputField
                label={"Mother/Guardian First Name*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-first-name"}
                placeholder={"Enter first name"}
                type={"text"}
                icon={UserIcon}
                {...register("parent.mother.firstName")}
                error={errors.parent?.mother?.firstName?.message}
              />
              {/* -------- student-mother-guardian-email-address -------- */}
              <InputField
                label={"Mother/Guardian Email Address*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-email-address"}
                placeholder={"Enter email address"}
                type={"email"}
                icon={Mail01Icon}
                {...register("parent.mother.email")}
                error={errors.parent?.mother?.email?.message}
              />
              {/* -------- student-mother-guardian-phone-number -------- */}
              <InputField
                label={"Mother/Guardian Phone Number*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-phone-number"}
                placeholder={"000-0000-000"}
                type={"text"}
                icon={Call02Icon}
                {...register("parent.mother.phone")}
                error={errors.parent?.mother?.phone?.message}
              />
              {/* -------- student-mother-guardian-phone-number -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                id={"student-mother-guardian-home-address"}
                placeholder={"Street address/city/state/country"}
                type={"text"}
                icon={Location04Icon}
                // divClass="lg:col-span-2"
                {...register("parent.mother.address")}
                error={errors.parent?.mother?.address?.message}
              />

              {/* -------- FATHER INFORMATION -------- */}
              {/* -------- student-father-guardian-last-name -------- */}
              <InputField
                label={"Father/Guardian Last Name*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-last-name"}
                placeholder={"Enter last name"}
                type={"text"}
                icon={UserIcon}
                {...register("parent.father.lastName")}
                error={errors.parent?.father?.lastName?.message}
              />
              {/* -------- student-father-guardian-first-name -------- */}
              <InputField
                label={"Father/Guardian First Name*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-first-name"}
                placeholder={"Enter first name"}
                type={"text"}
                icon={UserIcon}
                {...register("parent.father.firstName")}
                error={errors.parent?.father?.firstName?.message}
              />
              {/* -------- student-father-guardian-email-address -------- */}
              <InputField
                label={"Father/Guardian Email address*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-email-address"}
                placeholder={"Enter email address"}
                type={"email"}
                icon={Mail01Icon}
                {...register("parent.father.email")}
                error={errors.parent?.father?.email?.message}
              />
              {/* -------- student-father-guardian-phone-number -------- */}
              <InputField
                label={"Father/Guardian Phone Number*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-phone-number"}
                placeholder={"0000-0000-0000"}
                type={"text"}
                icon={Call02Icon}
                {...register("parent.father.phone")}
                error={errors.parent?.father?.phone?.message}
              />
              {/* -------- student-father-guardian-phone-number -------- */}
              <InputField
                label={"Home address*"}
                className={"py-2.5 px-9"}
                id={"student-father-guardian-home-address"}
                placeholder={"Street address/city/state/country"}
                type={"text"}
                icon={Location04Icon}
                // divClass="lg:col-span-2"
                {...register("parent.father.address")}
                error={errors.parent?.father?.address?.message}
              />

              {/* -------- parent id -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <label
                  htmlFor="parent-id"
                  className="text-sm text-[var(--primary-text-color)] whitespace-nowrap"
                >
                  Parent ID*
                </label>
                <div className="flex items-end justify-between border border-solid border-[var(--border)] h-fit rounded-[0.625rem] overflow-hidden">
                  <InputField
                    className={"py-2.5 px-2 border-none"}
                    id={"parent-id"}
                    placeholder={"Generate parent ID"}
                    type={"text"}
                    value={parentID}
                    readOnly={true}
                    {...register("parent.parentID")}
                    divClass="h-fit gap-0 flex-grow"
                  />
                  <GeneralButton
                    buttonText="Generate Parent ID"
                    state={"active"}
                    size={"small"}
                    className="text-[10px] rounded-r-[0.625rem] rounded-l-[0.625rem] border-0 h-full"
                    type="button"
                    onClick={generateParentID}
                  />
                </div>

                <p className="text-[var(--secondary)] text-[14px] flex items-center gap-1 hover:cursor-pointer">
                  <GrCircleInformation />
                  Click the button to generate parent ID
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    // -------- health information --------
    case 3:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem] bg-white">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            Health Information
          </h3>
          <div className="flex flex-col">
            {/* -------- form input section -------- */}
            <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full">
              {/* -------- current medication -------- */}
              <InputField
                label={"Current Medication"}
                className={"py-2.5 px-9"}
                id={"student-current-medication"}
                placeholder={"Enter student current medication"}
                type={"text"}
                icon={HealthIcon}
                {...register("health.currentMedication")}
                // error={errors.health?.currentMedication?.message}
              />
              {/* -------- health condition -------- */}
              <InputField
                label={"Health Condition"}
                className={"py-2.5 px-9"}
                id={"student-health-condition"}
                placeholder={"Enter student health condition if any"}
                icon={HealthIcon}
                type={"text"}
                {...register("health.healthCondition")}
                // error={errors.health?.healthCondition?.message}
              />

              {/* -------- genotype -------- */}
              <InputField
                label={"Genotype"}
                className={"py-2.5 px-9"}
                id={"student-genotype"}
                placeholder={"Enter student genotype"}
                icon={HealthIcon}
                type={"text"}
                {...register("health.genotype")}
                // error={errors.health?.genotype?.message}
              />

              {/* -------- blood group -------- */}
              <InputField
                label={"Blood Group"}
                className={"py-2.5 px-9"}
                id={"student-blood-group"}
                placeholder={"Enter student blood group"}
                type={"text"}
                icon={HealthIcon}
                {...register("health.bloodGroup")}
                // error={errors.health?.bloodGroup?.message}
              />

              {/* -------- allergies -------- */}
              <InputField
                label={"Allergies"}
                className={"py-2.5 px-9"}
                id={"student-allergies"}
                placeholder={"Enter student allergies if any"}
                type={"text"}
                icon={HealthIcon}
                {...register("health.allergies")}
                // error={errors.health?.allergies?.message}
              />
              {/* -------- disabilities -------- */}
              <InputField
                label={"Disabilities"}
                className={"py-2.5 px-9"}
                id={"student-disabilities"}
                placeholder={"Enter student student disabilities if any"}
                type={"text"}
                icon={HealthIcon}
                {...register("health.disabilities")}
                // error={errors.health?.disabilities?.message}
              />
            </div>
          </div>
        </div>
      );
    // -------- school fees details --------
    case 4:
      return (
        <div className="flex flex-col w-full lg:p-[1.875rem] px-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:rounded-[0.9375rem] gap-6 lg:gap-[2.1875rem] bg-white">
          <h3
            className={`font-semibold text-lg lg:text-xl text-[var(--primary)] leading-9 lg:self-center`}
          >
            School Fees Details
          </h3>
          <div className="flex flex-col items-center gap-16 lg:gap-[4.1875rem]">
            {/* -------- shcool fees details and buttons -------- */}
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
            </div>
            {/* -------- edit and submit buttons -------- */}
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[3.8125rem] items-center justify-center">
              <GeneralButton
                buttonText="Edit Details"
                state={"previous"}
                size={"large"}
                className="w-full lg:w-60"
                onClick={onEditDetails}
              />
              <GeneralButton
                buttonText="Submit"
                state={"active"}
                size={"large"}
                className="w-full lg:w-[11.5625rem]"
                type="submit"
              />
            </div>
          </div>
        </div>
      );
  }
};

export default FormStepComponent;