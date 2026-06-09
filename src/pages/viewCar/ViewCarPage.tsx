import { useParams } from "react-router-dom"
import carID from "../../API/GET/carID"

const ViewCarPage = () => {
  const { id } = useParams()

  if(!id || id === undefined){
    return <div>Missing id</div>
  }
  
  console.log(carID(id))
  return <div>{id}</div>
}

export default ViewCarPage
