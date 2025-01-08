import UploadDialogComponenet from "@/components/StudentComponent/UploadDialogComponenet";
import React, { useEffect } from "react";
import withProtectedRoute from '@/hoc/ProtectedRoute';
import { FormProvider, useForm } from "react-hook-form";
import {
  UserIcon,
  Location04Icon,
  Mail01Icon,
  Call02Icon,
  MoneyAdd02Icon,
} from "hugeicons-react";
import CalenderComponent from "@/components/CalenderComponent";
import DropdownSelectComponent from "@/components/StudentComponent/DropdownSelectComponent";
import GenderField from "@/components/StudentComponent/GenderComponent";
import InputField from "@/components/StudentComponent/InputField";
import GeneralButton from "@/components/GeneralButton";
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  employeeSchema,
  employeeFormData,
} from "@/features/auth/employeeSchema";

const AddEmployee = () => {
   const dispatch = useAppDispatch();
       useEffect(()=>{
        dispatch(setActivePage({active:"add-employee", parentNav: "employees"}));
         
       })
       const methods = useForm<employeeFormData>({
        resolver: zodResolver(employeeSchema),
        mode: "onSubmit",
      });
    
      const {
        register,
        formState: { errors },
      } = methods;
    
      const onSubmit = async (data: employeeFormData) => {
        try {
          // const response = await axios.post("/api/employees", data);
          console.log("Employee added successfully:", data);
        } catch (error) {
          console.error("Error adding employee:", error);
        }
      };

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col items-center lg:mx-auto lg:pt-[1.375rem]">
        {/* -------- main employees content -------- */}
        <div className="w-full flex flex-col items-center pb-12 pt-9 px-[1.125rem] lg:p-12 gap-7 lg:gap-[2.0625rem] bg-[#ffffff]">
          {/* -------- heading -------- */}
          <h1 className="text-[var(--secondary)] font-bold text-xl lg:text-4xl leading-10">
            Add Employee
          </h1>
          {/* -------- uploads and form -------- */}
          <div className="flex flex-col gap-[1.5625rem] w-full">
            {/* -------- image and file upload -------- */}
            <div className="flex gap-[1.5625rem] self-start justify-start">
              <UploadDialogComponenet uploadType={"image"} />
              <UploadDialogComponenet uploadType={"file"} />
            </div>
            <form
              id="employeeForm"
              action=""
              className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              {/* -------- last name -------- */}
              <InputField
                id="employee-last-name"
                label="Last Name*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee last name"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeLastName")}
                error={errors.employeeLastName?.message}
              />
              {/* -------- other names -------- */}
              <InputField
                label={"Other Names*"}
                id={"employee-other-names"}
                placeholder={"Enter employee first name / middle name"}
                type={"text"}
                icon={UserIcon}
                className={"py-2.5 px-9"}
                {...register("employeeOtherNames")}
                error={errors.employeeOtherNames?.message}
              />
              {/* -------- email-address -------- */}
              <InputField
                label={"Email Address*"}
                className={"py-2.5 px-9"}
                id={"employee-email-address"}
                placeholder={"Enter email address"}
                type={"email"}
                icon={Mail01Icon}
                {...register("employeeEmailAddress")}
                error={errors.employeeEmailAddress?.message}
              />
              {/* -------- employee-phone-number -------- */}
              <InputField
                label={"Phone Number*"}
                className={"py-2.5 px-9"}
                id={"employee-phone-number"}
                placeholder={"000-0000-000"}
                type={"text"}
                icon={Call02Icon}
                {...register("employeePhoneNumber")}
                error={errors.employeePhoneNumber?.message}
              />
              {/* -------- gender -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <GenderField fieldName={"employeeGender"} />
                {errors.employeeGender?.message && (
                  <p className="self-start text-sm text-[var(--danger)] mt-1">
                    {errors.employeeGender?.message}
                  </p>
                )}
              </div>
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
                    {...register("employeeDateOfBirth")}
                  />
                  {errors.employeeDateOfBirth?.message && (
                    <p className="self-start text-sm text-[var(--danger)] mt-1">
                      {errors.employeeDateOfBirth?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* -------- residentiaL address -------- */}
              <InputField
                label={"Residential address*"}
                className={"py-2.5 px-9"}
                id={"employee-home-address"}
                placeholder={"Enter employee's residential address"}
                type={"text"}
                icon={Location04Icon}
                {...register("employeeResidentialAddress")}
                error={errors.employeeResidentialAddress?.message}
              />
              {/* -------- national id number -------- */}
              <InputField
                label={"National Identification Number*"}
                className={"py-2.5 px-9"}
                id={"employee-national-id-number"}
                placeholder={"Enter national ID number"}
                type={"text"}
                icon={Mail01Icon}
                {...register("employeeNationalIdentificationNumber")}
                error={errors.employeeNationalIdentificationNumber?.message}
              />
              {/* -------- institution -------- */}
              <InputField
                label={"Institution*"}
                className={"py-2.5 px-9"}
                id={"employee-institution"}
                placeholder={"Enter employee's institution"}
                type={"text"}
                icon={Location04Icon}
                {...register("employeeInstitution")}
                error={errors.employeeInstitution?.message}
              />
              {/* -------- degree program/qualification -------- */}
              <InputField
                label={"Degree Program (Qualification)*"}
                className={"py-2.5 px-9"}
                id={"employee-qualification"}
                placeholder={"Enter qualification"}
                type={"text"}
                icon={Mail01Icon}
                {...register("employeeDegreeProgram")}
                error={errors.employeeDegreeProgram?.message}
              />
              {/* -------- department -------- */}
              <InputField
                id="employee-department"
                label="Department*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's department"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeDepartment")}
                error={errors.employeeDepartment?.message}
              />
              {/* -------- role -------- */}
              <InputField
                id="employee-role"
                label="Role*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's role"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeRole")}
                error={errors.employeeRole?.message}
              />
              {/* -------- bank account number -------- */}
              <InputField
                id="employee-bank-account-number"
                label="Bank Account Number*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account number"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeBankAccountDetails")}
                error={errors.employeeBankAccountDetails?.message}
              />
              {/* -------- bank account holder -------- */}
              <InputField
                id="employee-bank-account-holder"
                label="Bank Account Holder*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account holder's name"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeBankAccountHolder")}
                error={errors.employeeBankAccountHolder?.message}
              />
              {/* -------- bank name -------- */}
              <InputField
                id="employee-bank-name"
                label="Name of bank*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account number"}
                type={"text"}
                icon={UserIcon}
                {...register("employeeNameOfBank")}
                error={errors.employeeNameOfBank?.message}
              />
              {/* -------- expected salary -------- */}
              <InputField
                id="employee-expected-salary"
                label="Expected Salary*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's salary"}
                type={"text"}
                icon={MoneyAdd02Icon}
                {...register("employeeExpectedSalary")}
                error={errors.employeeExpectedSalary?.message}
              />
            </form>
            {/* -------- submit and cancel buttons -------- */}
            <div className="w-full flex justify-center gap-4">
              <GeneralButton
                buttonText={"Save"}
                size={"large"}
                state={"active"}
                className="w-[14.8125rem] text-lg"
                form={"employeeForm"}
                type="submit"
              />
              <GeneralButton
                buttonText={"Cancel"}
                size={"large"}
                state={"previous"}
                className="w-[14.8125rem] text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddEmployee
