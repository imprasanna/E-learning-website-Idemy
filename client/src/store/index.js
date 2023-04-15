import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import navStateReducer from "../store/slices/navStateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navState: navStateReducer,
  },
});
