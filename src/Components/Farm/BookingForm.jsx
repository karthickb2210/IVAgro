import React, { useState } from "react";
import axiosInstance from "../../config/AxiosConfig";

const BookingForm = ({status,handleState}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "10:00 AM", // Default to the first time option
    message: ""
  });

  const handleClose = () =>{
    handleState(!status)
    console.log("closed")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Displaying the collected form data
    axiosInstance.post("/sendMail",formData).then((res)=>{
      console.log(res)
      handleState()
    }).catch((err)=>{
      console.log(err)
    })
    
    // Optionally, reset the form after submission
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "10:00 AM",
      message: ""
    });
    
  };

  // Generate time options from 10:00 AM to 8:00 PM
  const timeOptions = [];
  for (let hour = 10; hour <= 20; hour++) {
    const ampm = hour < 12 || hour === 24 ? "AM" : "PM";
    const displayHour = hour % 12 || 12;
    timeOptions.push(`${displayHour}:00 ${ampm}`);
    // timeOptions.push(`${displayHour}:30 ${ampm}`);
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform mx-8  transition-transform duration-300 ease-in-out">
        <button
             onClick={handleClose}
             className="absolute top-7 right-2 text-black hover:text-gray-700 transition duration-200"
           >
             &#x2715;
           </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book a Farm Visit</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Any special requests?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
