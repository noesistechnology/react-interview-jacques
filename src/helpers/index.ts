import axios from 'axios';

export const https = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

https.interceptors.response.use(
  (res) => res.data?.data || res.data,
  (err) => {
    throw err.response?.data || err.message;
  }
);
