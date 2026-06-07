import { useQuery } from "@tanstack/react-query"
import cars from "../API/GET/cars"
import heroImg from "../assets/pexels-silverkblack-36729874.jpg"
import Search from "../components/Search"

const Home = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cars"],
    queryFn: () => cars(),
  })

  if (isPending) return <p>Loading…</p>
  if (isError) return <p>Error: {error.message}</p>

  console.log(data)
  return (
    <>
      <section className="relative pt-0!">
        <div className="relative h-170 w-full sm:h-100 lg:h-180">
          <img
            src={heroImg}
            alt=""
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
        <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {data.map((car) => (
            <div key={car.id} className="w-fit rounded bg-gray-50 p-6 shadow-sm">
              <div className="">
                <img src={car.imageUrl} alt="" className="h-full w-full object-cover object-top" />
              </div>
              <h1>{car.make}</h1>
              <h1>{car.description}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
