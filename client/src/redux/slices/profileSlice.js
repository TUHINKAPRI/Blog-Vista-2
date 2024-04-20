import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfileValue: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload?.data));
      localStorage.setItem("token", JSON.stringify(payload?.token));
      state.user = payload?.data;
    },

    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
    },
    setUserAfterUpdate:(state,{payload})=>{
      localStorage.removeItem('user');
      console.log(payload);
      state.user=payload
      localStorage.setItem('user', JSON.stringify(payload));
    }
  },
});

export default profileSlice.reducer;

export const { logout, setProfileValue ,setUserAfterUpdate} = profileSlice.actions;
