export default function SpecialtyCard({ name, icon: Icon }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.75} />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </button>
  )
}
