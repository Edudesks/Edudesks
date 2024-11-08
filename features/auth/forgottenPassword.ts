import { z, ZodType } from "zod";

export type ForgotPasswordFormData = {
  schoolEmail: string;
  password: string;
};

export const forgotPasswordSchema: ZodType<ForgotPasswordFormData> = z.object({
  schoolEmail: z.string().email("Invalid email").min(0, 'School email is required'),
  password: z.string().min(6, 'Wrong Password, confirm password'),
});
