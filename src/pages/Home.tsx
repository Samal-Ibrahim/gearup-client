import { useQuery } from "@tanstack/react-query"
import cars from "../API/GET/cars"
import heroImg from "../assets/pexels-silverkblack-36729874.jpg"

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
        <div className="w-full sm:h-100 h-170 lg:h-180 relative">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover object-[70%_top] md:object-[62%_top] lg:object-top-right"
          />
          <a
            href="https://www.pexels.com/photo/smiling-man-sitting-in-car-holding-keys-36729874/"
            className="text-[10px] absolute bottom-2 left-2 cursor-pointer text-black hover:text-gray-100 z-10"
          >
            Photo by Vitaly Gariev
          </a>
          <div className="absolute 2xs:flex 2xs:flex-col sm:items-start 2xs:items-center 2xs:top-2/3 sm:top-1/2 2xs:left-1/2 sm:left-2/7 lg:left-1/4 xs:-translate-x-1/2 2xs:-translate-y-1/2 2xs:w-80 lg:w-120 space-y-8 ">
            <h1 className="text-white font-extrabold sm:text-4xl text-4xl lg:text-6xl xs:text-center sm:text-start">
              Cars you love, terms you trust
            </h1>

            <button type="button" className="btn-primary py-3 px-8 w-fit rounded-full! font-black">
              Find Your Car
            </button>
          </div>
        </div>
      </section>
      <section className="space-y-4 container mx-auto">
        <h1 className="text-center font-black text-4xl">Our cars</h1>
        <div className="space-y-4 flex w-fit flex-wrap">
          {data.map((car) => (
            <div key={car.id} className="bg-gray-50 p-6 rounded shadow-sm w-fit">
              <div className="w-100 h-80 ">
                <img src={car.imageUrl} alt="" className="w-full h-full object-cover object-top" />
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
