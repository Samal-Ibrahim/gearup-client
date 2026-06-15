import { skipToken, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import carID from "../../API/GET/carID"

const ViewCarPage = () => {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ["car", id],
    queryFn: id ? () => carID(id) : skipToken,
  })

  console.log(data)

  return <div>{id}</div>
}

export default ViewCarPage
