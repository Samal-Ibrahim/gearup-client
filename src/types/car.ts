export type CarCountry = "JAPAN" | "USA" | "GERMANY" | "ITALY"

export type CarStatus = "AVAILABLE" | "SOLD" | "LEASED"
export type CarDeal = "BUY" | "LEASE" | "BOTH"
export type CarType = "GASOLINE" | "ELECTRIC" | "HYBRID" | "DIESEL"
export type CarAvailability = "PRE_ORDER" | "IN_STOCK"

export type Car = {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  description: string
  imageUrls: string[]
  country: CarCountry
  status: CarStatus
  deal: CarDeal
  type: CarType
  availability: CarAvailability
  createdAt: string
  updatedAt: string
}
