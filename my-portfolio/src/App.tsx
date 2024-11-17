import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Page/Home'

// Create placeholder components for the routes


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {/* Define Routes for each page */}
          <Routes>
            <Route path="/" element={<Home/>} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
