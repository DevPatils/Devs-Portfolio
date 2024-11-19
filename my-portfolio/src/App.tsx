
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './Page/Home'
import Projects from './Page/Projects'
import Achievement from './Page/Achievement'

// Create placeholder components for the routes


function App() {
  

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          {/* Define Routes for each page */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/achievement" element={<Achievement/>} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
