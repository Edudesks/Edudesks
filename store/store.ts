import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import schoolReducer from './slices/schoolSlice';

const store = configureStore({
  reducer: {
    school: schoolReducer,
    auth: authReducer,
    user: userReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
