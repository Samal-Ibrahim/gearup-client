import { NavLink } from "react-router-dom"

const navItemClasses = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60",
    isActive
      ? "bg-cyan-500 text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)]"
      : "text-slate-700 hover:bg-white/90 hover:text-slate-900",
  ].join(" ")

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-slate-200/60 border-b bg-slate-100/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="font-black text-slate-900 text-xl uppercase tracking-[0.18em]">
          GearUp
        </NavLink>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm sm:flex">
          <NavLink to="/" className={navItemClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navItemClasses}>
            About
          </NavLink>
          <NavLink to="/login" className={navItemClasses}>
            Login
          </NavLink>
          <NavLink to="/contact" className={navItemClasses}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
