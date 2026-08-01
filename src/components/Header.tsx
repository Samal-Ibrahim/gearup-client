import { NavLink } from "react-router-dom"
import profileImg from "../assets/profile-img.jpg"
import { useAuth } from "../context/IsAuthContext"
import { clearToken } from "../features/auth/token"

const Header = () => {
  const { isAuth, logout } = useAuth()

  // const url = window.location.pathname

  return (
    <header className="sticky top-0 z-50 border-slate-200/60 border-b bg-slate-100/80 shadow-md backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-1 sm:px-6">
        <NavLink to="/" className="font-black text-slate-900 text-xl uppercase tracking-[0.18em]">
          GearUp
        </NavLink>

        <nav className="hidden items-center sm:flex">
          {!isAuth && (
            <NavLink
              to="/login"
              className="rounded-full px-4 py-2 font-semibold text-slate-700 text-sm transition-all duration-300 hover:bg-white/90 hover:text-slate-900"
            >
              Login
            </NavLink>
          )}
          {isAuth && (
            <div className="flex flex-row items-center gap-4 py-1">
              <NavLink
                to="/login"
                className="rounded-full bg-slate-100/80 px-4 py-1 transition-all duration-300 hover:bg-white/90 hover:text-slate-900"
                onClick={() => {
                  logout()
                  clearToken()
                }}
              >
                Logout
              </NavLink>
              <div className="flex">
                <NavLink to="/profile">
                  <img
                    className="h-9 w-9 rounded-full object-cover"
                    src={profileImg}
                    alt="profile img"
                  />
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
