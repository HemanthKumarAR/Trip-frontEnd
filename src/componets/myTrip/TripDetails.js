// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { useEffect,useState } from 'react';
// import { useSelector ,useDispatch} from 'react-redux';
// import {startPayment} from '../../actions/bookingAction'


// const TripDetails = (  ) => {
//   const dispatch=useDispatch()
//     const trip=useSelector((state)=> state.booking.tripBooking )
//     console.log(Object.keys(trip).length)

//     const handlePayment=()=>{
//         const confirm=window.confirm('are you sure to pay')
//         if(confirm){
//           console.log(trip._id)
//           dispatch(startPayment(trip._id))

//         }
//     }


//   return (
//     <div>
//    {console.log(trip?.driverId)}
//         {(Object.keys(trip).length>0 && trip.paymentStatus===false) ?(<div>


// <h2>Trip Details</h2>
// <Card style={{width:'80%'}}>
//   <Card.Body>
//     <Card.Title>Trip Information</Card.Title>
//     <Card.Text>
// <p><strong>Customer:</strong> {trip?.customerId?.username}</p>
// <p><strong>Driver:</strong> {trip?.driverId?.username}</p>
// <p><strong>Vehicle:</strong> {trip?.vehicleId?.vehicleName}</p>
// <p><strong>Trip Start Date:</strong> {new Date(trip?.tripStartDate)?.toLocaleString()}</p>
// <p><strong>Trip End Date:</strong> {new Date(trip?.tripEndDate)?.toLocaleString()}</p>
// <p><strong>Pickup Location:</strong> {trip?.pickUplocation?.address}</p>
// <p><strong>Drop-off Location:</strong> {trip?.dropOfflocation?.address}</p>
// <p><strong>Total Distance:</strong> {trip?.totalDistance} kms</p>
// <p><strong>Payment Status:</strong> {trip?.paymentStatus ? 'Paid' : 'Pending'}</p>
//       <Button onClick={handlePayment}>Payment</Button>
//     </Card.Text>
//   </Card.Body>
// </Card>
//       </div>):( <div>No Trip Found</div>)}
//     </div>
//   );
// };

// export default TripDetails;


//---------------
import React ,{useEffect}from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMyTrip } from '../../actions/bookingAction';
import TripCard from './TripCard'


function TripDetails() {
  const trips = useSelector((state) => state.booking.myTrip)
  const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(startGetMyTrip()) 
    },[])

  console.log(trips.length, 'length')
  return (
    <div>
      {trips.length!==0 ?(
        <div className='cards-display'>
        {trips.map((trip) => {
          return <TripCard trip={trip} />
        })}
        
      </div>
      ):(
        <h1> No Trip found</h1>
      )
    }
      
      
    </div>
  )
}

export default TripDetails
