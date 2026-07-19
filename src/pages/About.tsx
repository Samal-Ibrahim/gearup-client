const About = () => {
  return (
    <section className="container mx-auto space-y-10 px-4 py-12">
      <header className="space-y-3 text-center">
        <p className="font-semibold text-brand-700 text-sm uppercase tracking-[0.2em]">
          About GearUp
        </p>
        <h1 className="font-black text-4xl text-gray-900 sm:text-5xl">
          A simpler way to find your next car
        </h1>
        <p className="mx-auto max-w-3xl text-gray-600 leading-7">
          GearUp helps drivers compare reliable listings, filter by what matters, and move from
          browsing to decision with less noise.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-gray-900 text-lg">Trusted Listings</h2>
          <p className="mt-2 text-gray-600 text-sm leading-6">
            We focus on complete vehicle details so buyers can compare options with confidence.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-gray-900 text-lg">Clear Terms</h2>
          <p className="mt-2 text-gray-600 text-sm leading-6">
            Whether you buy or lease, we aim to present transparent terms and practical next steps.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-gray-900 text-lg">Fast Search</h2>
          <p className="mt-2 text-gray-600 text-sm leading-6">
            Filter by type, deal, and availability to get to the right shortlist in seconds.
          </p>
        </article>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="font-black text-2xl text-gray-900">Our mission</h2>
        <p className="mt-3 text-gray-700 leading-7">
          Make car shopping feel straightforward. Good photos, useful specs, honest descriptions,
          and a smooth path from interest to action.
        </p>
      </div>
    </section>
  )
}

export default About
