import type { CarCountry } from "../types/car"

type CountryMeta = {
  flag: string
  label: string
}

const COUNTRY_META: Record<CarCountry, CountryMeta> = {
  JAPAN: { flag: "🇯🇵", label: "Japan" },
  USA: { flag: "🇺🇸", label: "USA" },
  GERMANY: { flag: "🇩🇪", label: "Germany" },
  ITALY: { flag: "🇮🇹", label: "Italy" },
}

export const getCarCountryMeta = (country: CarCountry): CountryMeta => COUNTRY_META[country]
