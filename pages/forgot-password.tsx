import "../app/globals.css";
import { inter, openSans } from "@/app/fonts/fonts";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordFormData, forgotPasswordSchema} from "@/features/auth/forgottenPassword";
import { Mail01Icon, InformationCircleIcon, Loading01Icon} from "hugeicons-react";
import { useRouter } from 'next/router';
export default function ForgottenPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted, isValidating},
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const submitData = (data: ForgotPasswordFormData) => {
    console.log("Code Successfully Sent", data);
      router.push('/forgot-verification-page');
  };

    const schoolEmail = watch("schoolEmail");
    const allFieldsFilled = schoolEmail

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
        <section className="flex flex-col align-top gap-[1.34125rem] lg:gap-[2rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-[30px] max-h-[24.5625rem] lg:max-h-full lg:w-full">
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
        </section>

        {/* -------- form input of signup page -------- */}
        <div className="flex flex-col gap-9 items-center justify-start lg:justify-center h-full px-[1.125rem] lg:p-0 lg:w-full lg:mr-2.5">
          {/* -------- form heading -------- */}
          <div className="flex flex-col gap-[0.6875rem] w-full lg:w-[80%] whitespace-normal self-start">
            <h2
              className={`text-[var(--primary-text-color)] text-4xl lg:text-[2.5rem] font-bold leading-snug tracking-[0.1px]`}
            >
              Forgot Password?
            </h2>
            <p className="text-[15px] sm:text-[18px] leading-8 ">
              No problem! Just enter the email address you used to register, and
              we&apos;ll send you a code.
            </p>
          </div>

          {/* -------- form details and input -------- */}
          <form
            className="w-full flex flex-col gap-9 lg:max-w-[26.625rem] self-start"
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- form details only -------- */}
            <div className="flex flex-col gap-5 ">
              {/* -------- school email -------- */}
              <div className="flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="school-email"
                  className="text-lg text-[var(--primary-text-color)] font-[700]"
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
                    // required
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
                    <p className="text-lg leading-normal">
                      {errors.schoolEmail.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

             {/* button container */}
              <button
                className={`${buttonColor} px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)]`}
                type="submit"
              >
                {isValidating ? <Loading01Icon /> : (
                  "Send Code"
                )}
              </button>

              <button
                className={`border border-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--primary)] bg-[var(--secondary-text-color)] mb-2`}
                type="button"
                onClick={() => router.push("/login")}
              >
                Back to login
              </button>
          </form>
        </div>
      </div>
    </>
  );
}