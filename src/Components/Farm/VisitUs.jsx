import React, { useState } from 'react';
import BookingForm from './BookingForm';

const VisitUs = () => {

  const [showForm,setShowFarm] = useState(false)
  return (
    <>
    { showForm && 
      <BookingForm 
      status = {showForm}
      handleState = {setShowFarm}
       />
    }
    <div className="flex flex-col items-center justify-center p-6 mt-36  min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl transform transition hover:shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-green-700 text-center">Visit Our Aeroponics Farm</h2>
        <p className="text-gray-700 mb-4 text-center">
          Experience the future of farming! Our aeroponics farm offers an innovative and sustainable way to grow
          crops. Come and see how we cultivate fresh produce using cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Visiting Hours:</span> 10:00 AM - 6:00 PM (Mon - Fri)
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span> 2nd Avenue Street,
              <br></br>    Saptagiri Colony, 
West Jaferkhanpet,<br></br>
KK Nagar,
 Chennai-600083
 
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Contact:</span> +91 95000 04963
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <iframe
              title="Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.2935600211858!2d80.20090339234804!3d13.029834948245442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267287b8d6d45%3A0x5b54ec2b6ee35b47!2s25%2C%201st%20St%2C%20Ganga%20Nagar%2C%20Sapthagiri%20Colony%2C%20West%20Jafferkhanpet%2C%20Chennai%2C%20Tamil%20Nadu%20600083!5e0!3m2!1sen!2sin!4v1723621306236!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.google.com/maps/place/25,+1st+St,+Ganga+Nagar,+Sapthagiri+Colony,+West+Jafferkhanpet,+Chennai,+Tamil+Nadu+600083/@13.0298349,80.2009034,18.28z/data=!4m15!1m8!3m7!1s0x3a526726e487dc5b:0xdb43cd36eb88c4bf!2sSapthagiri+Colony,+West+Jafferkhanpet,+Chennai,+Tamil+Nadu+600083!3b1!8m2!3d13.0300592!4d80.201803!16s%2Fg%2F1tfmltjt!3m5!1s0x3a5267287b8d6d45:0x5b54ec2b6ee35b47!8m2!3d13.0300012!4d80.2024014!16s%2Fg%2F11sb0fc7yj?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-full transition duration-300 hover:bg-green-700 "
          >
            Get Directions
          </a>
        </div>
        <div>
          <p className=' text-center text-xl mt-7'>
            Book your appointment now to visit our farm 
          </p>
        </div>

        <div className="flex justify-center">
          <button onClick={()=>{
            setShowFarm(prev => !prev)
          }}
            className="inline-block mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-full transition duration-300 hover:bg-green-700 animate-bounce"
          >
            Book Now
          </button>
        </div>

        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Why Visit Our Farm?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Learn about sustainable farming practices.</li>
            <li>Enjoy a guided tour of our state-of-the-art aeroponics systems.</li>
            <li>Taste freshly harvested produce.</li>
            <li>Participate in hands-on farming activities.</li>
            <li>Explore our farm store with organic products.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default VisitUs;
