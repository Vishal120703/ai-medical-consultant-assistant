import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-500">This page will be added later.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  )
}
