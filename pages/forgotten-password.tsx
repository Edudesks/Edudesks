import "../app/globals.css";
import { inter, openSans } from "@/app/fonts/fonts";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordFormData, forgotPasswordSchema} from "@/features/auth/forgottenPassword";
import { Mail01Icon, InformationCircleIcon } from "hugeicons-react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ForgottenPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const submitData = (data: ForgotPasswordFormData) =>
    {
      console.log("Code Successfully Sent", data);
    };

  return (
    <>
      <div
        className={`${openSans.className} flex flex-col justify-center md:flex-row gap-[3.375rem] md:gap-[4rem] h-screen whitespace-nowrap pb-[4.1875rem] md:pb-0 md:overflow-hidden overflow-auto`}
      >
        {/* -------- left half of signup page -------- */}
        <section className="flex flex-col align-top gap-[1.34125rem] md:gap-[4rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] md:px-[3.9375rem] md:py-[1.875rem] rounded-t-none rounded-b-[30px] md:rounded-[30px] max-h-[24.5625rem] md:max-h-full md:w-[44.875rem]">
          <AuthentificationLogo />
          <div className="w-[16.625rem] md:w-[100%] self-center">
            <Image
              src={"/forgottenPasswordIcon.svg"}
              alt="login image"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
          </div>
        </section>

        {/* -------- form input of signup page -------- */}
        <div className="flex flex-col gap-9 items-center justify-start md:justify-center h-full px-[1.125rem] md:p-0 md:w-[35.9375rem] md:mr-2.5">
          {/* -------- form heading -------- */}
          <div className="flex flex-col gap-[0.6875rem] w-[80%] whitespace-normal self-start">
            <h2
              className={`text-[var(--primary-text-color)] text-4xl md:text-[2.5rem] font-bold leading-snug tracking-[0.1px]`}
            >
              Forgot Password?
            </h2>
            <p className="text-[18px] leading-8 ">
              No problem! Just enter the email address you used to register, and
              we&apos;ll send you a code.
            </p>
          </div>

          {/* -------- form details and input -------- */}
          <form
            className="w-full flex flex-col gap-9 md:w-[80%] self-start"
            action=""
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- form details only -------- */}
            <div className="flex flex-col gap-5 ">
              {/* -------- school email -------- */}
              <div className="flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="school-email"
                  className="text-md text-[var(--primary-text-color)] font-[700]"
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
                    aria-label="Enter your school email"
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
                    <p className="text-md leading-normal">
                      {errors.schoolEmail.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* button container */}
            <div className="flex flex-col justify-center w-full items-center gap-[32px]">
              <button
                className={`${
                  isValid ? "bg-[var(--primary)]" : "bg-[var(--grey)]"
                } px-2.5 py-[0.9375rem] rounded-[33px] text-md font-bold leading-5 text-[var(--secondary-text-color)] w-full`}
                type="submit"
                disabled={!isValid}
              >
                Send Code
              </button>

              <button
                className={`border border-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-md font-bold leading-5 w-full text-[var(--primary)]`}
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
