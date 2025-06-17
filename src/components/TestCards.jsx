import React from 'react'

const TestCards = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    {["Speaking", "Listening", "Writing"].map((test) => (
      <div key={test} className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-2">{test} Test</h3>
        <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-md hover:bg-blue-200">
          Start Test
        </button>
      </div>
    ))}
  </div>
  )
}

export default TestCards