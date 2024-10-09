import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../HomePage/NavBar/NavBar';
import { login } from '../../features/User';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../config/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import LeavesLoader from '../Loader/PlantLoader';


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ name: '', pass: '' });
  const [signupData, setSignupData] = useState({ username: '', mail: '', mobileNumber: '', password: '' });
  const user = useSelector((state) => state.user.value);
  const [isLoading,setIsLoading] = useState(false)

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate  = useNavigate();


  const handleLoginSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    axiosInstance.post("/checkUser",loginData).then((res)=>{
      if(res.data.flag){
        toast.success("Login succesfull")
        dispatch(
          login({
            name: loginData.name,
            pass: loginData.pass,
          })
        )
        localStorage.setItem("name",loginData.name);
        localStorage.setItem("pass",loginData.pass);
        setIsLoading(false)
        navigate("/dash")
      }else{
        toast.warn("Incorrect Username or password");
        setIsLoading(false)
      }
    }
  ).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
    
  };

  const handleSignupSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    axiosInstance.post("/register",signupData).then((res)=>{
      console.log(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
    
  };

  return (
    <>
    <NavBar />
    { isLoading ? <>
      <LeavesLoader />
    </>: 
    <div className="flex mt-32 justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full overflow-hidden relative">
        {/* Add some decorative plant illustrations */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7616/7616514.png"
          alt="Decorative plant"
          className="absolute top-0 left-0 w-16 h-16 opacity-20"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/7616/7616514.png"
          alt="Decorative plant"
          className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
        />

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-center mb-6 text-green-700">Login to Your Garden</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="name"
                    value={loginData.name}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="pass"
                    value={loginData.pass}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your password"
                  />
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200">
                  Login
                </button>
              </form>
              <p className="text-sm mt-4 text-center">
                Don't have an account?{' '}
                <button onClick={toggleForm} className="text-green-600 hover:underline">
                  Sign Up
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-center mb-6 text-green-700">Join Our Plant Community</h2>
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={signupData.username}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="mail"
                    value={signupData.mail}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={signupData.mobileNumber}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your password"
                  />
                </div>
                <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200">
                  Sign Up
                </button>
              </form>
              <p className="text-sm mt-4 text-center">
                Already have an account?{' '}
                <button onClick={toggleForm} className="text-yellow-600 hover:underline">
                  Login
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    }
    </>
  
  );
};

export default LoginSignup;
