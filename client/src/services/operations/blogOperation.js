import { CREATE_POST, UPDATE_BLOG } from "../Apis";
import { axiosInstance } from "../helper";

export const get_Single_blog = async (data) => {
  try {
    const res = await axiosInstance.get(`/post/${data}`);
    return res?.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err?.response);
  }
};

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

export const get_all_blogs = async (data) => {
  const [h, val] = data.queryKey;
  const query = val ? val : "";
  try {
    const res = await axiosInstance.get(`/post${query}`);

    return res?.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};

export const update_post = async (data) => {
  try {
    const res = await axiosInstance.put(
      UPDATE_BLOG + `/${data.id}`,
      data.content
    );
    return res.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const delete_Post = async (data) => {
  try {
    const res = await axiosInstance.delete(UPDATE_BLOG + `/${data}`);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};
