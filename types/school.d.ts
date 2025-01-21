// interface School {
//     accountHolderName: string;
//     _id: string;
//     schoolName: string;
//     email: string;
//     role: string;
//     plan: string;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   }
  
// Redux slice
  interface SignupState {
    signupLoading: boolean;
    signupSuccess: boolean;
    signupError: string | null;
    signinLoading: boolean;
    signinSuccess: boolean;
    signinError: string | null;
    isAuthenticated: boolean;
    schoolPayload: School | null;
    otpLoading: boolean;
    otpSuccess: boolean;
    otpError: string | null;
  }
  export type SignUpFormData = {
    schoolName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  export type SignUpSubmitFormData = {
    schoolName: string;
    email: string;
    password: string;
  };

  export type LoginFormData= {
    email: string;
    password: string;
    rememberMe?: boolean;
  };
  

export type { SignupState }