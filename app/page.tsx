"use client"
import Hero from '@/components/Hero'
import { CarCard, FilterComponent, SearchBar } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
  const cars = await fetchCars();
  const isEmptyData = cars?.length < 1 || !Array.isArray(cars) || !cars;

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
        {!isEmptyData ? (
          <section>
            <div className="home__cars-wrapper">
              {
                cars.map((car, index) => (
                  <div key={index}>
                    <CarCard car={car} />
                  </div>
                ))
              }
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results found!
            </h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
