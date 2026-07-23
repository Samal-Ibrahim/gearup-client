import { useQuery } from "@tanstack/react-query"
import { getCars } from "./api"


export const useCars = (filters: { type?: string; deal?: string; availability?: string }) =>
  useQuery({
    queryKey: ["cars", filters],
    queryFn: () => getCars(filters.type, filters.deal, filters.availability),
  })