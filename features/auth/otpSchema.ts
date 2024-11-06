import { z, ZodType } from "zod";

export type OTPFormData = {
  otp: string;
};

export const otpSchema: ZodType<OTPFormData> = z.object({
    otp: z.string().length(4, 'Invalid OTP').regex(/^\d+$/, 'Invalid OTP'),
})