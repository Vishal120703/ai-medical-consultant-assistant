import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-screen pages (no header/footer) */}
        <Route path="/login" element={<AuthPage />} />

        {/* Pages with header/footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<PlaceholderPage title="Find Doctors" />} />
          <Route path="/appointments" element={<PlaceholderPage title="Appointments" />} />
          <Route path="/records" element={<PlaceholderPage title="Health Records" />} />
          <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
          <Route path="/specialties" element={<PlaceholderPage title="All Specialties" />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Support" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/for-doctors" element={<PlaceholderPage title="For Doctors" />} />
          <Route path="/app" element={<PlaceholderPage title="Mobile App" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
