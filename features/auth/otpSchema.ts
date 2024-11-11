import { z, ZodType } from "zod";

export type OTPFormData = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp? : string;
};

export const testOTP = 1111

export const otpSchema: ZodType<OTPFormData> = z.object({
    otp1: z.string().length(1,).regex(/^\d+$/,),
    otp2: z.string().length(1,).regex(/^\d+$/,),
    otp3: z.string().length(1,).regex(/^\d+$/,),
    otp4: z.string().length(1,).regex(/^\d+$/,),
}).refine((data) => {
    const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    return combinedOTP.length === 4 && /^\d{4}$/.test(combinedOTP) && Number(combinedOTP) === testOTP
},{
    message: "Invalid OTP",
    path: ["otp"]
})