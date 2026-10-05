import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Moon, Sun, User as UserIcon } from 'lucide-react'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const getNavLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
    }`

  return (
    <nav className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white shadow-sm transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6 md:space-x-8">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
              <UserIcon className="h-6 w-6" />
              <span>TeamSpace</span>
            </NavLink>

            <div className="hidden space-x-2 sm:flex">
              <NavLink to="/" className={getNavLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/users" className={getNavLinkClass}>
                Users
              </NavLink>
              <NavLink to="/about" className={getNavLinkClass}>
                About
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="flex space-x-1 sm:hidden">
              <NavLink to="/" className={getNavLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/users" className={getNavLinkClass}>
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

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
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:id" element={<UserDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  )
}
