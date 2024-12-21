import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Async thunk to fetch school name


export const fetchSchoolName = createAsyncThunk(
  'school/fetchSchoolName',
  async () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Retrieve the school name from localStorage
        const storedSchoolName = localStorage.getItem('schoolName');

        // Check if the school name matches the one in localStorage
        if (storedSchoolName) {
          resolve(storedSchoolName); // Match found
        } else {
          resolve('Not Found'); // No match found
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
  reducers: {
    // Synchronous action to manually set the schoolName
    setSchoolName: (state, action) => {
      state.schoolName = action.payload;
    },
  },
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
export const { setSchoolName } = schoolSlice.actions

export const selectSchoolName = (state: RootState) => state.school.schoolName;
export const selectSchoolStatus = (state: RootState) => state.school.status;

export default schoolSlice.reducer;
