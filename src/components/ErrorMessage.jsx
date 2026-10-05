import { AlertCircle } from 'lucide-react'

export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-16 dark:border-slate-700 dark:bg-slate-800/50">
      <AlertCircle className="mb-4 h-12 w-12 text-slate-400" />
      <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{message}</p>
    </div>
  )
}
