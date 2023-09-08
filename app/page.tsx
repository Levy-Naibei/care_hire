import Hero from '@/components/Hero'
import { FilterComponent, SearchBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container" id="cars">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <FilterComponent title="fuel" />
            <FilterComponent title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
