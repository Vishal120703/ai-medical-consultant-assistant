import Hero from '../components/home/Hero'
import SpecialtyGrid from '../components/home/SpecialtyGrid'
import DoctorGrid from '../components/home/DoctorGrid'

export default function HomePage() {
  return (
    <div className="space-y-12 py-8 sm:py-12">
      <Hero />
      <SpecialtyGrid />
      <DoctorGrid />
    </div>
  )
}
