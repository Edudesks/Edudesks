
interface UserState {
    name: string
    email: string
    role: string
}

type Section =
  | "dashboard"
  | "student"
  | "add-student"
  | "view-student"
  | "class"
  | "view-class"
  | "edit-class"
  | "add-class"
  | "employees"
  | "add-employee"
  | "view-employees"
  | "wallet"
  | "remit-payment"
  | "salary"
  | "income"
  | "monthly-income"
  | "annual-income"
  | "expenses"
  | "analytics"
  | "settings";

export type { Section }