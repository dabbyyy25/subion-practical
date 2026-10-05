export default function Button({ label, onClick, variant = 'primary', children, className = '' }) {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900'

  const variants = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500',
    danger: 'bg-red-50 text-red-600 shadow-sm hover:bg-red-100 focus:ring-red-500 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50',
    secondary: 'bg-slate-100 text-slate-700 shadow-sm hover:bg-slate-200 focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children || label}
    </button>
  )
}
