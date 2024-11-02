import { z, ZodType } from "zod";

export type LoginFormData= {
  schoolEmail: string;
  password: string;
  rememberMe?: boolean;
};

export const loginSchema: ZodType<LoginFormData> = z
  .object({
    schoolEmail: z.string().email('Invalid email').min(0, 'School email is required'),
    password: z.string().min(6, 'Wrong Password, confirm password'),
    rememberMe: z.boolean().optional(),
  });
