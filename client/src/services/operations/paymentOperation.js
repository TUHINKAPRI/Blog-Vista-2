import { PAYMENT_CREATE_ORDER } from "../Apis";
import { axiosInstance } from "../helper";

export const create_order = async (data) => {
  try {
    const res = await axiosInstance.post(PAYMENT_CREATE_ORDER, data);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};
