import UploadDialogComponenet from "@/components/StudentComponent/UploadDialogComponenet";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MoneyAdd02Icon } from "hugeicons-react";
import InputField from "@/components/StudentComponent/InputField";
import GeneralButton from "@/components/GeneralButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFeesSchema, addFeesFormData } from "@/features/auth/addFeesSchema";

const AddFees = () => {
  const methods = useForm<addFeesFormData>({
    resolver: zodResolver(addFeesSchema),
    mode: "onSubmit",
  });

  const {
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: addFeesFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col items-center lg:mx-auto lg:pt-[1.375rem] ">
        {/* -------- main employees content -------- */}
        <div className="w-full flex flex-col items-center pb-12 pt-9 px-[1.125rem] lg:p-12 gap-7 lg:gap-[2.0625rem] bg-[#ffffff] max-w-[52.5rem] lg:rounded-[0.8125rem] lg:border lg:border-solid lg:border-[var(--border)]">
          {/* -------- heading -------- */}
          <h1 className="text-[var(--secondary)] font-bold text-xl lg:text-4xl leading-10">
            Add School Fees
          </h1>

          <form
            id="incomeForm"
            action=""
            className="grid gap-y-8 lg:gap-y-[2.6875rem] w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {/* -------- student full name -------- */}
            <InputField
              id="student-full-name"
              label="Student full name*"
              className={"py-2.5 px-9"}
              placeholder={"Enter student full name"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("studentFullName")}
              error={errors.studentFullName?.message}
            />
            {/* -------- student class -------- */}
            <InputField
              label={"Student Class*"}
              id={"student-class"}
              placeholder={"Enter student class"}
              type={"text"}
              icon={MoneyAdd02Icon}
              className={"py-2.5 px-9"}
              {...register("studentClass")}
              error={errors.studentClass?.message}
            />
            {/* -------- fees description -------- */}
            <InputField
              label={"Fees description*"}
              className={"py-2.5 px-9"}
              id={"fees-description"}
              placeholder={"Enter description"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("feesDescription")}
              error={errors.feesDescription?.message}
            />
            {/* -------- amount paid -------- */}
            <InputField
              label={"Amount Paid*"}
              className={"py-2.5 px-9"}
              id={"amount-paid"}
              placeholder={"#500,000"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("amountPaid")}
              error={errors.amountPaid?.message}
            />
            {/* -------- received via -------- */}
            <InputField
              label={"Received VIA*"}
              className={"py-2.5 px-9"}
              id={"payment-method"}
              placeholder={"Enter payment method"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("paymentMethod")}
              error={errors.paymentMethod?.message}
            />
            {/* -------- receiver's account details -------- */}
            <InputField
              label={"Receiver's Account Details*"}
              className={"py-2.5 px-9"}
              id={"receivers-account-details"}
              placeholder={"Enter receiver’s account number and bank"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("receiverAccountDetails")}
              error={errors.receiverAccountDetails?.message}
            />
            {/* -------- sender account details -------- */}
            <InputField
              label={"Sender Account Details*"}
              className={"py-2.5 px-9"}
              id={"sender-account-details"}
              placeholder={"Enter sender’s account number and bank"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("senderAccountDetails")}
              error={errors.senderAccountDetails?.message}
            />
            {/* -------- sender Account Holder’s name -------- */}
            <InputField
              id="sender-account-holders-name*"
              label="Sender Account Holder’s name*"
              className={"py-2.5 px-9"}
              placeholder={"Enter sender’s account name"}
              type={"text"}
              icon={MoneyAdd02Icon}
              {...register("senderAccountHolderName")}
              error={errors.senderAccountDetails?.message}
            />
          </form>
          {/* -------- submit and cancel buttons -------- */}
          <div className="w-full flex justify-center gap-4">
            <GeneralButton
              buttonText={"Submit"}
              size={"large"}
              state={"active"}
              className="w-[14.8125rem] text-lg"
              form={"incomeForm"}
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
    </FormProvider>
  );
};

export default AddFees;
