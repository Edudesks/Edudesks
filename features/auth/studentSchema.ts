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
  lastName: z.string().min(1, { message: "Last name bawo" }),
  otherNames: z.string().min(1),
  dateOfBirth: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    { message: "Invalid date format" }
  ),
  age: z.number().min(1).or(z.string().regex(/^\d+$/, "Age must be a number")),
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
  classes: z.enum(classes),
});

export type personalInformationFormData = z.infer<
  typeof personalInformationSchema
>;
