// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import AddressForm from './AddressForm'
// import Map from './map/Map'
// import { useSelector } from 'react-redux'

// function Book() {

//     const location =useLocation()
//     const vehicle=location.state.vehicle
//     console.log(vehicle.vehicleName)
  
//   const {dropOfflocation,pickUplocation}=   useSelector((state)=> state.booking.estimateAmount)
//   // console.log(dropOfflocation.latlon)
//   // console.log(pickUplocation.latlon)
//   // const pickUpCoordinate=pickUplocation.latlon
//   // const dropOffCoordinate=dropOfflocation.latlon

//   const pickUpCoordinate = pickUplocation ? pickUplocation.latlon : null;
// const dropOffCoordinate = dropOfflocation ? dropOfflocation.latlon : null;

// return (
//   <div className="row">
//       <div className="col-md-6">
//           <h2>Book page {vehicle.vehicleName}</h2>
//           <AddressForm vehicle={vehicle} />
//       </div>
//       <div className="col-md-6">
//           <Map coordinates={[pickUpCoordinate, dropOffCoordinate]} drag={true} />
//       </div>
//   </div>
// );
// }

// export default Book

import React from 'react';
import { useLocation } from 'react-router-dom';
import AddressForm from './AddressForm';
import Map from './map/Map';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

function Book() {
  const location = useLocation();
  const vehicle = location.state.vehicle;
  console.log(vehicle.vehicleName);

  const { dropOfflocation, pickUplocation } = useSelector(
    (state) => state.booking.estimateAmount
  );

  const pickUpCoordinate = pickUplocation ? pickUplocation.latlon : null;
  const dropOffCoordinate = dropOfflocation ? dropOfflocation.latlon : null;

  return (
    <div className="row">
      {/* <Col md={6}> */}
        <h2>Book page {vehicle.vehicleName}</h2>
        <AddressForm vehicle={vehicle} />
      {/* </Col> */}
      {/* <Col md={6}> */}
        <Map coordinates={[pickUpCoordinate, dropOffCoordinate]} drag={true} />
      {/* </Col> */}
    </div>
  );
}

export default Book;
