import {
  ADD_TO_BOOKMARK,
  GET_USER_BOOKMARKS_DATA,
  REMOVE_FROM_BOOKMARK,
} from "../Apis";
import { axiosInstance } from "../helper";

export const add_to_Bookmark = async (data) => {
  try {
    const res = await axiosInstance.post(ADD_TO_BOOKMARK, data);

    return res.data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      return Promise.reject(err.response);
    }
    return Promise.reject(err);
  }
};

export const remove_to_bookmark = async (data) => {
  try {
    const res = await axiosInstance.post(REMOVE_FROM_BOOKMARK, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};

export const getUserBookmarks = async () => {
  try {
    const res = await axiosInstance.get(GET_USER_BOOKMARKS_DATA);
    return res.data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      return Promise.reject(err.response);
    }
    return Promise.reject(err);
  }
};
