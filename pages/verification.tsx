import React, { useEffect, useRef } from "react";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import { openSans } from "@/app/fonts/fonts";
import { Controller, useForm } from "react-hook-form";
import "../app/globals.css";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { createOtp, verifyOtp } from "@/store/slices/authSlice";
import { Loading01Icon } from "hugeicons-react";

type OTPFormData = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
};

const Verification: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email, isSignup } = router.query
  const isSignupBoolean = isSignup === "true"? true : false
  const [resendOTP, setResendOTP] = React.useState(false);

  useEffect(() => {
    if (!email) {
      router.push("/login");
    }
  }, [email, router]);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitted, isValidating },
  } = useForm<OTPFormData>({
    mode: "onSubmit",
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
  });

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const onSubmit = async (data: OTPFormData) => {
    const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    const otpData = { email: email || "", otp: combinedOTP, isSignup: isSignupBoolean || false };
    const otpResponse = await dispatch(verifyOtp(otpData));
    if (otpResponse.type === "auth/verifyotp/fulfilled") {
      if (isSignupBoolean){
        router.push({
          pathname: "/otp-confirmation",
          query: { reason: 'signup'},
        })
      }else {
        router.push({
          pathname: "/otp-confirmation",
          query: { reason: 'login'},
        })
      }
    } else {
      console.log(otpResponse.type)
      console.error("Failed to send OTP");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      setValue(`otp${index + 1}` as keyof OTPFormData, value);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setValue(`otp${index + 1}` as keyof OTPFormData, "");

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
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
  } else if (isSubmitted) {
    buttonColor = "bg-[var(--secondary)]";
  }

  const handleResendClick = async() => {
    if (email){
      const otpResponse = await dispatch(createOtp(email));
      if (otpResponse.type === "auth/createotp/fulfilled") {
        
        console.log("OTP sent successfully:", otpResponse.payload);
      } else {
        console.error("Failed to send OTP");
      }
      setResendOTP(true)
    };
  }

  return (
    <div className="flex flex-col items-center justify-center pt-[1.75rem] lg:pt-[2.75rem] px-[1.125rem] lg:pl-[5.625rem] text-[var(--primary-text-color)] h-screen relative">
      <div className="absolute top-0 left-0 pt-[1.75rem] lg:pt-[2.75rem] pl-[1.125rem] lg:pl-[5.625rem]">
        <AuthentificationLogo />
      </div>
      <div
        className={`${openSans.className} lg:rounded-[1.125rem] lg:border lg:border-solid lg:border-[var(--border)] lg:p-8 w-full max-w-[41.3125rem] flex flex-col justify-center items-center gap-[2.8125rem] lg:shadow-custom-lg`}
      >
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
          <div className="flex flex-col gap-[3.125rem]">
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
                        ref={(el) => (inputRefs.current[index] = el!)}
                        type="text"
                        maxLength={1}
                        className={`w-[4.6875rem] h-[4.6875rem] border border-solid border-[var(--border)] rounded-[0.9375rem] bg-[var(--secondary-text-color)] p-2.5 text-center flex justify-center items-center text-2xl leading-[20px] focus:outline-none autofill:bg-none shadow-custom-lg lg:shadow-none`}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    )}
                  />
                ))}
              </div>
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
          <div className="flex flex-col gap-8 w-full">
            <button
              className={`${buttonColor}
              px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)] w-full`}
              type="submit"
            >
              {isValidating ? <Loading01Icon /> : "Verify code"}
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
