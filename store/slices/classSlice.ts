import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { makeApiCall } from "@/utils/api";

// Define interfaces for your data structures
interface Class {
  id: string;
  className: string;
  classCategory: string;
  classTeacher: string;
  classFee: number;
}

interface ClassState {
  isLoading: boolean;
  classes: Class[];
  selectedClass: Class | null;
  error: string | null;
}

export interface ClassData {
  className: string;
  classCategory: string;
  classTeacher: string;
  classFee: number;
}


const initialState: ClassState = {
  isLoading: false,
  classes: [],
  selectedClass: null,
  error: null,
};

// Async thunk to add a new class
export const addClass = createAsyncThunk<Class, ClassData, { rejectValue: string }>(
  "class/addClass",
  async (classData: ClassData, { rejectWithValue }) => {
    console.log(classData)
    try {
      const response = await makeApiCall("POST", "/class/add-class", {
        className: classData.className,
        classCategory: classData.classCategory,
        classTeacher: classData.classTeacher,
        classFee: classData.classFee,
      });
      return response.payload;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An error occurred");
    }
  }
);

// Async thunk to edit a class
export const editClass = createAsyncThunk<
  Class,
  { id: string; classData: ClassData },
  { rejectValue: string }
>(
  "class/editClass",
  async ({ id, classData }, { rejectWithValue }) => {
    try {
      const response = await makeApiCall("PUT", `/class/${id}/edit`, {
        className: classData.className,
        classCategory: classData.classCategory,
        classTeacher: classData.classTeacher,
        classFee: classData.classFee,
      });
      return response.payload;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An error occurred");
    }
  }
);

// Async thunk to delete a class
export const deleteClass = createAsyncThunk<
  { id: string },
  string,
  { rejectValue: string }
>(
  "class/deleteClass",
  async (id, { rejectWithValue }) => {
    try {
      await makeApiCall("DELETE", `/class/${id}/delete`);
      return { id };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An error occurred");
    }
  }
);

// Async thunk to fetch classes by category
export const fetchClassesByCategory = createAsyncThunk<
  Class[],
  string,
  { rejectValue: string }
>(
  "class/fetchClassesByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await makeApiCall(
        "GET",
        `/class/category/${category}`
      );
      console.log(response)
      return response.payload.enrichedClasses;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An error occurred");
    }
  }
);

// Async thunk to fetch a single class
export const fetchSingleClass = createAsyncThunk<
  Class,
  string,
  { rejectValue: string }
>(
  "class/fetchSingleClass",
  async (id, { rejectWithValue }) => {
    try {
      const response = await makeApiCall(
        "GET",
        `/class/single/${id}`
      );
      return response.payload.class;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An error occurred");
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    clearSelectedClass: (state) => {
      state.selectedClass = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Class
      .addCase(addClass.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addClass.fulfilled, (state, action: PayloadAction<Class>) => {
        state.isLoading = false;
        state.classes.push(action.payload);
      })
      .addCase(addClass.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to add class";
      })

      // Edit Class
      .addCase(editClass.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editClass.fulfilled, (state, action: PayloadAction<Class>) => {
        state.isLoading = false;
        const updatedClass = action.payload;
        const index = state.classes.findIndex((c) => c.id === updatedClass.id);
        if (index !== -1) {
          state.classes[index] = updatedClass;
        }
        state.selectedClass = updatedClass;
      })
      .addCase(editClass.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to edit class";
      })

      // Delete Class
      .addCase(deleteClass.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteClass.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
        state.isLoading = false;
        state.classes = state.classes.filter((c) => c.id !== action.payload.id);
        if (state.selectedClass?.id === action.payload.id) {
          state.selectedClass = null;
        }
      })
      .addCase(deleteClass.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to delete class";
      })

      // Fetch Classes by Category
      .addCase(fetchClassesByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchClassesByCategory.fulfilled, (state, action: PayloadAction<Class[]>) => {
        state.isLoading = false;
        state.classes = action.payload;
      })
      .addCase(fetchClassesByCategory.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch classes";
      })

      // Fetch Single Class
      .addCase(fetchSingleClass.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleClass.fulfilled, (state, action: PayloadAction<Class>) => {
        state.isLoading = false;
        state.selectedClass = action.payload;
      })
      .addCase(fetchSingleClass.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch class";
      });
  },
});

export const { clearSelectedClass } = classSlice.actions;
export default classSlice.reducer;