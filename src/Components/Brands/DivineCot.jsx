import React from 'react'
import NavBar from '../HomePage/NavBar/NavBar'

function DivineCot() {
  return (
    <>
    <NavBar />
    <div className="flex mt-[40vh] flex-col items-center">
    <img
      src="/divi.png" // Replace with your logo path
      alt="Green Muscle Logo"
      className=" w-1/3 rounded-3xl h-32 transition-transform duration-300 hover:scale-110"
    />
    <h1 className="mt-8 mb-[30vh] text-4xl font-bold  transition-transform duration-300 hover:scale-110">
      Divine Cotyledons
    </h1>
  </div>
  </>
  )
}

export default DivineCot
