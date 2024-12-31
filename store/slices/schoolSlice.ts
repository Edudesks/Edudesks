import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { makeApiCall } from '@/utils/api';

// Async thunk to check if the school exists by making an API call
export const checkSchoolExist = createAsyncThunk(
  'school/checkSchoolExist',
  async (schoolName: string) => {
    console.log(schoolName)
    const response = await makeApiCall('POST', '/school/check-school-exist', { schoolName })
    return response.exists;
  }
);

interface SchoolState {
  schoolName: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  schoolExists: boolean | null;
}

const initialState: SchoolState = {
  schoolName: null,
  status: 'loading',
  schoolExists: null,
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setSchoolName: (state, action) => {
      state.schoolName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkSchoolExist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkSchoolExist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schoolExists = action.payload; // Store the result of existence check
      })
      .addCase(checkSchoolExist.rejected, (state) => {
        state.status = 'failed';
        state.schoolExists = false; // Consider it not existing if the request fails
      });
  },
});

export const { setSchoolName } = schoolSlice.actions;

export const selectSchoolName = (state: RootState) => state.school.schoolName;
export const selectSchoolStatus = (state: RootState) => state.school.status;
export const selectSchoolExists = (state: RootState) => state.school.schoolExists;

export default schoolSlice.reducer;
