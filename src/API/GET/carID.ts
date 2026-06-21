import { GET_CAR_W_ID_API } from "../../config/constants"
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

const carID = async (ID: string) => {
  const res = await fetch(`${GET_CAR_W_ID_API}/${ID}`, {
    method: "GET",
  })
  if (!res.ok) {
    throw new Error("failed to fetch carID")
  }
  const json: ApiResponse<Car[]> = await res.json()
  return json.data
}
export default carID
