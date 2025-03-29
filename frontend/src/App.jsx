import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-16 min-h-screen'>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/buy-credits" element={<BuyCredits />} />
    </Routes>
    </div>
  )
}

export default App
