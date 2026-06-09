import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-blue-600 px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find the right doctor, right now
          </h1>
          <p className="mt-4 text-base text-blue-100 sm:text-lg">
            Search from 10,000+ verified specialists and book an appointment in
            seconds.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
