
// import React from 'react';
// import { useSelector } from 'react-redux';

// function MyVehicle() {
//   const vehicle = useSelector((state) => state.vehicle.myVehicle);
//   console.log(vehicle);

//   return (
//     <div>
//       {vehicle.length === 0 ? (
//         <div>
//         <h2>No vehicles found</h2>
//         <h2> Please add the vehicle</h2>
//         </div>
//       ) : (
//         <ul>
//           {vehicle.map((ele) => (
//             <li key={ele.id}>
//               vehicleName: {ele.vehicleName}, price per KM: {ele.pricePerKm}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MyVehicle;


//-------------------working



// import React from 'react';
// import { useSelector } from 'react-redux';
// import './MyVehicle.css'; 

// function MyVehicle() {
//   const vehicles = useSelector((state) => state.vehicle.myVehicle);

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">My Vehicles</h2>
//       <div className="row">
//         {vehicles.length === 0 ? (
//           <div className="col">
//             <h3>No vehicles found</h3>
//             <h3>Please add a vehicle</h3>
//           </div>
//         ) : (
//           vehicles.map((vehicle, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title"> Vehicle Name :{vehicle.vehicleName}</h5>
//                   <p className="card-text">Price per KM: {vehicle.pricePerKm}</p>
//                   <p className="card-text">Seating capacity: {vehicle.seating}</p>
//                   <p className="card-text">Vehicle number: {vehicle.vehicleNumber}</p>
//                   <p className="card-text">Driver ID: {vehicle.driverId}</p>
//                   <div className="row">
                    
//                     {vehicle.images.map((ele, index) => (
//                    <img key={index} src={`http://localhost:3044/upload/image/${ele.image}`} alt={ele.title} />
//                      ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyVehicle;

// working with csss 


import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import './MyVehicle.css';
import { startRemoveVehicle } from '../../actions/vehicleAction';
import { useParams } from 'react-router-dom';

function MyVehicle() {
  const vehicles = useSelector((state) => state.vehicle.myVehicle);
  const dispatch=useDispatch()
  // const {id}=useParams

  const handelDeleteVehicle=(id)=>{
    console.log(id)
    const result= window.confirm('Do you really want to remove your vehicle ')

    if(result){
      dispatch(startRemoveVehicle(id))
    }
  }

  return (
    <div className="container-fluid">
      <h2 className="text-center my-4">My Vehicles</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {vehicles.length === 0 ? (
          <div className="col">
            <h3>No vehicles found</h3>
            <h3>Please add a vehicle</h3>
          </div>
        ) : (
          vehicles.map((vehicle, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Vehicle Name: {vehicle.vehicleName}</h5>
                  <p className="card-text">Price per KM: {vehicle.pricePerKm}</p>
                  <p className="card-text">Seating capacity: {vehicle.seating}</p>
                  <p className="card-text">Vehicle number: {vehicle.vehicleNumber}</p>
                  <p className="card-text">Driver ID: {vehicle.driverId}</p>
                  <div className="row">
                    {vehicle.images.map((ele, imgIndex) => (
                      <div className="col-md-6" key={imgIndex}>
                        <img
                          src={`http://localhost:3044/upload/image/${ele.image}`}
                          alt={ele.title}
                          className="vehicle-image img-fluid mb-2"
                        />
                      </div>
                    ))}
                    
                  </div>
                </div>
              </div>
              {/* <button variant='outlined' color='error'  fullwidth>Delete My vehicle </button> */}

              <button className="btn btn-outline-danger btn-full-width" onClick={()=>handelDeleteVehicle(vehicle._id)}>Delete My Vehicle</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyVehicle;









