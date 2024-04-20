import { SEND_OTP_API, SIGN_IN_API, SIGN_UP_API } from "../Apis";
import { axiosInstance } from "../helper";

export const send_otp = async (data) => {
  try {
    const res = await axiosInstance.post(SEND_OTP_API, data);
    return res;
  } catch (error) {

    return Promise.reject(error.response)
    
  }
};

export const sign_in = async (data) => {
  try {
    const res = await axiosInstance.post(SIGN_IN_API, data);

    return res?.data;
  } catch (err) {

    if(err.response){
      return Promise.reject(err.response);
    }else{
      return Promise.reject(err)
    }
   
  }
};

export const sign_up=async(data)=>{
  try{

    const res=await axiosInstance.post(SIGN_UP_API,data);
    return res?.data

  }catch(err){
    return Promise.reject(err.response);
  }
}

