import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="px-4 py-20 text-center">
      <h2 className="mb-4 text-6xl font-bold text-indigo-600 dark:text-indigo-400">404</h2>
      <p className="mb-8 text-xl font-medium text-slate-700 dark:text-slate-300">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="secondary">Return to Home</Button>
      </Link>
    </div>
  )
}
