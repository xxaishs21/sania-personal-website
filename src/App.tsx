
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Journey from './pages/Journey'
import Projects from './pages/Projects'
import Rodrigues from './pages/Rodrigues'
import CV from './pages/CV'
import Contact from './pages/Contact'

import './App.css'
import './RodriguesTheme.css'

function App() {
  const { pathname } = useLocation()

  const isRodriguesPage =
    pathname === '/projects/rodrigues-water'

  return (
    <div className={isRodriguesPage ? 'theme-rodrigues' : ''}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/rodrigues-water"
          element={<Rodrigues />}
        />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
