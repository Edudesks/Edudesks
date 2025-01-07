import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanState {
  selectedPlan: string;
  price: string;
  subscription: string;
}

const initialState: PlanState = {
  selectedPlan: "Basic",
  price: "5,000",
  subscription: "Monthly",
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<{ plan: string; price: string, subscription: string}>) => {
      state.selectedPlan = action.payload.plan;
      state.price = action.payload.price;
      state.subscription = action.payload.subscription;
    },
  },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
