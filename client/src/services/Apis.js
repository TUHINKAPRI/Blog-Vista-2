import { BASE_URL } from "./helper";

//auth Endpoints

export const SIGN_UP_API = BASE_URL + "/auth/sign-up";
export const SIGN_IN_API = BASE_URL + "/auth/sign-in";
export const SEND_OTP_API = BASE_URL + "/auth/send-otp";


//user endpoints
export const UPDATE_PROFILE_PIC=BASE_URL+'/user/update-profile-picture'
export const GET_ALL_USER_BLOGS=BASE_URL+'/user/get-user-posts'

//blog endpoints

export const GET_ALL_POST=BASE_URL+'/post'
export const CREATE_POST=BASE_URL+'/post'
export const UPDATE_BLOG=BASE_URL+'/post'
export const DELETE_BLOG=BASE_URL+'/post'

//category endpoints

export const GET_CATEGORY=BASE_URL+'/category'

// comments endpoints

export const CREATE_COMMENT=BASE_URL+'/post'
export const UPDATE_COMMENT=BASE_URL
export const DELETE_COMMENT='/post'


//payments endpoint

export const PAYMENT_CREATE_ORDER=BASE_URL+'/membership/create-order'
export const VERIFY_PAYMENT=BASE_URL+'/membership/verify-payment'



// bookmark endpoint


export const ADD_TO_BOOKMARK=BASE_URL+"/bookmark/add";
export const REMOVE_FROM_BOOKMARK=BASE_URL+"/bookmark/remove"
export const GET_USER_BOOKMARKS_DATA=BASE_URL+"/bookmark"