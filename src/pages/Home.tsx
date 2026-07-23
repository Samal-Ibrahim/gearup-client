import { useState } from "react"
import { Link } from "react-router"
import heroImg from "../assets/pexels-silverkblack-36729874.jpg"
import ErrorHandlers from "../components/ErrorHandlers"
import Filtering from "../components/Filtering"
import { useCars } from "../features/cars/hooks"
import { getCarCountryMeta } from "../utils/carCountry"

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)

const formatMileage = (mileage: number) => new Intl.NumberFormat("en-US").format(mileage)
const getFirstImage = (images?: string[]) =>
  images?.[0] ?? "https://placehold.co/800x500?text=No+Image"

const Home = () => {
  const [filters, setFilters] = useState({ type: "", deal: "", availability: "" })

  const { data = [], isLoading, isError, error, isFetching} = useCars(filters)

  const hasActiveFilters = Boolean(filters.type || filters.deal || filters.availability)

  return (
    <>
      {isFetching && !isLoading && <p>Updating results…</p>}
      <section className="relative pt-0!">
        <div className="relative h-170 w-full sm:h-100 lg:h-180">
          <img
            src={heroImg}
            alt="man with car key"
            className="h-full w-full object-cover object-[70%_top] md:object-[62%_top] lg:object-top-right"
          />
          <a
            href="https://www.pexels.com/photo/smiling-man-sitting-in-car-holding-keys-36729874/"
            className="absolute bottom-2 left-2 z-10 cursor-pointer text-[10px] text-white hover:text-blue-100"
          >
            Photo by Vitaly Gariev
          </a>

          <div className="absolute 2xs:top-2/3 2xs:left-1/2 2xs:flex 2xs:w-80 2xs:-translate-x-1/2 2xs:-translate-y-1/2 2xs:flex-col 2xs:items-center space-y-8 sm:top-1/2 sm:left-2/7 sm:items-start lg:left-1/4 lg:w-120">
            <h1 className="2xs:text-center font-extrabold text-4xl text-white sm:text-start sm:text-4xl lg:text-6xl">
              Cars you love, terms you trust
            </h1>

            <button type="button" className="btn-primary w-fit rounded-full! px-8 py-3 font-black">
              Find Your Car
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-center">
        <Filtering
          onApply={(next) => {
            setFilters({ type: next.type, deal: next.deal, availability: next.availability })
          }}
        />
      </section>
      <section
        className={
          data.length
            ? "container mx-auto space-y-8"
            : "flex flex-col items-center justify-center gap-4"
        }
      >
        <h1 className="text-center font-black text-4xl">Our cars</h1>
        {isLoading ? (
          <p>Loading…</p>
        ) : isError ? (
          <ErrorHandlers
            message={
              <>
                {error.message} <span className="text-2xl">🤷‍♂️</span>
              </>
            }
          />
        ) : data.length ? (
          <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {data.map((car) => {
              const countryMeta = getCarCountryMeta(car.country)
              return (
                <Link key={car.id} to={`/car/${car.id}`}>
                  {
                    <article className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="relative">
                        <img
                          src={getFirstImage(car.imageUrls)}
                          alt={`${car.make} ${car.model}`}
                          className="h-56 w-full object-cover object-center"
                        />

                        <div className="absolute top-3 left-3 z-10">
                          <p className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 font-semibold text-gray-700 text-xs uppercase">
                            <span aria-hidden="true">{countryMeta.flag}</span>
                            <span>{countryMeta.label}</span>
                          </p>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/45 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className="rounded-full bg-white/90 px-2.5 py-1 font-semibold text-gray-800 text-xs uppercase">
                            {car.deal}
                          </span>
                          <span className="rounded-full bg-white/90 px-2.5 py-1 font-semibold text-gray-800 text-xs uppercase">
                            {car.availability}
                          </span>
                        </div>
                      </div>

                      <div className="max-h-60 min-h-60 space-y-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h2 className="font-extrabold text-gray-900 text-xl transition group-hover:text-brand-700">
                              {car.make} {car.model}
                            </h2>
                            <p className="font-medium text-gray-500 text-sm">{car.year}</p>
                          </div>

                          <div className="text-right">
                            <p className="font-extrabold text-2xl text-brand-700">
                              {formatPrice(car.price)}
                            </p>
                            <p className="font-medium text-gray-500 text-xs">list price</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-xl bg-gray-50 p-2">
                            <p className="font-medium text-gray-500 text-xs uppercase">Mileage</p>
                            <p className="font-semibold text-gray-800 text-sm">
                              {formatMileage(car.mileage)} mi
                            </p>
                          </div>
                          <div className="rounded-xl bg-gray-50 p-2">
                            <p className="font-medium text-gray-500 text-xs uppercase">Posted</p>
                            <p className="font-semibold text-gray-800 text-sm">
                              {new Date(car.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <p className="line-clamp-2 text-gray-600 text-sm">
                          {car.description || "Great condition vehicle ready for your next drive."}
                        </p>
                      </div>
                    </article>
                  }
                </Link>
              )
            })}
          </div>
        ) : hasActiveFilters ? (
          <ErrorHandlers
            message={
              <>
                {"We have nothing matching your filters"} <span className="text-2xl">🤷‍♂️</span>
              </>
            }
          />
        ) : (
          <ErrorHandlers
            message={
              <>
                {"Nothing available right now. "} <span className="text-2xl">🤔</span>
              </>
            }
          />
        )}
      </section>
    </>
  )
}

export default Home
