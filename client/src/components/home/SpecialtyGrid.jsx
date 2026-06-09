import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SpecialtyCard from './SpecialtyCard'
import { specialties } from '../../data/specialties'

export default function SpecialtyGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Browse by specialty
        </h2>
        <Link
          to="/specialties"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {specialties.map((specialty) => (
          <SpecialtyCard key={specialty.id} {...specialty} />
        ))}
      </div>
    </section>
  )
}
