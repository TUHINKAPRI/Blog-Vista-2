import axios from "axios";

 export  const BASE_URL = "http://localhost:4000/api/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = JSON.parse(token);
      return config;
    }

    return config;
  },
  (err) => {
 console.log(err);
    return Promise.reject(err);
  }
);


axiosInstance.interceptors.response.use((data)=>{return data},(error)=>{
 return Promise.reject(error.response);
})