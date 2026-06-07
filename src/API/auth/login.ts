export const login = async (email: string, password: string) => {
  const res = await fetch("https://gearup-production-0f61.up.railway.app/auth/login", {
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