
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import About from './pages/Education'
import Projects from './pages/Projects'
import Experience from './pages/Experience';
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
