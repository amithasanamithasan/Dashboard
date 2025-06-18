
import React from 'react'

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Exam AI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
          <p>Your dashboard overview will appear here</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <p>Your recent activities will be displayed here</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Tests</h2>
          <p>Your scheduled tests will be shown here</p>
        </div>
      </div>
    </div>
  )
}

export default Home 

