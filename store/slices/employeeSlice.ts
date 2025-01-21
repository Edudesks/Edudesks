import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiCall } from "@/utils/api";

const initialState = {
    isLoading: true,
    employees: [],
};

export const fetchAllEmployees = createAsyncThunk(
  "employee/fetchAll",
  async (_,) => {
      const response = await makeApiCall("GET", "/employee");
      return response.payload;
    }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload; // Store the fetched data
      })
      .addCase(fetchAllEmployees.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default employeeSlice.reducer;
