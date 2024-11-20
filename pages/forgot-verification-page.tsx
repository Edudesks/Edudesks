import "../app/globals.css";
import React from "react";
import { openSans } from "@/app/fonts/fonts";
import { Loading01Icon} from "hugeicons-react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerificationCodeFormData, verificationCodeSchema} from "@/features/auth/codeVerify";
import { useRouter } from "next/router";

export default function VerifyForgottonPassword() {
  const router = useRouter();
  const [resendOTP, setResendOTP] = React.useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitted, isValidating },
  } = useForm<VerificationCodeFormData>({
    resolver: zodResolver(verificationCodeSchema),
    mode: "onSubmit",
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
  });

  const submitData = (data: VerificationCodeFormData) => {
    const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    console.log(`combinedOTP: ${combinedOTP}`);
    console.log(`validatedData`, data);
    router.push("/reset-password");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      setValue(`otp${index + 1}` as keyof VerificationCodeFormData, value);
    }
  };

  const [otp1, otp2, otp3, otp4] = [
    watch("otp1"),
    watch("otp2"),
    watch("otp3"),
    watch("otp4"),
  ];
  const allFieldsFilled = otp1 && otp2 && otp3 && otp4;

  let buttonColor;
  if (!allFieldsFilled) {
    buttonColor = "bg-[var(--grey)]";
  } else if (allFieldsFilled && !isSubmitted) {
    buttonColor = "bg-[var(--primary)]";
  } else if (isSubmitted && Object.keys(errors).length > 0) {
    buttonColor = "bg-[var(--secondary)]";
  } else if (isSubmitted && Object.keys(errors).length === 0 && isValid) {
    buttonColor = "bg-[var(--primary)]";
  }

  const handleResendClick = () => {
    setResendOTP(true);
    setTimeout(() => {
      setResendOTP(false);
    }, 5000);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center lg:flex-row gap-[3.375rem] lg:gap-[5rem] h-screen whitespace-nowrap pb-[4.1875rem] lg:pb-0 lg:overflow-hidden overflow-auto`}
      >
        {/* -------- left half of verfication -------- */}
        <section className="flex flex-col align-top gap-[1.34125rem] lg:gap-[2rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-e-[30px] max-h-[24.5625rem] lg:max-h-full lg:w-full">
          <AuthentificationLogo />
          <div className="w-[16.625rem] lg:w-full self-center">
            <Image
              src={"/forgottenPasswordIcon.svg"}
              alt="login image"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
              className="lg:ml-[-3rem]"
            />
          </div>
        </section>

        {/* -------- form input of verfication -------- */}
        <div className="flex flex-col gap-9 items-center justify-start lg:justify-center h-full px-[1.125rem] lg:p-0 lg:w-full lg:mr-2.5">
          {/* -------- form heading -------- */}
          <div className="fflex flex-col gap-[0.6875rem] w-full lg:w-[80%] whitespace-normal self-start">
            <h2
              className={`text-[var(--primary-text-color)] text-4xl lg:text-[2.5rem] font-bold leading-snug tracking-[0.1px]`}
            >
              Verification Code
            </h2>
            <p className="text-[18px] leading-8 ">
              Enter the code that was sent to savage********@gmail.com
            </p>
          </div>

          {/* -------- form details and input -------- */}
          <form
            className="w-full flex flex-col gap-9 lg:w-[80%] self-start"
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- input and otp resend -------- */}
          <div className="flex flex-col gap-[3.125rem]">
            {/* -------- main otp input -------- */}
            <div>
              <div className="flex justify-between w-full">
                {[0, 1, 2, 3].map((index) => (
                  <Controller
                    key={index}
                    name={`otp${index + 1}` as keyof VerificationCodeFormData}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        maxLength={1}
                        className={`w-[4.6875rem] h-[4.6875rem] border border-solid border-[var(--border)] rounded-[0.9375rem] bg-[var(--secondary-text-color)] p-2.5 text-center flex justify-center items-center text-2xl leading-[20px] focus:outline-none autofill:bg-none shadow-custom-lg lg:shadow-none ${
                          errors.otp
                            ? "border-[var(--danger)]"
                            : "border-[var(--border)]"
                        } ${
                          errors.otp
                            ? "text-[var(--danger)]"
                            : "text-[var(--primary-text-color)]"
                        }
                      }`}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    )}
                  />
                ))}
              </div>
              {errors.otp && (
                <p className="text-[var(--danger)] text-lg mt-[1.125rem]">
                  {errors.otp.message}
                </p>
              )}
            </div>
            <p className="text-xl whitespace-nowrap leading-[20px]">
              {resendOTP
                ? "OTP has been sent to the email!"
                : "Didn’t receive the OTP?"}
              &nbsp;&nbsp;
              <span
                className="text-[var(--secondary)] font-semibold cursor-pointer"
                onClick={handleResendClick}
              >
                Resend
              </span>
            </p>
          </div>


            {/* button container */}
            <div className="flex flex-col justify-center w-full items-center gap-[32px]">
            <button
              className={`${buttonColor}
              px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)] w-full`}
              type="submit"
            >
              {isValidating ? <Loading01Icon /> : 'Verify code'}
            </button>
            <button
              className={`bg-[var(--secondary-text-color)] text-[var(--primary)] border border-solid border-[var(--primary)] hover:text-[var(--secondary-text-color)] hover:bg-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 w-full`}
              type="button"
              onClick={() => router.push("/login")}
            >
              Back to login
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
