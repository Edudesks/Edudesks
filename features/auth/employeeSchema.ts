import z from "zod";

export const employeeSchema = z.object({
  employeeLastName: z.string().min(1, { message: "Last name bawo" }),
  employeeOtherNames: z.string().min(1),
  employeeEmailAddress: z
    .string()
    .email()
    .min(1, { message: "Enter employee's email address" }),
  employeePhoneNumber: z
    .string()
    .length(11, { message: "Enter employee's phone number" })
    .regex(/^\d{11}$/, "Phone number must contain only digits."),
  employeeGender: z
    .array(z.enum(["Male", "Female"]))
    .min(1, { message: "Please select at least one gender" }),
  employeeDateOfBirth: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    { message: "Invalid date format" }
  ),
  employeeResidentialAddress: z
    .string()
    .min(1, { message: "Enter employee's residential address" }),
    employeeNationalIdentificationNumber: z
    .string()
    .length(11, { message: "Enter employee's national id number" })
    .regex(/^\d{11}$/, "national id number must contain only digits."),
    employeeInstitution: z
    .string()
    .min(1, { message: "Enter employee's institution" }),
    employeeDegreeProgram: z
    .string()
    .min(1, { message: "Enter employee's degree program" }),
    employeeDepartment: z
    .string()
    .min(1, { message: "Enter employee's department" }),
    employeeRole: z
    .string()
    .min(1, { message: "Enter employee's role" }),
    employeeBankAccountDetails: z
    .string()
    .regex(/^[0-9]*$/, "Bank account details must contain only digits."),
    employeeBankAccountHolder: z
    .string()
    .min(1, { message: "Enter bank account holder" }), employeeNameOfBank: z
    .string()
    .min(1, { message: "Enter employee's bank name" }),
    employeeExpectedSalary: z
    .string()
    .regex(/^\d{1,3}(,\d{3})*(\.\d+)?$/, "Bank account details must contain only digits."),
});

export type employeeFormData = z.infer<typeof employeeSchema>;
