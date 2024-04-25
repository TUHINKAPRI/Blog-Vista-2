import { DELETE_COMMENT } from "../Apis";
import { axiosInstance } from "../helper";

export const create_comment = async (data) => {
  try {
    const res = await axiosInstance.post(`post/${data?.postId}/comments`, {
      content: data.content,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};

export const update_comment = async (data) => {
  try {
    const res = await axiosInstance.put(
      `/post/${data.postId}/comments/${data?.commentId}`,
      { content: data.content }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};

export const delete_comment = async (data) => {
  try {
    const res = await axiosInstance.delete(DELETE_COMMENT+
      `/${data.postId}/comments/${data?.commentId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};
