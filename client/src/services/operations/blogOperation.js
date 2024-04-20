import { CREATE_POST } from "../Apis";
import { axiosInstance } from "../helper";

export const create_blog = async (data) => {
  try {
    const res = await axiosInstance.post(CREATE_POST, data);

    return res.data;
  } catch (err) {
    if (err?.response) {
      return Promise.reject(err.response);
    } else {
      return Promise.reject(err);
    }
  }
};
