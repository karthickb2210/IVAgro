// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8080/',
  // baseURL : 'https://agronomy-9m1j.onrender.com/'
  baseURL : "https://electronic-michell-ironvalleyagronomy-835a5573.koyeb.app/"
  // Replace with your backend URL
});

export default axiosInstance;
