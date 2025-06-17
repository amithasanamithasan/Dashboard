import React from 'react'


const HeroSection = () => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg text-center my-8">
    <h2 className="text-3xl font-bold mb-4">Ready For Exam Today?</h2>
    <p className="mb-6">Hey! How are you today? Let’s start your exam!</p>
    <div className="flex gap-4 justify-center">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Let’s Start!
      </button>
      <button className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300">
        Try Later
      </button>
    </div>
  </div>
  )
}

export default HeroSection