import { BadgeCheck, Heart, MapPin, Star } from 'lucide-react'

export default function DoctorCard({
  name,
  specialty,
  credentials,
  experience,
  clinic,
  distance,
  rating,
  price,
  image,
  verified,
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="h-48 w-full object-cover" />

        {verified && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white">
            <BadgeCheck className="h-3.5 w-3.5" />
            Verified
          </span>
        )}

        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-gray-500 transition-colors hover:text-red-500"
          aria-label="Add to favorites"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm font-medium text-blue-600">{specialty}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {rating}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {credentials} · {experience}
        </p>

        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {clinic}, {distance}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-lg font-bold text-gray-900">${price}/visit</span>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}
