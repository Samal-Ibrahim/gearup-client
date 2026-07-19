const Footer = () => {
  return (
    <footer className="border-gray-700 border-t bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="font-black text-white text-xl">GearUp</h2>
            <p className="max-w-xs text-gray-400 text-sm leading-6">
              Find the right car with confidence. Browse trusted listings, compare options, and
              drive away with a deal that fits your budget.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="/"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>1234 Market Street, Suite 200</li>
              <li>San Francisco, CA 94103</li>
              <li>
                <a
                  href="tel:+14155550198"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  +1 (415) 555-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@gearup.example"
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  support@gearup.example
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Hours</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-gray-700 border-t pt-6 text-center text-gray-500 text-sm">
          <p>© 2026 GearUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
