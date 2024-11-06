import React from "react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import { openSans } from "@/app/fonts/fonts";
import { otpSchema, OTPFormData } from "@/features/auth/otpSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../app/globals.css";
import { useRouter } from "next/router";
import { Loading01Icon } from "hugeicons-react";

/**
 * TODO: remove all console.logs
 * TODO: work with backend
 * * onSubmit function
 * Combines the individual OTP fields into a single string and checks it against `testOTP`.
 * If OTP is correct, navigates to another page.
 *
 * * handleResendClick function
 * Triggers when the "Resend" link is clicked.
 * Sets the resendMessage state to true to display a success message, and resets after 5 seconds.
 *
 * * handleInputChange function
 * Restricts each input field to accept only a single digit and updates the value in React Hook Form.
 */

const Verification: React.FC = () => {
  const router = useRouter();

  // State to control whether the "OTP has been sent" message is displayed
  const [resendOTP, setResendOTP] = React.useState(false);

  // Initialize React Hook Form with Zod validation schema for OTP input
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitted, isValidating },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    mode: "onSubmit",
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
  });

  const onSubmit = (data: OTPFormData) => {
    const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    console.log(`combinedOTP: ${combinedOTP}`);
    console.log(`validatedData`, data);
    router.push("/");
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

  // ------ changing button color dependent on form validation ------
  // Watch individual OTP fields to check if all fields are filled
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
    <div className="flex flex-col items-center justify-center pt-[1.75rem] lg:pt-[2.75rem] px-[1.125rem] lg:pl-[5.625rem] text-[var(--primary-text-color)] h-screen relative">
      <div className="absolute top-0 left-0 pt-[1.75rem] lg:pt-[2.75rem] pl-[1.125rem] lg:pl-[5.625rem]">
        <AuthentificationLogo />
      </div>
      {/* -------- otp form -------- */}
      <div
        className={`${openSans.className} lg:rounded-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:p-8 w-full max-w-[41.3125rem] flex flex-col justify-center items-center gap-[2.8125rem] lg:shadow-custom-lg`}
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
            <div>
              <div className="flex justify-between w-full">
                {[0, 1, 2, 3].map((index) => (
                  <Controller
                    key={index}
                    name={`otp${index + 1}` as keyof OTPFormData}
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
          {/* -------- form buttons submit and cancel -------- */}
          <div className="flex flex-col gap-8 w-full">
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
              onClick={() => router.push("/signup")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;
