import { GET_CARS_API } from "../../config/constants"

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
  deal: "BUY" | "LEASE" | "BOTH"
  type: "GASOLINE" | "ELECTRIC" | "HYBRID" | "DIESEL"
  availability: "PRE_ORDER" | "IN_STOCK"
  createdAt: string
  updatedAt: string
}

type ApiResponse<T> = { sucsess: boolean; data: T }

const cars = async (type?: string, deal?: string, availability?: string) => {
  const params = new URLSearchParams()

  if (type) params.set("type", type)
  if (deal) params.set("deal", deal)
  if (availability) params.set("availability", availability)
  console.log("this: ", availability, type, deal)

  const qs = params.toString()
  const url = qs ? `${GET_CARS_API}?${qs}` : GET_CARS_API

  const res = await fetch(url, { method: "GET" })
  if (!res.ok) {
    throw new Error("failed to fetch cars")
  }
  const json: ApiResponse<Car[]> = await res.json()
  console.log(json.data)
  return json.data
}
export default cars
