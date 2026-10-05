import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Briefcase, Building2, Mail } from 'lucide-react'
import usersData from '../data/users'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

export default function UserDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const foundUser = usersData.find((item) => item.id === Number(id))
    setUser(foundUser || null)
    setIsLoading(false)
  }, [id])

  useEffect(() => {
    if (user) {
      document.title = `User: ${user.name} - TeamSpace`
    } else if (!isLoading) {
      document.title = 'User Not Found - TeamSpace'
    }
  }, [user, isLoading])

  if (isLoading) return <Loading />

  if (!user) {
    return (
      <div className="px-4 py-20 text-center">
        <ErrorMessage message="Sorry, we couldn't find this user's profile." />
        <Button variant="primary" onClick={() => navigate('/users')} className="mt-6">
          Back to Directory
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <Button variant="secondary" onClick={() => navigate('/users')} className="mb-4">
        <ArrowLeft size={18} className="mr-2" />
        Back to Users
      </Button>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600" />

        <div className="px-8 pb-8">
          <div className="-mt-12 mb-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-white text-4xl font-bold text-indigo-600 shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-indigo-400">
              {user.name.charAt(0)}
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
              <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">{user.role}</p>
            </div>

            <Button variant="primary" onClick={() => (window.location.href = `mailto:${user.email}`)}>
              <Mail size={18} className="mr-2" />
              Contact
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 dark:border-slate-700 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Contact Details</h3>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Mail size={20} />
                </div>
                <span className="font-medium">{user.email}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Organization</h3>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Building2 size={20} />
                </div>
                <span className="font-medium">{user.company}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Briefcase size={20} />
                </div>
                <span className="font-medium">{user.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
