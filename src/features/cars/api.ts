import { GET_CAR_W_ID_API, GET_CARS_API } from "../../config/constants"
import type { ApiResponse } from "../../types/api"
import type { Car } from "../../types/car"

export const getCarById = async (ID: string) => {
  const res = await fetch(`${GET_CAR_W_ID_API}/${ID}`, {
    method: "GET",
  })
  if (!res.ok) {
    throw new Error("failed to fetch carID")
  }
  const json: ApiResponse<Car | null> = await res.json()
  return json.data
}

export const getCars = async (type?: string, deal?: string, availability?: string) => {
  const params = new URLSearchParams()

  if (type) params.set("type", type)
  if (deal) params.set("deal", deal)
  if (availability) params.set("availability", availability)

  const qs = params.toString()
  const url = qs ? `${GET_CARS_API}?${qs}` : GET_CARS_API

  const res = await fetch(url, { method: "GET" })
  if (!res.ok) {
    throw new Error("failed to fetch cars")
  }
  const json: ApiResponse<Car[]> = await res.json()
  return json.data
}
