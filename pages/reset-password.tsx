import AuthentificationLogo from "@/components/AuthentificationLogo";
import "../app/globals.css";
import React, { useState } from "react";
import Image from "next/image";
import { inter, openSans } from "@/app/fonts/fonts";
import {
  SchoolIcon,
  Mail01Icon,
  LockPasswordIcon,
  ViewIcon,
  DangerIcon,
  ViewOffSlashIcon,
  InformationCircleIcon,
} from "hugeicons-react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordForm, resetPassword} from "@/features/auth/resetPassword";
import { useRouter } from 'next/router';

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    watch
  } = useForm<ResetPasswordForm>({ resolver: zodResolver(resetPassword), mode: "onSubmit" });

  const submitData = (data: ResetPasswordForm) => {
    console.log("Password Reset Successful", data);
    router.push('/forgot-verification-success')
  };

  // show/hide password
  const handleShowPassword = () => {
    setShowPassword(prev =>!prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev =>!prev);
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const allFieldsFilled = password && confirmPassword;

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

  return (
    <>
      <div
        className={`${openSans.className} flex flex-col lg:flex-row gap-[3.375rem] lg:gap-[5rem] h-screen whitespace-nowrap pb-[4.1875rem] lg:pb-0 bg-white w-full overflow-x-auto lg:overflow-hidden`}
      >
        {/* -------- left half of signup page -------- */}
        <div className="flex flex-col align-top gap-[1.34125rem] lg:gap-[2rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-[30px] max-h-[24.5625rem] lg:max-h-full lg:w-full">
          <AuthentificationLogo />
          <div className="w-[16.625rem] lg:w-full self-center">
          <Image
              src={"/forgottenPasswordIcon.svg"}
              alt="forgotton password image"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
              className="lg:ml-[-3rem]"
            />
          </div>
        </div>
        {/* -------- form input of signup page -------- */}
        <div className="flex flex-col gap-9 items-center justify-start lg:justify-center h-full px-[1.125rem] lg:p-0 lg:w-full lg:mr-2.5 ">
          {/* -------- form heading -------- */}
          <div className="flex flex-col gap-[0.6875rem] w-full lg:w-[80%] whitespace-normal self-start">
            <h2
              className={`text-[var(--primary-text-color)] text-4xl lg:text-[2.5rem] font-bold leading-snug tracking-[0.1px]`}
            >
              Reset Password
            </h2>
            <p className="text-[15px] sm:text-[18px] leading-8">
            choose a new password for your account
            </p>
          </div>
          {/* -------- form details and input -------- */}
          <form
            className="w-full flex flex-col gap-9 lg:max-w-[26.625rem] self-start"
            action=""
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- form details and save details button -------- */}
            <div className="flex flex-col gap-9">
              {/* -------- form details only -------- */}
              <div className="flex flex-col gap-5 ">
                {/* -------- password -------- */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="password"
                    className="text-sm text-[var(--primary-text-color)]"
                  >
                    Choose Password
                  </label>
                  <div className="w-full flex relative items-center text-[var(--grey)]">
                    <button
                      className="absolute right-2.5"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <ViewOffSlashIcon
                          color={errors.password ? "#f65252" : "#59676e"}
                          size={18}
                        />
                      ) : (
                        <ViewIcon
                          color={errors.password ? "#f65252" : "#59676e"}
                          size={18}
                        />
                      )}
                    </button>
                    <input
                      className={`border ${
                        errors.password
                          ? "border-[var(--danger)]"
                          : "border-[var(--border)]"
                      } rounded-[10px] py-2.5 px-9 w-full placeholder:text-[var(--grey)] ${
                        errors.password
                          ? "text-[var(--danger)]"
                          : "text-[var(--primary-text-color)]"
                      } focus:outline-none autofill:bg-none`}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Enter your password"
                      required
                      {...register("password")}
                    />
                    <span className="absolute left-2.5">
                      <LockPasswordIcon
                        color={errors.password ? "#f65252" : "#59676e"}
                        size={18}
                      />
                    </span>
                  </div>
                  {errors.password && (
                    <div className="flex gap-[7px] text-[var(--danger)] items-center">
                      <InformationCircleIcon size={"18px"} />
                      <p className="text-sm leading-normal">
                        {errors.password.message}
                      </p>
                    </div>
                  )}
                </div>
                {/* -------- confirm password -------- */}
                <div className="flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="confirm-password"
                    className="text-sm text-[var(--primary-text-color)]"
                  >
                    Confirm Password
                  </label>
                  <div className="w-full flex relative items-center text-[var(--grey)]">
                    <button className="absolute right-2.5" onClick={handleShowConfirmPassword}>
                    {showConfirmPassword ? (
                        <ViewOffSlashIcon
                          color={errors.password ? "#f65252" : "#59676e"}
                          size={18}
                        />
                      ) : (
                        <ViewIcon
                          color={errors.password ? "#f65252" : "#59676e"}
                          size={18}
                        />
                      )}
                    </button>
                    <input
                      className={`border ${
                        errors.confirmPassword
                          ? "border-[var(--danger)]"
                          : "border-[var(--border)]"
                      } rounded-[10px] py-2.5 px-9 w-full placeholder:text-[var(--grey)] ${
                        errors.confirmPassword
                          ? "text-[var(--danger)]"
                          : "text-[var(--primary-text-color)]"
                      } focus:outline-none autofill:bg-none`}
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirm-password"
                      placeholder="Enter your password"
                      required
                      {...register("confirmPassword")}
                    />
                    <span className="absolute left-2.5">
                      <LockPasswordIcon
                        color={errors.confirmPassword ? "#f65252" : "#59676e"}
                        size={18}
                      />
                    </span>
                  </div>
                  {errors.confirmPassword && (
                    <div className="flex gap-[7px] text-[var(--danger)] items-center">
                      <InformationCircleIcon size={"18px"} />
                      <p className="text-sm leading-normal">
                        {errors.confirmPassword.message}
                      </p>
                    </div>
                  )}
                </div>
            </div>
            <button
              className={`${buttonColor} px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)]`}
              type="submit"
             
            >
              Reset password
            </button>

            <button
                className={`border border-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 w-full text-[var(--primary)] bg-[var(--secondary-text-color)]`}
                type="button"
                onClick={() => router.push("/login")} 
              >
                Back to login
              </button></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
