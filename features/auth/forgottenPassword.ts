import { z, ZodType } from "zod";

export type ForgotPasswordFormData = {
  schoolEmail: string;
  password: string;
  confirmPassword: string;
};

export const forgotPasswordSchema: ZodType<ForgotPasswordFormData> = z.object({
  schoolEmail: z.string().email('Invalid email address, try again').min(2, 'School email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
});
