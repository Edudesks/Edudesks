import AuthentificationLogo from "@/components/AuthentificationLogo";
import "../app/globals.css";
import React, { useState } from "react";
import Image from "next/image";
import { inter, openSans } from "@/app/fonts/fonts";
import Link from "next/link";
import {
  Mail01Icon,
  LockPasswordIcon,
  ViewIcon,
  ViewOffSlashIcon,
  InformationCircleIcon,
} from "hugeicons-react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/features/auth/loginSchema";

/**
 *
 * TODO: For backend, functionality for save details
 * TODO: Form validation
 * TODO: Ask about password icon
 * TODO: Ask about the checkbox
 * TODO: Minimum requirements for password
 * TODO: hover state?
 */

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const submitData = (data: LoginFormData) => {
    console.log("Registration Successful", data);
  };

  // show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className={`${openSans.className} flex flex-col lg:flex-row gap-[3.375rem] lg:gap-[8.5625rem] h-screen whitespace-nowrap`}
      >
        {/* -------- left half of signup page -------- */}
        <div className="flex flex-col align-top gap-[1.34125rem] lg:gap-[8.9375rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-[30px] max-h-[24.5625rem] lg:max-h-full lg:w-[44.875rem]">
          <AuthentificationLogo />
          <div className="w-[16.625rem] lg:w-[33.6875rem] self-center">
            <Image
              src={"/loginIcon.svg"}
              alt="login image"
              width={539}
              height={539}
            />
          </div>
        </div>
        {/* -------- form input of signup page -------- */}
        <div className="flex flex-col gap-9 items-center justify-start lg:justify-center h-full px-[1.125rem] lg:p-0 lg:w-[35.9375rem] lg:mr-2.5">
          {/* -------- form heading -------- */}
          <div className="flex flex-col gap-[0.6875rem] self-start">
            <h2
              className={`text-[var(--primary-text-color)] text-4xl lg:text-[2.5rem] font-bold leading-snug tracking-[0.1px]`}
            >
              Hi,Welcome back
            </h2>
            <p className="text-xl leading-5">
              Don’t have an account?&nbsp;&nbsp;
              <Link
                href={"/signup"}
                className={`${inter.className} text-[var(--secondary)] font-semibold`}
              >
                Sign Up
              </Link>
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
                {/* -------- school email -------- */}
                <div className="flex flex-col gap-[0.4375rem]">
                  <label
                    htmlFor="school-email"
                    className="text-sm text-[var(--primary-text-color)]"
                  >
                    School Email
                  </label>
                  <div className="w-full flex relative items-center text-[var(--grey)]">
                    <input
                      className={`border ${
                        errors.schoolEmail
                          ? "border-[var(--danger)]"
                          : "border-[var(--border)]"
                      } rounded-[10px] py-2.5 px-9 w-full placeholder:text-[var(--grey)] ${
                        errors.schoolEmail
                          ? "text-[var(--danger)]"
                          : "text-[var(--primary-text-color)]"
                      } focus:outline-none autofill:bg-none`}
                      type="email"
                      id="school-email"
                      placeholder="Enter your school email"
                      required
                      {...register("schoolEmail")}
                    />
                    <span className="absolute left-2.5">
                      <Mail01Icon
                        color={errors.schoolEmail ? "#f65252" : "#59676e"}
                        size={18}
                      />
                    </span>
                  </div>
                  {errors.schoolEmail && (
                    <div className="flex gap-[7px] text-[var(--danger)] items-center">
                      <InformationCircleIcon size={"18px"} />
                      <p className="text-sm leading-normal">
                        {errors.schoolEmail.message}
                      </p>
                    </div>
                  )}
                </div>
                {/* -------- password -------- */}
                <div className="flex flex-col gap-[0.4375rem]">
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
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      // required
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
                {/* -------- remeber me and forgot password -------- */}
              </div>
              {/* -------- remember checkbox -------- */}
              <div className="flex justify-between">
                <div className="flex items-center gap-2 border-[#D0D5DD]">
                  <input
                    type="checkbox"
                    name="save-details"
                    id="save-details"
                    className="w-4 h-4 rounded border appearance-none"
                  />
                  <label htmlFor="save-details">Save details</label>
                </div>
                <Link href={"/forgot-password"} className="text-sm leading-5 text-[var(--secondary)]">Forgot password</Link>
              </div>
            </div>
            <button
              className={`${
                isValid ? "bg-[var(--primary)]" : "bg-[var(--grey)]"
              } px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)]`}
              type="submit"
              disabled={!isValid}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
