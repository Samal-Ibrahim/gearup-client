import { LOGIN_API } from "../../config/constants"
import type { RegisterRequest } from "../../types/api"

export const login = async (email: string, password: string) => {
  const res = await fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error("Login failed")
  const data = await res.json()
  return data
}

export const register = async ({ name, email, password }: RegisterRequest) => {
  const res = await fetch("https://gearup-production-0f61.up.railway.app/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })

  if (!res.ok) {
    throw new Error("Registration failed")
  }

  return res.json()
}
