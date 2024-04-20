import { BASE_URL } from "./helper";

//auth Endpoints

export const SIGN_UP_API = BASE_URL + "/auth/sign-up";
export const SIGN_IN_API = BASE_URL + "/auth/sign-in";
export const SEND_OTP_API = BASE_URL + "/auth/send-otp";
export const UPDATE_PROFILE_PIC=BASE_URL+'/user/update-profile-picture'


//blog endpoints

export const GET_ALL_POST=BASE_URL+'/post'
export const CREATE_POST=BASE_URL+'/post'