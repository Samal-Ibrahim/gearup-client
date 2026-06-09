import { LOGIN_API } from "../../config/constants"
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
