const Contact = () => {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="font-semibold text-brand-700 text-sm uppercase tracking-[0.2em]">Contact</p>
          <h1 className="mt-2 font-black text-4xl text-gray-900">Let&apos;s talk</h1>
          <p className="mt-3 text-gray-600 leading-7">
            Have a question about a listing, purchase flow, or lease terms? Reach out and we will
            get back to you as soon as possible.
          </p>
        </div>

        <div className="space-y-3 text-gray-700 text-sm">
          <p>
            <span className="font-semibold">Email:</span> support@gearup.example
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +1 (415) 555-0198
          </p>
          <p>
            <span className="font-semibold">Address:</span> 1234 Market Street, Suite 200, San
            Francisco, CA 94103
          </p>
          <p>
            <span className="font-semibold">Hours:</span> Mon-Fri, 9:00 AM to 6:00 PM
          </p>
        </div>
      </aside>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="font-black text-2xl text-gray-900">Send us a message</h2>
        <p className="mt-2 text-gray-600 text-sm">
          This is a generic contact form layout you can wire up later.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block font-medium text-gray-700 text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block font-medium text-gray-700 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block font-medium text-gray-700 text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us how we can help"
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <button type="button" className="btn-primary px-6 py-2.5 font-semibold">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
