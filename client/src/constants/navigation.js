import {
  Home,
  Stethoscope,
  Calendar,
  FileText,
  User,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Find Doctors', href: '/doctors', icon: Stethoscope },
  { label: 'Appointments', href: '/appointments', icon: Calendar },
  { label: 'Health Records', href: '/records', icon: FileText },
  { label: 'Profile', href: '/profile', icon: User },
]

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Support', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  services: [
    { label: 'For Doctors', href: '/for-doctors' },
    { label: 'Mobile App', href: '/app' },
  ],
}