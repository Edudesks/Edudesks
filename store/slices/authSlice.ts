import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpSubmitFormData } from "@/features/auth/signUpSchema";
import { LoginFormData } from "@/features/auth/loginSchema";
import { makeApiCall } from '@/utils/api';

interface School {
  accountHolderName: string;
  _id: string;
  schoolName: string;
  email: string;
  role: string;
  plan: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

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

const initialState: SignupState = {
  signupLoading: false,
  signupSuccess: false,
  signupError: null,
  signinLoading: false,
  signinSuccess: false,
  signinError: null,
  isAuthenticated: false,
  schoolPayload: null,
  otpLoading: false,
  otpSuccess: false,
  otpError: null,
};

// Sign Up School Async Thunk
export const signUp = createAsyncThunk(
  'auth/signup',
  async (data: SignUpSubmitFormData) => {
    const response = await makeApiCall('POST', '/auth/signup', data);
    return response.payload;
  }
);

// Sign In School Async Thunk
export const signIn = createAsyncThunk(
  'auth/signin',
  async (data: LoginFormData) => {
    const response = await makeApiCall('POST', '/auth/signin', data);
    return response.payload;
  }
);

// Check Auth Token Async Thunk
export const checkAuthToken = createAsyncThunk(
  "auth/token",
  async () => {
    const response = await makeApiCall('GET', '/auth/school-auth');
    return response.payload;
  }
);

// Create OTP Async Thunk
export const createOtp = createAsyncThunk(
  "auth/createotp",
  async (email: string | string[]) => {
    const response = await makeApiCall('POST', '/auth/send-otp', { email });
    return response;
  }
);

// Verify OTP Async Thunk
export const verifyOtp = createAsyncThunk(
  "auth/verifyotp",
  async (data: { email: string | string[]; otp: string, isSignup: boolean }) => {
    const response = await makeApiCall('POST', '/auth/verify-otp', data);
    return response.payload;
  }
);

const signupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSignup: (state) => {
      state.signupSuccess = false;
      state.signupError = null;
    },
    resetSignin: (state) => {
      state.signinSuccess = false;
      state.signinError = null;
    },
    resetOtp: (state) => {
      state.otpSuccess = false;
      state.otpError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup reducers
      .addCase(signUp.pending, (state) => {
        state.signupLoading = true;
        state.signupSuccess = false;
        state.signupError = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupSuccess = true;
        state.schoolPayload = action.payload.school;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.error.message || "Failed to sign up.";
      })
      // Signin reducers
      .addCase(signIn.pending, (state) => {
        state.signinLoading = true;
        state.signinSuccess = false;
        state.signinError = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.signinLoading = false;
        state.signinSuccess = true;
        state.schoolPayload = action.payload.school;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signinLoading = false;
        state.signinError = action.error.message || "Failed to sign in.";
      })
      // Check Auth Token
      .addCase(checkAuthToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.signinSuccess = true;
        state.schoolPayload = action.payload.school;
      })
      .addCase(checkAuthToken.rejected, (state) => {
        state.isAuthenticated = false;
      })
      // Create OTP reducers
      .addCase(createOtp.pending, (state) => {
        state.otpLoading = true;
        state.otpSuccess = false;
        state.otpError = null;
      })
      .addCase(createOtp.fulfilled, (state) => {
        state.otpLoading = false;
        state.otpSuccess = true;
      })
      .addCase(createOtp.rejected, (state, action) => {
        state.otpLoading = false;
        state.otpError = action.error.message || "Failed to send OTP.";
      })
      // Verify OTP reducers
      .addCase(verifyOtp.pending, (state) => {
        state.otpLoading = true;
        state.otpSuccess = false;
        state.otpError = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.otpLoading = false;
        state.otpSuccess = true;
        state.schoolPayload = action.payload.school;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.otpLoading = false;
        state.otpError = action.error.message || "Invalid OTP.";
      });
  },
});

export const { resetSignup, resetSignin, resetOtp } = signupSlice.actions;
export default signupSlice.reducer;
