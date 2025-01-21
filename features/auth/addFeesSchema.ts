import z from "zod";

export const addFeesSchema = z.object({
  studentFullName: z.string().min(1, { message: "Last name bawo" }),
  studentClass: z.string().min(1),
  feesDescription: z
    .string()
    .min(1, { message: "Enter fee's description" }),
  amountPaid: z
    .string()
    .regex(/^\d{11}$/, "Phone number must contain only digits."),
  paymentMethod: z.string().min(1, { message: "Enter payment method" }),
  receiverAccountDetails: z
    .string()
    .regex(/^\d{8,12}$/, "Bank account details must contain only digits."),
  senderAccountDetails: z
    .string()
    .regex(/^\d{8,12}$/, "Bank account details must contain only digits."),
  senderAccountHolderName: z
    .string()
    .min(1, "Please enter account holder name."),
});

export type addFeesFormData = z.infer<typeof addFeesSchema>;
