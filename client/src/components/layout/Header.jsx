import { Bell } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { navLinks } from '../../constants/navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={label}
              to={href}
              end={href === '/'}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>

          <div className="hidden h-9 w-9 overflow-hidden rounded-full bg-gray-200 sm:block">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800"
          >
            Login / Signup
          </button>
        </div>
      </div>
    </header>
  )
}
