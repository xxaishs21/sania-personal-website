
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/main/Home'
import About from './pages/main/About'
import Journey from './pages/main/Journey'
import Projects from './pages/main/Projects'
import CV from './pages/main/CV'
import Contact from './pages/main/Contact'

import Rodrigues from './pages/project-details/Rodrigues'
import OptiRecom from './pages/project-details/OptiRecom'
import Cinapple from './pages/project-details/Cinapple'
import QueueCup from './pages/project-details/QueueCup'
import CrossIT from './pages/project-details/CrossIT'
import Ndc from './pages/project-details/Ndc'

import './App.css'
import './RodriguesTheme.css'

function App() {
  const { pathname } = useLocation()

  const isRodriguesPage = pathname === '/projects/rodrigues-water'

  return (
    <div className={isRodriguesPage ? 'theme-rodrigues' : ''}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/rodrigues-water" element={<Rodrigues />}/>
        <Route path="/projects/opti-recom" element={<OptiRecom />}/>
        <Route path="/projects/Cinapple" element={<Cinapple />}/>
        <Route path="/projects/queuecup" element={<QueueCup />}/>
        <Route path="/projects/cross-it" element={<CrossIT />} />
        <Route path="/projects/ndc" element={<Ndc />} />

        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
