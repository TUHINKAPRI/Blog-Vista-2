import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkData:localStorage.getItem('bookmarks')?(JSON.parse(localStorage.getItem('bookmarks'))):([])
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookmark: (state, { payload }) => {
      state.bookmarkData=[...state.bookmarkData,payload]
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarkData))
    },
    removeFromBookmark: (state, { payload }) => {
      const index=state.bookmarkData.indexOf(payload);
      state.bookmarkData.splice(index, 1)
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarkData))
    },
    setBookmarkData: (state, { payload }) => {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(payload?.data?.bookmarks?.posts)
      );
      state.bookmarkData = payload?.data?.bookmarks?.posts;
    },
  },
});

export default bookmarkSlice.reducer;

export const { addToBookmark, removeFromBookmark, setBookmarkData } =
  bookmarkSlice.actions;
