import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="mb-4 h-10 w-10 animate-spin text-indigo-600" />
      <p className="font-medium text-slate-500 dark:text-slate-400">Loading team directory...</p>
    </div>
  )
}
