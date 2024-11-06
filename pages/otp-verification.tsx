import React from "react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import { openSans } from "@/app/fonts/fonts";
import { otpSchema, OTPFormData } from "@/features/auth/otpSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const OTPVerification = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    mode: "onSubmit",
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
  });

  const testOTP = 1111;

  const onSubmit = (data: OTPFormData) => {
    const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    console.log(`combinedOTP: ${combinedOTP}`);
    console.log(`validatedData`, data);

    if (testOTP === Number(combinedOTP)) {
      console.log(`OTP is correct`);
    } else {
      console.log(`OTP is incorrect`);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      setValue(`otp${index + 1}` as keyof OTPFormData, value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[1.75rem] lg:pt-[2.75rem] px-[1.125rem] lg:pl-[5.625rem] text-[var(--primary-text-color)]">
      <div className="self-start">
        <AuthentificationLogo />
      </div>
      {/* -------- otp form -------- */}
      <div
        className={`${openSans.className} lg:rounded-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:p-8 w-full max-w-[41.3125rem] flex flex-col justify-center items-center gap-[2.8125rem]`}
      >
        {/* -------- heading -------- */}
        <div
          className={`text-[var(--primary-text-color)] flex flex-col gap-[0.6875rem] w-full max-w-[26.625rem]`}
        >
          <h1 className={`font-bold text-4xl lg:text-[2.5rem] leading-snug`}>
            Verify with OTP
          </h1>
          <p className="text-xl leading-[23px]">
            To ensure the security of your account, please verify your email
          </p>
        </div>
        <form
          action=""
          className="flex flex-col justify-between w-full max-w-[26.625rem] gap-[2.8125rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* -------- input and otp resend -------- */}
          <div className="flex flex-col gap-[3.125rem]">
            {/* -------- main otp input -------- */}
            <div className="flex justify-between w-full">
              {[0, 1, 2, 3].map((index) => (
                <Controller
                  key={index}
                  name={`otp${index + 1}` as any}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={1}
                      className="w-[4.6875rem] h-[4.6875rem] border border-solid border-[var(--border)] rounded-[0.9375rem] bg-[var(--secondary-text-color)] p-2.5 text-center flex justify-center items-center text-2xl leading-[20px] focus:outline-none autofill:bg-none"
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  )}
                />
              ))}
            </div>
            <p className="text-xl whitespace-nowrap leading-[20px]">
              Didn’t receive the OTP?&nbsp;&nbsp;
              <span className="text-[var(--secondary)] font-semibold">
                Resend
              </span>
            </p>
          </div>
          {errors.otp && (
            <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
          )}
          {/* -------- form buttons -------- */}
          <div className="flex flex-col gap-8 w-full">
            <button
              className={`${
                isValid ? "bg-[var(--primary)]" : "bg-[var(--grey)]"
              } px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)] w-full`}
              type="submit"
            >
              Verify code
            </button>
            <button
              className={`bg-[var(--secondary-text-color)] text-[var(--primary)] border border-solid border-[var(--primary)] hover:text-[var(--secondary-text-color)] hover:bg-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 w-full`}
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
