import axios from "axios";

export const base_url = "https://yoginhomebricks.onrender.com/api/";

export const open_api = axios.create({
  baseURL: base_url,
  timeout: 300000,
  headers: { "Content-Type": "application/json" },
  validateStatus: (status) => status < 5000,
  transformRequest: [
    (data, headers) => {
      return JSON.stringify(data);
    },
  ],
});

const setApiCall = () => {
  let instance = axios.create({
    baseURL: base_url,
    timeout: 300000,
    headers: { "Content-Type": "application/json" },
    validateStatus: (status) => status < 500,
    transformRequest: [
      function (data, headers) {
        return JSON.stringify(data);
      },
    ],
  });

  instance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("yogin-real-estate-token"));
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  instance.interceptors.response.use((res) => {
    if (res.status === 401) {
      localStorage.removeItem("yogin-real-estate-token");
      window.location.reload();
      return res;
    }
    return res;
  });

  return instance;
};

export const token_api = setApiCall();
