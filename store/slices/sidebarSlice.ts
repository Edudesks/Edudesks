import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';
import { Section } from "@/types";

interface ActiveState {
    active: Section
}
const initialState: ActiveState = {
    active: 'dashboard'
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<Section>) => {
      state.active = action.payload; // Return the new state directly
    },
  },
});

export const { setActivePage } = sidebarSlice.actions;

export const activePage = (state: RootState) => state.sidebar
export default sidebarSlice.reducer;
