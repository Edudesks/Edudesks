import { z, ZodType } from "zod";

export type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export const resetPassword: ZodType<ResetPasswordForm> = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
}) .refine((data) => data.password === data.confirmPassword, {
    message: "Re-enter the password correctly",
    path: ["confirmPassword"],
  });