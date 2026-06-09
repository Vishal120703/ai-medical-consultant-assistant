import { Apple, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footerLinks } from '../../constants/navigation'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Your trusted partner in healthcare. Find verified doctors, book
              appointments, and manage your health records — all in one place.
            </p>
            <p className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} PractoHealth. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-sm transition-colors hover:border-gray-400"
              >
                <Apple className="h-4 w-4" />
                App Store
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-sm transition-colors hover:border-gray-400"
              >
                <Play className="h-4 w-4" />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
