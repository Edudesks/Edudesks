import { z, ZodType } from "zod";

const classes = [
  "Creche",
  "Nursery",
  "Kindergarten",
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "Junior Secondary 1",
  "Junior Secondary 2",
  "Junior Secondary 3",
  "Senior Secondary 1",
  "Senior Secondary 2",
  "Senior Secondary 3",
] as const;

export const personalInformationSchema = z.object({
  personal: z.object({
    lastName: z.string().min(1, { message: "Last name bawo" }), //done
    otherNames: z.string().min(1), //done
    dateOfBirth: z.string().refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      { message: "Invalid date format" }
    ),
    age: z
      .number()
      .min(1)
      .or(z.string().regex(/^\d+$/, "Age must be a number")),
    gender: z
      .array(z.enum(["Male", "Female"]))
      .min(1, { message: "Please select at least one gender" }),
    admissionDate: z.string().refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      { message: "Invalid date format" }
    ),
    classes: z.enum(classes, { message: "Invalid class selected" }),
  }),
});

export const contactInformationSchema = z.object({
  nationality: z.string().min(1, { message: "Enter nationality" }),
  stateOfOrigin: z.string().min(1, { message: "Enter state of origin" }),
  localGovernment: z.string().min(1, { message: "Enter local government" }),
  town: z.string().min(1, { message: "Enter town" }),
  homeAddress: z.string().min(1, { message: "Enter home address" }),
});

export const parentInformationSchema = z.object({
  // -------- mother --------
  motherLastName: z.string().min(1, { message: "Enter mother's last name" }),
  motherFirstName: z.string().min(1, { message: "Enter mother's first name" }),
  motherEmailAddress: z
    .string()
    .email()
    .min(1, { message: "Enter mother's email address" }),
  motherPhoneNumber: z
    .string()
    .length(11, { message: "Enter mother's phone number" })
    .regex(/^\d{11}$/, "Phone number must contain only digits."),
  motherHomeAddress: z
    .string()
    .min(1, { message: "Enter mother's home address" }),
  // -------- father --------
  fatherLastName: z.string().min(1, { message: "Enter father's last name" }),
  fatherFirstName: z.string().min(1, { message: "Enter father's first name" }),
  fatherEmailAddress: z
    .string()
    .email()
    .min(1, { message: "Enter father's email address" }),
  fatherPhoneNumber: z
    .string()
    .length(11, { message: "Enter father's phone number" })
    .regex(/^\d{11}$/, "Phone number must contain only digits."),
  fatherHomeAddress: z
    .string()
    .min(1, { message: "Enter father's home address" }),
});

export const healthInformationSchema = z.object({
  currentMedication: z.string().optional(),
  healthCondition: z.string().optional(),
  genotype: z.string().optional(),
  bloodGroup: z.string().optional(),
  allergies: z.string().optional(),
  disabilities: z.string().optional(),
});

export type personalInformationFormData = z.infer<
  typeof personalInformationSchema
>;
export type contactInformationFormData = z.infer<
  typeof contactInformationSchema
>;
export type parentInformationFormData = z.infer<typeof parentInformationSchema>;
export type healthInformationFormData = z.infer<typeof healthInformationSchema>;
