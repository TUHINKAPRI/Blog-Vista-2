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

      localStorage.setItem("accessToken", JSON.stringify(payload?.accessToken));
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(payload?.refreshToken)
      );
      state.user = payload?.data;
    },

    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("bookmarks");
      state.user = null;
    },
    setUserAfterUpdate: (state, { payload }) => {
      localStorage.removeItem("user");

      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});

export default profileSlice.reducer;

export const { logout, setProfileValue, setUserAfterUpdate } =
  profileSlice.actions;
