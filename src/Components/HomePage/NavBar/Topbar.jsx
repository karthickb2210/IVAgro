import React from 'react'
import {FaInstagram,FaWhatsapp,FaFacebook} from "react-icons/fa"
export default function Topbar() {
  return (
    <>
      <div className="bg-teal-950 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Social media icons */}
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
          </div>
          {/* Current location and contact */}
          <div className="text-sm flex items-center space-x-4">
            <span>info@ironvalleyagro.in</span>
            <span>|</span>
            <span>+91-8754461696</span>
          </div>
        </div>
      </div>
    </>
  )
}
