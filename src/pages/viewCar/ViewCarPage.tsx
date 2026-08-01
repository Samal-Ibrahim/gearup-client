import { skipToken, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ErrorHandlers from "../../components/ErrorHandlers"
import { getCarById } from "../../features/cars/api"
import { getCarCountryMeta } from "../../utils/carCountry"

const CarDetailsPage = () => {
  const { id } = useParams()
  const isLoggedIn = Boolean(localStorage.getItem("token"))
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["car", id],
    queryFn: id ? () => getCarById(id) : skipToken,
  })

  useEffect(() => {
    if (!isModalOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", onEscape)
    return () => window.removeEventListener("keydown", onEscape)
  }, [isModalOpen])

  if (!id) return <ErrorHandlers message="Missing car id." />
  if (isLoading) return <ErrorHandlers message="Loading car details…" />
  if (isError) {
    return (
      <ErrorHandlers
        message={`Could not load car details: ${error.message}`}
        styling="flex flex-col items-center justify-center gap-4 text-red-600"
      />
    )
  }
  if (!data) return <ErrorHandlers message="No car found for this listing." />

  const fallbackImage = "https://placehold.co/1200x800?text=No+Image"
  const images = data.imageUrls?.length ? data.imageUrls : [fallbackImage]
  const activeImage = images[activeImageIndex] ?? images[0]
  const thumbSlots = 4
  const shownThumbs = images.slice(0, thumbSlots)
  const countryMeta = getCarCountryMeta(data.country)

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="space-y-3 p-3">
            <div className="relative rounded-2xl bg-gray-300">
              <div className="flex aspect-4/3 flex-col justify-center">
                <button
                  type="button"
                  className="h-full cursor-zoom-in"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src={activeImage}
                    alt={`${data.make} ${data.model}`}
                    className="mx-auto h-full object-cover object-center"
                  />
                </button>
              </div>
              <p className="absolute right-3 bottom-3 rounded-full bg-black/65 px-3 py-1 font-medium text-white text-xs backdrop-blur-sm">
                {images.length} {images.length === 1 ? "photo" : "photos"}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {shownThumbs.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative overflow-hidden rounded-xl bg-gray-100 transition ${
                    activeImageIndex === index
                      ? "ring-2 ring-gray-900 ring-offset-2 ring-offset-white"
                      : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 hover:ring-offset-white"
                  }`}
                >
                  <div className="aspect-4/3">
                    <img
                      src={image}
                      alt={`${data.make} ${data.model} preview ${index + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {index === thumbSlots - 1 && images.length > thumbSlots && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/55 font-semibold text-sm text-white">
                      +{images.length - thumbSlots}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <article className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-3">
            <p className="inline-flex rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-600 text-xs uppercase tracking-[0.2em]">
              {data.type} • {data.status}
            </p>
            <p className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700 text-xs uppercase">
              <span aria-hidden="true">{countryMeta.flag}</span>
              <span>{countryMeta.label}</span>
            </p>
            <h1 className="font-black text-3xl text-gray-900 sm:text-4xl">
              {data.make} {data.model}
            </h1>
            <p className="text-gray-500">Model year {data.year}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Price</p>
              <p className="mt-1 font-black text-gray-900 text-xl">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(data.price)}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Mileage</p>
              <p className="mt-1 font-black text-gray-900 text-xl">
                {new Intl.NumberFormat("en-US").format(data.mileage)} mi
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Posted</p>
              <p className="mt-1 font-semibold text-base text-gray-900">
                {new Date(data.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Updated</p>
              <p className="mt-1 font-semibold text-base text-gray-900">
                {new Date(data.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-bold text-gray-900 text-lg">Description</h2>
            <p className="text-gray-600 leading-7">
              {data.description || "This vehicle does not have a description yet."}
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="font-bold text-gray-900 text-lg">Next step</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              {isLoggedIn ? (
                <>
                  <button
                    type="button"
                className="rounded-full bg-gray-900 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                  >
                    Lease this car
                  </button>
                  <button
                    type="button"
                  className="rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-100"
                  >
                    Order this car
                  </button>
                </>
              ) : (
<>
                <Link
                  to="/login"
                className="rounded-full bg-gray-900 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                >
                  Sign in to lease
                </Link>
                <Link
                  to="/login"
                  className="rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-100"
                >
                  Sign in to order
                </Link>
                </>
              )}
            </div>
          </div>
        </article>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-white/90 px-3 py-1 font-semibold text-gray-900 text-sm transition hover:bg-white"
            >
              Close
            </button>
            <img
              src={activeImage}
              alt={`${data.make} ${data.model} full size`}
              className="max-h-[92vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CarDetailsPage
