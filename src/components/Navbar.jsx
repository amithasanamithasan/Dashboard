import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm p-4">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">Exam AI</h1>
      <div className="flex gap-6">
        <Link to="" className="hover:text-blue-500">Home</Link>
        <Link to="" className="hover:text-blue-500">Leaderboard</Link>
        <Link to="" className="hover:text-blue-500">Reports</Link>
        <Link to="" className="hover:text-blue-500">Subscription</Link>
      </div>
    </div>
  </nav>
  )  
}

export default Navbar