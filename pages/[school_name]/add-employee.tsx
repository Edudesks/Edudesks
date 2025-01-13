import UploadDialogComponent from "@/components/StudentComponent/UploadDialogComponent";
import React, { useEffect, useState } from "react";
import withProtectedRoute from '@/hoc/ProtectedRoute';
import { FormProvider, useForm } from "react-hook-form";
import { makeApiCall } from '@/utils/api';

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
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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
      const handleImageUpload = (file: File) => setUploadedImage(file);
      const handleFileUpload = (file: File) => setUploadedFile(file);
    
      const onSubmit = async (data: employeeFormData) => {
        try {
          let formData = new FormData();
      
          formData.append("personal[otherName]", data.personal.otherName);
          formData.append("personal[lastName]", data.personal.lastName);
          formData.append("personal[email]", data.personal.email);
          formData.append("personal[gender]", data.personal.gender.join(","));
          formData.append("personal[dateOfBirth]", data.personal.dateOfBirth);
          formData.append("personal[nationalId]", data.personal.nationalId);
          formData.append("personal[bankAccountNumber]", data.personal.bankAccountNumber);
          formData.append("personal[bankAccountHolder]", data.personal.bankAccountHolder);
          formData.append("personal[bankName]", data.personal.bankName);
          formData.append("personal[expectedSalary]", data.personal.expectedSalary);
      
          formData.append("position[department]", data.position.department);
          formData.append("position[role]", data.position.role);
      
          formData.append("contact[phoneNumber]", data.contact.phoneNumber);
          formData.append("contact[residentialAddress]", data.contact.residentialAddress);
      
          formData.append("education[levelOfEducation]", data.education.levelOfEducation);
          formData.append("education[institution]", data.education.institution);
      
          if (uploadedImage) {
            formData.append("profilePicture", uploadedImage, uploadedImage.name);
          }
          if (uploadedFile) {
            formData.append("cv", uploadedFile, uploadedFile.name);
            formData.append("transcript", uploadedFile, uploadedFile.name);
          }
      
          console.log("Form Data Here you go:\n");
          formData.forEach((value, key) => console.log(key, value));
      
          const response = await makeApiCall('POST','/employee/add-employee', formData);
          console.log(response)
          // if (!response.ok) {
          //   throw new Error(`HTTP error! status: ${response.status}`);
          // }
      
          // const responseData = await response.json();
          console.log("Employee added successfully:", response.payload);
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
            <form
              id="employeeForm"
              action=""
              className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-[1.5625rem] lg:gap-x-[3.375rem] w-full"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
            <div className="flex gap-[1.5625rem] self-start justify-start">
              <UploadDialogComponent uploadType="image" onFileUpload={handleImageUpload} />
              <UploadDialogComponent uploadType="file" onFileUpload={handleFileUpload} />
            </div>
              {/* -------- last name -------- */}
              <InputField
                id="employee-last-name"
                label="Last Name*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee last name"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.lastName")}
                error={errors.personal?.lastName?.message}
              />
              {/* -------- other names -------- */}
              <InputField
                label={"Other Names*"}
                id={"employee-other-names"}
                placeholder={"Enter employee first name / middle name"}
                type={"text"}
                icon={UserIcon}
                className={"py-2.5 px-9"}
                {...register("personal.otherName")}
                error={errors.personal?.otherName?.message}
              />
              {/* -------- email-address -------- */}
              <InputField
                label={"Email Address*"}
                className={"py-2.5 px-9"}
                id={"employee-email-address"}
                placeholder={"Enter email address"}
                type={"email"}
                icon={Mail01Icon}
                {...register("personal.email")}
                error={errors.personal?.email?.message}
              />
              {/* -------- employee-phone-number -------- */}
              <InputField
                label={"Phone Number*"}
                className={"py-2.5 px-9"}
                id={"employee-phone-number"}
                placeholder={"000-0000-000"}
                type={"text"}
                icon={Call02Icon}
                {...register("contact.phoneNumber")}
                error={errors.contact?.phoneNumber?.message}
              />
              {/* -------- gender -------- */}
              <div className="flex flex-col gap-[0.4375rem]">
                <GenderField fieldName={"personal.gender"} />
                {errors.personal?.gender?.message && (
                  <p className="self-start text-sm text-[var(--danger)] mt-1">
                    {errors.personal?.gender?.message}
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
                    {...register("personal.dateOfBirth")}
                  />
                  {errors.personal?.dateOfBirth?.message && (
                    <p className="self-start text-sm text-[var(--danger)] mt-1">
                      {errors.personal?.dateOfBirth?.message}
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
                {...register("contact.residentialAddress")}
                error={errors.contact?.residentialAddress?.message}
              />
              {/* -------- national id number -------- */}
              <InputField
                label={"National Identification Number*"}
                className={"py-2.5 px-9"}
                id={"employee-national-id-number"}
                placeholder={"Enter national ID number"}
                type={"text"}
                icon={Mail01Icon}
                {...register("personal.nationalId")}
                error={errors.personal?.nationalId?.message}
              />
              {/* -------- institution -------- */}
              <InputField
                label={"Institution*"}
                className={"py-2.5 px-9"}
                id={"employee-institution"}
                placeholder={"Enter employee's institution"}
                type={"text"}
                icon={Location04Icon}
                {...register("education.institution")}
                error={errors.education?.institution?.message}
              />
              {/* -------- degree program/qualification -------- */}
              <InputField
                label={"Degree Program (Qualification)*"}
                className={"py-2.5 px-9"}
                id={"employee-qualification"}
                placeholder={"Enter qualification"}
                type={"text"}
                icon={Mail01Icon}
                {...register("education.levelOfEducation")}
                error={errors.education?.levelOfEducation?.message}
              />
              {/* -------- department -------- */}
              <InputField
                id="employee-department"
                label="Department*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's department"}
                type={"text"}
                icon={UserIcon}
                {...register("position.department")}
                error={errors.position?.department?.message}
              />
              {/* -------- role -------- */}
              <InputField
                id="employee-role"
                label="Role*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's role"}
                type={"text"}
                icon={UserIcon}
                {...register("position.role")}
                error={errors.position?.role?.message}
              />
              {/* -------- bank account number -------- */}
              <InputField
                id="employee-bank-account-number"
                label="Bank Account Number*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account number"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.bankAccountNumber")}
                error={errors.personal?.bankAccountNumber?.message}
              />
              {/* -------- bank account holder -------- */}
              <InputField
                id="employee-bank-account-holder"
                label="Bank Account Holder*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account holder's name"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.bankAccountHolder")}
                error={errors.personal?.bankAccountHolder?.message}
              />
              {/* -------- bank name -------- */}
              <InputField
                id="employee-bank-name"
                label="Name of bank*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's bank account number"}
                type={"text"}
                icon={UserIcon}
                {...register("personal.bankName")}
                error={errors.personal?.bankName?.message}
              />
              {/* -------- expected salary -------- */}
              <InputField
                id="employee-expected-salary"
                label="Expected Salary*"
                className={"py-2.5 px-9"}
                placeholder={"Enter employee's salary"}
                type={"text"}
                icon={MoneyAdd02Icon}
                {...register("personal.expectedSalary")}
                error={errors.personal?.expectedSalary?.message}
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
