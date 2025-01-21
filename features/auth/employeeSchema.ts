import z from "zod";

export const employeeSchema = z.object({
  personal: z.object({
    otherName: z.string().min(1, { message: "Enter employee's other name" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .email()
      .min(1, { message: "Enter employee's email address" }),
    gender: z
      .array(z.enum(["Male", "Female"]))
      .min(1, { message: "Please select at least one gender" }),
    dateOfBirth: z.string().refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      { message: "Invalid date format" }
    ),
    nationalId: z
      .string()
      .length(11, { message: "Enter employee's national ID number" })
      .regex(/^\d{11}$/, "National ID number must contain only digits."),
    bankAccountNumber: z
      .string()
      .regex(/^\d{8,12}$/, "Bank account number must contain only digits."),
    bankAccountHolder: z
      .string()
      .min(1, { message: "Enter bank account holder name" }),
    bankName: z.string().min(1, { message: "Enter employee's bank name" }),
    expectedSalary: z
      .string()
      .regex(/^\d*$/, "Expected salary must contain only digits."),
  }),
  position: z.object({
    department: z
      .string()
      .min(1, { message: "Enter employee's department" }),
    role: z.string().min(1, { message: "Enter employee's role" }),
  }),
  contact: z.object({
    phoneNumber: z
      .string()
      .length(11, { message: "Enter employee's phone number" })
      .regex(/^\d{11}$/, "Phone number must contain only digits."),
    residentialAddress: z
      .string()
      .min(1, { message: "Enter employee's residential address" }),
  }),
  education: z.object({
    levelOfEducation: z
      .string()
      .min(1, { message: "Enter employee's level of education" }),
    institution: z.string().min(1, { message: "Enter employee's institution" }),
  }),
  profilePicture: z.instanceof(File).optional(),
  cv: z.instanceof(File).optional(),
  transcript: z.instanceof(File).optional(),
  // category: z.string().min(1, { message: "Enter employee's category" }),
});

export type employeeFormData = z.infer<typeof employeeSchema>;
