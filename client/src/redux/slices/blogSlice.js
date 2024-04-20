import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs:[],
  sigleBlog:null
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    setBlogs:(state,{payload})=>{
      console.log(payload)
    },
    setSingleBlog:(state,{payload})=>{
      console.log(payload)
    }
  },
});

export default blogSlice.reducer;

export const { setBlogs,setSingleBlog} = blogSlice.actions;





