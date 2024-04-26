import { GET_ALL_USER_BLOGS, UPDATE_PROFILE_PIC } from "../Apis";
import { axiosInstance } from "../helper";

export const updateProfilePicture = async (data) => {
  try {
    const res = await axiosInstance.post(UPDATE_PROFILE_PIC, data);
    return res?.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const getUserBlogs = async () => {
  try {
    const res = await axiosInstance.get(GET_ALL_USER_BLOGS);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};
