import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./slices/authSlice";
import profileSlice from './slices/profileSlice';
import blogSlice from './slices/blogSlice';





export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile:profileSlice,
    blog:blogSlice
  },
});
