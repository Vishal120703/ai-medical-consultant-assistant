import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import AuthSidePanel from '../components/auth/AuthSidePanel'
import SignInForm from '../components/auth/SignInForm'
import SignUpForm from '../components/auth/SignUpForm'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const tabs = [
  { id: 'signin', label: 'Sign In' },
  { id: 'signup', label: 'Create Account' },
]

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('signin')

  return (
    <div>
    <Header/>
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthSidePanel />

      <div className="relative flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-8">
        <Link
          to="/"
          className="absolute left-4 top-4 flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 sm:left-6 sm:top-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 sm:p-8">
          {/* Tabs */}
          <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-blue-50 p-1">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`rounded-lg py-2 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'signin' ? (
            <SignInForm onSwitchToSignUp={() => setActiveTab('signup')} />
          ) : (
            <SignUpForm onSwitchToSignIn={() => setActiveTab('signin')} />
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
