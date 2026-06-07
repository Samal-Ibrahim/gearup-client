type RegisterRequest = {
  name: string
  email: string
  password: string
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
