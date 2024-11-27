import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpFormData } from "@/features/auth/signUpSchema";
import { LoginFormData } from "@/features/auth/loginSchema";

interface SignupState {
  signupLoading: boolean;
  signupSuccess: boolean;
  signupError: string | null;
  signinLoading: boolean;
  signinSuccess: boolean;
  signinError: string | null;
}

const initialState: SignupState = {
  signupLoading: false,
  signupSuccess: false,
  signupError: null,
  signinLoading: false,
  signinSuccess: false,
  signinError: null,
};

// Async thunk for signup
export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: SignUpFormData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://backend-edudesks.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "An error occurred during signup");
      }

      const responseData = await response.json();
      return responseData.message;

    } catch (error) {
      return rejectWithValue("An error occurred during signup. Please try again.");
    }
  }
);

// Async thunk for signin
export const signIn = createAsyncThunk(
  "auth/signin",
  async (data: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://backend-edudesks.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "An error occurred during signin");
      }

      const responseData = await response.json();
      return responseData.message;

    } catch (error) {
      return rejectWithValue("An error occurred during signin. Please try again.");
    }
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
  },
  extraReducers: (builder) => {
    builder
      // Signup reducers
      .addCase(signUp.pending, (state) => {
        state.signupLoading = true;
        state.signupSuccess = false;
        state.signupError = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signupLoading = false;
        state.signupSuccess = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload as string;
      })
      // Signin reducers
      .addCase(signIn.pending, (state) => {
        state.signinLoading = true;
        state.signinSuccess = false;
        state.signinError = null;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.signinLoading = false;
        state.signinSuccess = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signinLoading = false;
        state.signinError = action.payload as string;
      });
  },
});

export const { resetSignup, resetSignin } = signupSlice.actions;
export default signupSlice.reducer;
