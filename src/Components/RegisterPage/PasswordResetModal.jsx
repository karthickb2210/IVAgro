import React, { useState, useRef } from 'react';
import axiosInstance from '../../config/AxiosConfig';
import { toast } from 'sonner';
import LeavesLoader from '../Loader/PlantLoader';

const PasswordResetModal = ({ isOpen, onClose,handleLoginSubmitOnOtp,setLoginData }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [step, setStep] = useState(1);
  const inputRefs = useRef([]);
  const [isLoading,setIsLoading] = useState(false);

  const handleSendOtp = () => {
    setIsLoading(true)
    // Logic to send OTP to the email goes here
    axiosInstance.get(`/sendOtp/${email}`).then((res)=>{
        if(res.data.statusCode===404){
            toast.error("No such Email account exits");
        }else if(res.data.statusCode===200){
            toast.success("Otp sent successfully to your email");
            setStep(2);
        }else{
            toast.warning("Error sending email")
        }
    }).catch((err)=>{
        toast.error(err)
    }).finally(()=>{
        setIsLoading(false)
    })
   
  };

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    setIsLoading(true)
    // Logic to verify OTP goes here
    const enteredOtp = otp.join('');
    axiosInstance.get(`/verifyOtp/${email}/${enteredOtp}`).then((res)=>{
        if(res.data.flag){
            toast.success("Otp verified successfully");
            const userData = res.data.data;
            console.log(userData)
            setStep(1);
            const loginData = {
                name : userData.mail,
                pass : userData.password
            }
            console.log(loginData)
            setLoginData(loginData)
            handleLoginSubmitOnOtp(loginData)
        }else{
            toast.warning("Otp mismatch");
        }
    }).catch((err)=>{
        toast.error(err)
    }).finally(()=>{
        setIsLoading(false)
    })
    onClose();
     // Close modal on successful OTP verification
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  if (!isOpen) return null;

  return (
    <>
    {isLoading ? <LeavesLoader />  :   <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-4">
        <button
          className="text-gray-600 hover:text-gray-900 float-right"
          onClick={onClose}
        >
          ✕
        </button>

        {step === 1 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Enter Your Email</h2>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              onClick={handleSendOtp}
              className="w-full mt-4 cursor-pointer bg-blue-600 text-center hover:bg-blue-700 text-white py-2 rounded text-lg"
            >
              Send OTP
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Enter OTP</h2>
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 border rounded text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>
            <div
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 cursor-pointer text-center hover:bg-green-700 text-white py-2 rounded text-lg"
            >
              Verify OTP
            </div>
          </div>
        )}
      </div>
    </div>
    }
    </>
  );
};

export default PasswordResetModal;
