import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const Layout = ({ children, onPageChange }) => {
  return (
    <div className="flex">
      <Sidebar onPageChange={onPageChange} />
      <div className="flex-1">
        <TopBar />
        <main className="ml-64">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout 