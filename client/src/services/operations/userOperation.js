import { UPDATE_PROFILE_PIC } from "../Apis";
import { axiosInstance } from "../helper";


export const  updateProfilePicture=async(data)=>{
try{
  const res=await axiosInstance.post(UPDATE_PROFILE_PIC,data)
  return res?.data;

}catch(err){
  return Promise.reject(err.response);
}
}