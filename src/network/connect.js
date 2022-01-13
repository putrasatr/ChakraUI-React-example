import axios from "axios";
import ls from "local-storage";

const apiurl = process.env.REACT_APP_API_URL_HOST;
const prefix = process.env.REACT_APP_API_URL_PREFIX;
const isProduction = process.env.NODE_ENV === "production";

export const axiosClient = axios.create({
  baseURL: isProduction ? `${apiurl}${prefix}` : prefix,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(function (config) {
  config.headers["Authorization"] = `Bearer ${ls.get("token")}`;
  return config;
});
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      let res = error.response;
      if (res.status === 401) {
        window.location.href = "/";
        ls.clear();
      }
    }
    return Promise.reject(error);
  }
);
