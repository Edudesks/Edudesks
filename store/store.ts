import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import sidebarReducer from './slices/sidebarSlice';
import schoolReducer from './slices/schoolSlice';
import employeeReducer from './slices/employeeSlice';
import planReducer from './slices/planSlice';
import classReducer from './slices/classSlice';

const store = configureStore({
  reducer: {
    plan: planReducer,
    school: schoolReducer,
    employee: employeeReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    class: classReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
