import { ArrowLeft, Building2, Mail, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function UserCard({ name, email, company, isFavorite, onToggleFavorite, userId }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            {name.charAt(0)}
          </div>

          <Button
            onClick={() => onToggleFavorite(userId)}
            variant={isFavorite ? 'danger' : 'secondary'}
            className="!rounded-full !p-2"
            aria-label="Toggle Favorite"
          >
            <Star size={18} className={isFavorite ? 'fill-current' : ''} />
          </Button>
        </div>

        <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
        <div className="mb-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center space-x-2">
            <Building2 size={16} />
            <span className="truncate">{company}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span className="truncate">{email}</span>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-slate-100 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800/50">
        <Link
          to={`/users/${userId}`}
          className="flex w-full items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View Details
          <ArrowLeft size={16} className="ml-1 rotate-180" />
        </Link>
      </div>
    </div>
  )
}
