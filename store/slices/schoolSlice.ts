import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Async thunk to fetch school name
export const fetchSchoolName = createAsyncThunk(
  'school/fetchSchoolName',
  async (schoolName: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Check if the school name is "Edudesk"
        if (schoolName === 'Edudesk') {
          resolve('Edudesk');
        } else {
          resolve('Not Found'); // Simulate a "Not Found" result
        }
      }, 1000); // Simulate a delay for fetching data
    });
  }
);

interface SchoolState {
  schoolName: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: SchoolState = {
  schoolName: null,
  status: 'loading',
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSchoolName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schoolName = action.payload;
      })
      .addCase(fetchSchoolName.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Selectors to access school name and status
export const selectSchoolName = (state: RootState) => state.school.schoolName;
export const selectSchoolStatus = (state: RootState) => state.school.status;

export default schoolSlice.reducer;
