import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About - TeamSpace'
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">About Us</h2>
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 leading-relaxed text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <p>
          TeamSpace is a modern employee directory designed to seamlessly connect professionals across organizations.
          Built with React, Tailwind CSS, and React Router, this application demonstrates robust modern web development practices.
        </p>
        <p>
          Features include real-time client-side search, a simulated data fetching architecture, favoriting functionality,
          and full dark mode support, offering a premium user experience on all devices.
        </p>
      </div>
    </div>
  )
}
