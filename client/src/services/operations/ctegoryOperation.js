import { GET_CATEGORY } from "../Apis"
import { axiosInstance } from "../helper"



export const getAllCategory=async()=>{
  try{
const res=await axiosInstance.get(GET_CATEGORY);
return res?.data
  }catch(err){
    return Promise.reject(err.response)
  }
}