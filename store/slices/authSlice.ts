import axios from 'axios';
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
  isAuthenticated: boolean
}

const initialState: SignupState = {
  signupLoading: false,
  signupSuccess: false,
  signupError: null,
  signinLoading: false,
  signinSuccess: false,
  signinError: null,
  isAuthenticated: false,
};

// Async thunk for signup
export const signUp = createAsyncThunk(
  'auth/signup',
  async (data: SignUpFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://backend-edudesks.onrender.com/signup',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 60000, // 10 seconds timeout
        }
      );

      return response.data.message; // Assuming the API returns { message: 'Success' }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle specific Axios error
        if (error.response) {
          // Server responded with a status outside 2xx range
          return rejectWithValue(error.response.data.message || 'An error occurred during signup');
        } else if (error.request) {
          // No response received
          return rejectWithValue('No response from server. Please try again.');
        } else if (error.code === 'ECONNABORTED') {
          // Request timed out
          return rejectWithValue('Request timed out. Please try again.');
        }
      }

      return rejectWithValue('An error occurred during signup. Please try again.');
    }
  }
);

export const checkAuthToken = createAsyncThunk(
  "auth/token",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("authToken"); // Or use cookies if more secure
    if (token) {
      return true;
    }
    return rejectWithValue(false);
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (data: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://backend-edudesks.onrender.com/signin',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 60000, // 10 seconds timeout
        }
      );

      // Assuming the token is in response.data.token
      const { token } = response.data;

      // Store the JWT token in localStorage
      localStorage.setItem('authToken', token);

      return token; // Return token or any other required data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with a non-2xx status code
          return rejectWithValue(error.response.data.message || 'An error occurred during signin');
        } else if (error.request) {
          // Request was made but no response received
          return rejectWithValue('No response from server. Please try again.');
        } else if (error.code === 'ECONNABORTED') {
          // Request timed out
          return rejectWithValue('Request timed out. Please try again.');
        }
      }

      return rejectWithValue('An error occurred during signin. Please try again.');
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
      })
      .addCase(checkAuthToken.fulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(checkAuthToken.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});



      


export const { resetSignup, resetSignin } = signupSlice.actions;
export default signupSlice.reducer;
