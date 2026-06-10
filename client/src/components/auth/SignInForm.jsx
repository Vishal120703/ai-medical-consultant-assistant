import { Mail, Lock } from 'lucide-react'
import FormInput from './FormInput'

export default function SignInForm({ onSwitchToSignUp }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="mt-1 text-sm text-gray-500">
          Please enter your details to sign in.
        </p>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <form onSubmit={handleSubmit} className="space-y-4">
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
          autoComplete="current-password"
          labelRight={
            <button
              type="button"
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </button>
          }
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Create Account
        </button>
      </p>
    </div>
  )
}
