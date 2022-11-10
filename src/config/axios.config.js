import axios from 'axios'
import {apiUrl, apiUrlLocal} from '../constants/globalVariables'

const apiClient = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: {
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
  });

  // apiClient.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("accessToken");
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

export default apiClient;

