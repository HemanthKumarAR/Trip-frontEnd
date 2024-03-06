


import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import './MyVehicle.css';
import { startRemoveVehicle } from '../../actions/vehicleAction';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


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
    // <div className="container-fluid">
    //   <h2 className="text-center my-4">My Vehicles</h2>
    //   <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {vehicles.length === 0 ? (
    //       <div className="col">
    //         <h3>No vehicles found</h3>
    //         <h3>Please add a vehicle</h3>
    //       </div>
    //     ) : (
    //       vehicles.map((vehicle, index) => (
    //         <div className="col" key={index}>
    //           <div className="card h-100">
    //             <div className="card-body">
    //               <h5 className="card-title">Vehicle Name: {vehicle.vehicleName}</h5>
    //               <p className="card-text">Price per KM: {vehicle.pricePerKm}</p>
    //               <p className="card-text">Seating capacity: {vehicle.seating}</p>
    //               <p className="card-text">Vehicle number: {vehicle.vehicleNumber}</p>
    //               <p className="card-text">Driver ID: {vehicle.driverId}</p>
    //               <div className="row">
    //                 {vehicle.images.map((ele, imgIndex) => (
    //                   <div className="col-md-6" key={imgIndex}>
    //                     <img
    //                       src={`http://localhost:3044/upload/image/${ele.image}`}
    //                       alt={ele.title}
    //                       className="vehicle-image img-fluid mb-2"
    //                     />
    //                   </div>
    //                 ))}
                    
    //               </div>
    //             </div>
    //           </div>
    //           {/* <button variant='outlined' color='error'  fullwidth>Delete My vehicle </button> */}

    //           <button className="btn btn-outline-danger btn-full-width" onClick={()=>handelDeleteVehicle(vehicle._id)}>Delete My Vehicle</button>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </div>
    <Container>
         <h2 className="text-center my-4">My Vehicles</h2>
      <Row xs={1} md={6} className="g-4">
        {vehicles.length === 0 ? (
          <Col>
            <h3>No vehicles found</h3>
            <h3>Please add a vehicle</h3>
          </Col>
        ) : (
          vehicles.map((vehicle, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Vehicle Name: {vehicle.vehicleName}</Card.Title>
                  <Card.Text>Price per KM: {vehicle.pricePerKm}</Card.Text>
                  <Card.Text>Seating capacity: {vehicle.seating}</Card.Text>
                  <Card.Text>Vehicle number: {vehicle.vehicleNumber}</Card.Text>
                  <Card.Text>Driver ID: {vehicle.driverId}</Card.Text>
                  <Row>
                    {vehicle.images.map((ele, imgIndex) => (
                      <Col md={6} key={imgIndex}>
                        <Card.Img
                          src={`http://localhost:3044/upload/image/${ele.image}`}
                          alt={ele.title}
                          className="vehicle-image img-fluid mb-2"
                        />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-danger" className="btn-full-width" onClick={() => handelDeleteVehicle(vehicle._id)}>
                    Delete My Vehicle
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default MyVehicle;









