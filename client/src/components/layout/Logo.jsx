import { ShieldPlus } from 'lucide-react'

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
        <ShieldPlus className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-lg font-bold text-gray-900">PractoHealth</span>
    </div>
  )
}
