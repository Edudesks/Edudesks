import { z, ZodType } from "zod";

export type VerificationCodeFormData = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
};

export const verificationCodeSchema: ZodType<VerificationCodeFormData> = z.object({
  code1: z.string().length(1, "Each code field must contain 1 character").regex(/^[0-9]$/, "Each code field must be a digit"),
  code2: z.string().length(1, "Each code field must contain 1 character").regex(/^[0-9]$/, "Each code field must be a digit"),
  code3: z.string().length(1, "Each code field must contain 1 character").regex(/^[0-9]$/, "Each code field must be a digit"),
  code4: z.string().length(1, "Each code field must contain 1 character").regex(/^[0-9]$/, "Each code field must be a digit"),
});
