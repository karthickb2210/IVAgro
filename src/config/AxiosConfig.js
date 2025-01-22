// src/api/axiosConfig.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
     //  baseURL: 'http://localhost:8080/',
     baseURL : apiUrl,
  // Replace with your backend URL
});

export default axiosInstance;
