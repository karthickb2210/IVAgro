import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function NotFoundPage() {
  return (
    <>
    <NavBar />
    <div className="flex z-20 mt-16 flex-col items-center justify-center min-h-screen ">
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">Sorry for Inconvenience</h2>
      <p className="text-lg text-gray-500 mb-6">This page is under construction.</p>

      <div className="relative">
        <div className="animate-bounce bg-yellow-400 rounded-full h-32 w-32 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="mt-4 text-center text-gray-500">
          We're working on getting this page up and running. Please check back soon!
        </p>
      </div>
    </div>
    </>
  )
}
