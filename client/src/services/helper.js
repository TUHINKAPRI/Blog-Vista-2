import axios from "axios";

export const BASE_URL = "https://blog-vista-2.onrender.com/api/v1";
// export const BASE_URL = "http://localhost:4000/api/v1";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["x-access-token"] = JSON.parse(accessToken);
      return config;
    }

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (data) => {
    return data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest._retry && error.response.status === 403) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        if (refreshToken) {
          const res = await axios.post(
            BASE_URL + "/auth/get-new-access-token",
            {
              refreshToken: JSON.parse(refreshToken),
            }
          );
          localStorage.setItem('accessToken',JSON.stringify(res.data?.accessToken))
          originalRequest.headers['x-access-token'] = res?.data?.accessToken
          return axios(originalRequest);
        }
      } catch (err) {
        console.log(err);
      }
    }

    console.log(error.response);
    return Promise.reject(error.response);
  }
);
