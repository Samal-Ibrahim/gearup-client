import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"
import cars from "../API/GET/cars"
import heroImg from "../assets/pexels-silverkblack-36729874.jpg"
import Search from "../components/Filtering"

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)

const formatMileage = (mileage: number) => new Intl.NumberFormat("en-US").format(mileage)

const Home = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cars"],
    queryFn: () => cars(),
  })

  if (isPending) return <p>Loading…</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <>
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
        <Search />
      </section>
      <section className="container mx-auto space-y-8">
        <h1 className="text-center font-black text-4xl">Our cars</h1>
        <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {data.map((car) => (
            <Link key={car.id} to={`/car/${car.id}`}>
              {
                <article className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative">
                    <img
                      src={car.imageUrl ?? "https://placehold.co/800x500?text=No+Image"}
                      alt={`${car.make} ${car.model}`}
                      className="h-56 w-full object-cover object-center"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/45 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="rounded-full bg-white/90 px-2.5 py-1 font-semibold text-gray-800 text-xs uppercase">
                        {car.type}
                      </span>
                      <span className="rounded-full bg-white/90 px-2.5 py-1 font-semibold text-gray-800 text-xs uppercase">
                        {car.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
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
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
