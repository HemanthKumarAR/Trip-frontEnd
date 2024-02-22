

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import VehicleCard from "./VehicleCard"
import './VehicleCard.css'
function VehicleContainer() {
  const vehicles = useSelector((state) => {
    return state.vehicle
  })
  console.log(vehicles.serachedVehicle)

  const navigate = useNavigate()

  const handleBook = (vehicleData) => {
    console.log(vehicleData)
    // navigate('/book',{ state: { vehicle: vehicleData } })

    navigate(
      '/book',
      { state: { vehicle: vehicleData } }
    );
  }

  return (
    <div>
      <div className='cards-display'>
        {
          vehicles.serachedVehicle.length !== 0 ? (
            // vehicles.serachedVehicle.map((vehicle)=>(
            //   <div key={vehicle._id}>{vehicle._id} 
            //     <button onClick={()=>handleBook(vehicle)}>Book</button>
            //   </div>
            // ))
            vehicles.serachedVehicle.map((ele) => {
              return <VehicleCard key={ele._id} vehicle={ele} />
            })
          ) : (<h1>No vehicle found</h1>)
        }
      </div>
    </div>


  )

}

export default VehicleContainer

