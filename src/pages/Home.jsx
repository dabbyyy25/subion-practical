import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12 text-center">
      <div className="mb-4 inline-block rounded-full bg-indigo-100 p-4 dark:bg-indigo-900/50">
        <Building2 size={48} className="text-indigo-600 dark:text-indigo-400" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        Welcome to TeamSpace Directory
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        Connect, collaborate, and discover your colleagues. Access contact information, roles, and company details all in one secure place.
      </p>
      <div className="pt-6">
        <Link to="/users">
          <Button variant="primary" className="px-8 py-3 text-lg">
            Browse Directory
          </Button>
        </Link>
      </div>
    </div>
  )
}
