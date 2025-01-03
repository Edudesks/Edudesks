
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
  | "student-profile"
  | "student-history"
  | "student-list"
  | "class"
  | "view-class"
  | "edit-class"
  | "add-class"
  | "employees"
  | "add-employee"
  | "edit-employee"
  | "view-employees"
  | "wallet"
  | "remit-payment"
  | "salary"
  | "generate"
  | "income"
  | "monthly-income"
  | "annual-income"
  | "expenses"
  | "analytics"
  | "settings";

export type { Section }