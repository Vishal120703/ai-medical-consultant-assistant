import { Search, MapPin } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 sm:border-b-0 sm:border-r">
        <Search className="h-5 w-5 shrink-0 text-gray-400" />
        <input
          type="text"
          placeholder="Specialty, condition or doctor"
          className="w-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 sm:border-b-0 sm:border-r">
        <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
        <input
          type="text"
          placeholder="Location"
          className="w-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:rounded-r-2xl"
      >
        <Search className="h-4 w-4" />
        Search
      </button>
    </div>
  )
}
