import { ShieldPlus, ShieldCheck, Headset } from 'lucide-react'

const features = [
  { label: 'HIPAA Compliant Security', icon: ShieldCheck },
  { label: '24/7 Patient Support', icon: Headset },
]

export default function AuthSidePanel() {
  return (

    <div className="hidden flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-800 px-10 py-12 text-center lg:flex">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
        <ShieldPlus className="h-10 w-10 text-white" strokeWidth={2} />
      </div>

      <h1 className="mt-8 max-w-md text-3xl font-bold leading-tight text-white xl:text-4xl">
        Your health is our primary focus.
      </h1>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100">
        Access specialized care, manage your medical history, and connect with
        top-rated professionals in just a few clicks. Welcome back to your
        personalized health portal.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {features.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-start gap-3 rounded-xl bg-white/10 px-5 py-4 ring-1 ring-white/15"
          >
            <Icon className="h-5 w-5 text-emerald-300" />
            <span className="text-xs font-medium text-white">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
