import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';
import { Section } from "@/types";

interface ActiveState {
    active: Section
    parentNav: string
}
const initialState: ActiveState = {
    active: 'dashboard',
    parentNav: '',
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<ActiveState>) => {
      state.active = action.payload.active; // Return the new state directly
      state.parentNav = action.payload.parentNav; // Return the new state directly
    },
  },
});

export const { setActivePage } = sidebarSlice.actions;

export const activePage = (state: RootState) => state.sidebar
export default sidebarSlice.reducer;
