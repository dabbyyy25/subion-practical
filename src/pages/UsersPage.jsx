import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import usersData from '../data/users'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
  }, [users, search])

  useEffect(() => {
    document.title = `Users (${filteredUsers.length}) - TeamSpace`
  }, [filteredUsers])

  const handleToggleFavorite = (userId) => {
    setFavorites((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Team Members</h2>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Find and connect with people across the organization.</p>
        </div>

        <div className="relative w-full md:w-80">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-3 text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            placeholder="Search by name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message={`No users found matching "${search}"`} />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              userId={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
