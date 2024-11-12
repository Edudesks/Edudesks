import { z, ZodType } from "zod";

export type ForgotPasswordFormData = {
  schoolEmail: string;
};

export const forgotPasswordSchema: ZodType<ForgotPasswordFormData> = z.object({
  schoolEmail: z.string().email('Invalid email address, try again').min(2, 'School email is required'),
});
