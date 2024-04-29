import { PAYMENT_CREATE_ORDER, VERIFY_PAYMENT } from "../Apis";
import { axiosInstance } from "../helper";

export const create_order = async (data) => {
  try {
    const res = await axiosInstance.post(PAYMENT_CREATE_ORDER, data);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const verify_payment = async (data) => {
  try {
    const res = await axiosInstance.post(VERIFY_PAYMENT, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err.response);
  }
};
