// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8080/',
 baseURL : 'https://agronomy-9m1j.onrender.com/'
  // Replace with your backend URL
});

export default axiosInstance;
