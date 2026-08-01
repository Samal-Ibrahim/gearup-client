import { NavLink } from "react-router-dom"
import { useAuth } from "../context/IsAuthContext"
import { clearToken } from "../features/auth/token"

const Header = () => {
  const { isAuth, logout } = useAuth()

  // const url = window.location.pathname



  return (
    <header className="sticky top-0 z-50 border-slate-200/60 border-b bg-slate-100/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="font-black text-slate-900 text-xl uppercase tracking-[0.18em]">
          GearUp
        </NavLink>

        <nav className="hidden items-center rounded-full shadow-sm sm:flex">
          {!isAuth && (
            <NavLink
              to="/login"
              className="rounded-full px-4 py-2 font-semibold text-slate-700 text-sm shadow-md transition-all duration-300 hover:bg-white/90 hover:text-slate-900"
            >
              Login
            </NavLink>
          )}
          {isAuth && (
            <>
              <NavLink
                to="/profile"
                className="bg-cyan-500 text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)]"
              >
                Profile
              </NavLink>

              <NavLink
                to="/login"
                className=""
                onClick={() => {
                  logout()
                  clearToken()
                }}
              >
                Logout
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
