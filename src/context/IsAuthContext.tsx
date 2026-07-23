import { createContext, type ReactNode, useContext, useState } from "react"
import { getToken } from "../features/auth/token";

type AuthContextType = {
  isAuth: boolean
  authorize: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type IsAuthProviderProps = {
  children: ReactNode
}

export const IsAuthProvider = ({ children }: IsAuthProviderProps) => {
  const [isAuth, setAuth] = useState(() => Boolean(getToken()))

  const authorize = () => setAuth(true)
  const logout = () => setAuth(false)

  return (
    <AuthContext.Provider value={{ isAuth, authorize, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within IsAuthProvider")
  return ctx
}
