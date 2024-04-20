import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setSignupData: (state, { payload }) => {
      state.signupData = payload;
    },
  },
});

export default authSlice.reducer;

export const { setSignupData } = authSlice.actions;
