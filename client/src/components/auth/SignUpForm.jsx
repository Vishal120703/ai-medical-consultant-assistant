import { useState } from 'react'
import { User, Mail, Lock, Stethoscope } from 'lucide-react'
import FormInput from './FormInput'

const roles = [
  { id: 'patient', label: 'Patient', icon: User },
  { id: 'doctor', label: 'Doctor', icon: Stethoscope },
]

export default function SignUpForm({ onSwitchToSignIn }) {
  const [role, setRole] = useState('patient')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend (include selected `role`)
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-1 text-sm text-gray-500">
          Get started with your health portal.
        </p>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <span className="mb-1.5 block text-sm font-medium text-gray-700">
            I am a
          </span>
          <div className="grid grid-cols-2 gap-3">
            {roles.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setRole(id)}
                className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                  role === id
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <FormInput
          label="Full Name"
          icon={User}
          type="text"
          placeholder="e.g. John Doe"
          autoComplete="name"
        />

        <FormInput
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="e.g. name@healthcare.com"
          autoComplete="email"
        />

        <FormInput
          label="Password"
          icon={Lock}
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <FormInput
          label="Confirm Password"
          icon={Lock}
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignIn}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign In
        </button>
      </p>
    </div>
  )
}
