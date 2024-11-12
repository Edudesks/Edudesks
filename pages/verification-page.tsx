import "../app/globals.css";
import { inter, openSans } from "@/app/fonts/fonts";
import AuthentificationLogo from "@/components/AuthentificationLogo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerificationCodeFormData, verificationCodeSchema} from "@/features/auth/codeVerify";
import { useRouter } from "next/router";

export default function ForgottenPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<VerificationCodeFormData>({
    resolver: zodResolver(verificationCodeSchema),
    mode: "onSubmit",
  });

  const submitData = (data: VerificationCodeFormData) => {
    console.log("Code Successfully Sent", data);
  };

  return (
    <>
      <div
        className={`${openSans.className} flex flex-col justify-center lg:flex-row gap-[3.375rem] lg:gap-[4rem] h-screen whitespace-nowrap pb-[4.1875rem] lg:pb-0 lg:overflow-hidden overflow-auto`}
      >
        {/* -------- left half of signup page -------- */}
        <section className="flex flex-col align-top gap-[1.34125rem] lg:gap-[4rem] bg-[var(--background)] h-full pt-[1.625rem] pl-[1.125rem] lg:px-[3.9375rem] lg:py-[1.875rem] rounded-t-none rounded-b-[30px] lg:rounded-[30px] max-h-[24.5625rem] lg:max-h-full lg:w-[44.875rem]">
          <AuthentificationLogo />
          <div className="w-[16.625rem] lg:w-[100%] self-center">
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
        <div className="flex flex-col gap-9 items-center justify-start lg:justify-center h-full px-[1.125rem] lg:p-0 lg:w-[35.9375rem] lg:mr-2.5">
          {/* -------- form heading -------- */}
          <div className="flex flex-col gap-[0.6875rem] w-[80%] whitespace-normal self-start">
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
            {/* -------- code input fields -------- */}
            <div className="flex gap-5">
              <input
                {...register("code1")}
                className="w-[75px] h-[75px] rounded-[15px] bg-[var(--border)] text-center text-xl"
              />
              <input
                {...register("code2")}
                className="w-[75px] h-[75px] rounded-[15px] bg-[var(--border)] text-center text-xl"
              />
              <input
                {...register("code3")}
                className="w-[75px] h-[75px] rounded-[15px] bg-[var(--border)] text-center text-xl"
              />
              <input
                {...register("code4")}
                className="w-[75px] h-[75px] rounded-[15px] bg-[var(--border)] text-center text-xl"
              />
            </div>

            {/* Error messages */}
            <div className="flex gap-5 text-red-500 text-sm">
              {errors.code1 && <p>{errors.code1.message}</p>}
              {errors.code2 && <p>{errors.code2.message}</p>}
              {errors.code3 && <p>{errors.code3.message}</p>}
              {errors.code4 && <p>{errors.code4.message}</p>}
            </div>

            {/* didn't receive code */}
            <div className="flex gap-4">
              <span className="text-xl leading-5">Didn’t receive the OTP?</span>
              <span className={`${inter.className} text-[var(--secondary)] font-semibold`}>Resend</span>
            </div>

            {/* button container */}
            <div className="flex flex-col justify-center w-full items-center gap-[32px]">
              <button
                className={`${
                  isValid ? "bg-[var(--primary)]" : "bg-[var(--grey)]"
                } px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 text-[var(--secondary-text-color)] w-full`}
                type="submit"
                disabled={!isValid}
              >
                Verify code
              </button>

              <button
                className="border border-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] text-lg font-bold leading-5 w-full text-[var(--primary)]"
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
