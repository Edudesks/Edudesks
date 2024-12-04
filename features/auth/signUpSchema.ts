import { z, ZodType } from "zod";

export type SignUpFormData= {
  schoolName: string;
  email: string;
  password: string;
  confirmPassword: string;
  saveDetails?: boolean;
};

export const signUpSchema: ZodType<SignUpFormData> = z
  .object({
    schoolName: z.string().min(1, 'School name is required'),
    email: z.string().email('Invalid email address, try again').min(2, 'School email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
    saveDetails: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Re-enter the password correctly",
    path: ["confirmPassword"],
  });
