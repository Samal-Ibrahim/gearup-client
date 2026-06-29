import { useMemo, useState } from "react"

type FiltersState = {
  query: string
  type: string
  deal: string
  minPrice: string
  maxPrice: string
  minYear: string
  maxYear: string
  inStock: string
  sortBy: string
}

const initialFilters: FiltersState = {
  query: "",
  type: "",
  deal: "",
  minPrice: "",
  maxPrice: "",
  minYear: "",
  maxYear: "",
  inStock: "",
  sortBy: "monthly_asc",
}

type FilteringProps = {
  onApply?: (filters: FiltersState) => void
}

const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-0 transition focus:border-brand-200 focus:bg-[#ecfafc]"

const Filtering = ({ onApply }: FilteringProps) => {
  const [filters, setFilters] = useState<FiltersState>(initialFilters)
  const activeFilters = useMemo(
    () =>
      Object.entries(filters).filter(
        ([key, value]) => value !== "" && !(key === "sortBy" && value === "monthly_asc"),
      ),
    [filters],
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFilters((prev) => {
      const nextFilters = { ...prev, [name]: value }

      if (name === "type" || name === "deal") {
        onApply?.(nextFilters)
      }

      return nextFilters
    })
  }

  const resetFilters = () => {
    setFilters(initialFilters)
    onApply?.(initialFilters)
  }

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        onApply?.(filters)
      }}
    >
      <div className="flex flex-row rounded-2xl border-gray-200 shadow">
        <input
          type="text"
          name="query"
          value={filters.query}
          onChange={handleChange}
          className="relative z-10 w-full rounded-2xl bg-gray-50 p-4 shadow outline-0 focus:bg-[#ecfafc]"
          placeholder="Search by brand or model..."
        />
        <button
          type="submit"
          className="-ml-4 w-fit cursor-pointer rounded-r-2xl p-4 pl-8 font-medium text-sm hover:bg-brand-100"
        >
          Search
        </button>
      </div>

      <div className="rounded-2xl border-gray-200 bg-white p-4 shadow">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1">
            <label htmlFor="deal" className="font-medium text-gray-700 text-sm">
              Deal
            </label>
            <select
              name="deal"
              id="deal"
              value={filters.deal}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="">All</option>
              <option value="LEASE">Lease</option>
              <option value="BUY">Buy</option>
              <option value="BOTH">Both</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="type" className="font-medium text-gray-700 text-sm">
              Type
            </label>
            <select
              name="type"
              id="type"
              value={filters.type}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="">All</option>
              <option value="ELECTRIC">Electric</option>
              <option value="GASOLINE">Gasoline</option>
              <option value="HYBRID">Hybrid</option>
              <option value="DIESEL">Diesel</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="inStock" className="font-medium text-gray-700 text-sm">
              Availability
            </label>
            <select
              name="inStock"
              id="inStock"
              value={filters.inStock}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="">All</option>
              <option value="true">In Stock</option>
              <option value="false">Pre-order</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="sortBy" className="font-medium text-gray-700 text-sm">
              Sort by
            </label>
            <select
              name="sortBy"
              id="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="monthly_asc">Monthly Price: Low to High</option>
              <option value="monthly_desc">Monthly Price: High to Low</option>
              <option value="year_desc">Newest First</option>
              <option value="year_asc">Oldest First</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="minPrice" className="font-medium text-gray-700 text-sm">
              Min Monthly ($)
            </label>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              min="0"
              placeholder="200"
              className={inputClassName}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="maxPrice" className="font-medium text-gray-700 text-sm">
              Max Monthly ($)
            </label>
            <input
              type="number"
              name="maxPrice"
              id="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              min="0"
              placeholder="800"
              className={inputClassName}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="minYear" className="font-medium text-gray-700 text-sm">
              Min Year
            </label>
            <input
              type="number"
              name="minYear"
              id="minYear"
              value={filters.minYear}
              onChange={handleChange}
              min="1990"
              placeholder="2019"
              className={inputClassName}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="maxYear" className="font-medium text-gray-700 text-sm">
              Max Year
            </label>
            <input
              type="number"
              name="maxYear"
              id="maxYear"
              value={filters.maxYear}
              onChange={handleChange}
              min="1990"
              placeholder="2026"
              className={inputClassName}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            Active filters:{" "}
            <span className="font-semibold text-gray-900">{activeFilters.length}</span>
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="cursor-pointer rounded-xl border border-gray-200 px-3 py-2 font-medium text-gray-700 text-sm transition hover:bg-gray-50"
          >
            Reset all
          </button>
        </div>

        {activeFilters.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activeFilters.map(([key, value]) => (
              <span
                key={key}
                className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700 text-xs"
              >
                {key}: {value}
              </span>
            ))}
          </div>
        )}
      </div>
    </form>
  )
}

export default Filtering
