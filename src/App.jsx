import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />
      case 'Leaderboard':
        return <div className="p-6">Leaderboard Component</div>
      case 'Reports':
        return <div className="p-6">Reports Component</div>
      case 'Subscription':
        return <div className="p-6">Subscription Component</div>
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider>
      <Layout onPageChange={setCurrentPage}>
        {renderContent()}
      </Layout>
    </ThemeProvider>
  )
}

export default App
