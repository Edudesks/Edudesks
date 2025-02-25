import z from "zod";

export const addFeesSchema = z.object({
  studentID: z.string().min(1, { message: "Last name bawo" }),
  feesDescription: z
    .string()
    .min(1, { message: "Enter fee's description" }),
  amountPaid: z
    .string()
    .regex(/^\d{11}$/, "Phone number must contain only digits."),
  paymentMethod: z.string().min(1, { message: "Enter payment method" }),
  senderAccountHolderName: z
    .string()
    .min(1, "Please enter account holder name."),
});

export type addFeesFormData = z.infer<typeof addFeesSchema>;
