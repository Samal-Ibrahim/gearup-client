export type Car = {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  description: string
  imageUrl: string | undefined
  status: "AVAILABLE" | "SOLD" | "LEASED"
  type: "BUY" | "LEASE"
  createdAt: string
  updatedAt: string
}

type ApiResponse<T> = { success: boolean; data: T }

const cars = async () => {
  const res = await fetch("https://gearup-production-0f61.up.railway.app/cars", {
    method: "GET",
  })
  if (!res.ok) {
    throw new Error("failed to fetch cars")
  }
  const json: ApiResponse<Car[]> = await res.json()
  return json.data
}
export default cars
