import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    logout: (state, action) => {
      state.user = [...state.user, null];
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
