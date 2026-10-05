import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const toggleDarkMode = () => setIsDarkMode((previous) => !previous)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-200 dark:bg-slate-900 dark:text-slate-100">
        <BrowserRouter>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          <main className="pb-16 sm:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  )
}
