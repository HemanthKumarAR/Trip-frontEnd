import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startPayment } from '../../actions/bookingAction';




const TripCard = ({ trip }) => {

 const dispatch=useDispatch()

    const handlePaymet=()=>{
        console.log(trip._id)
        dispatch(startPayment(trip._id))
    }

    const handlePaymentDetails=()=>{
        console.log('payment details')
    }

    return (
        <Card style={{ width: '75rem', height: '320px' }}>
            <Row>
                <Col md={6}>
                    <Card.Body>
                        <Card.Text><strong>Trip ID:</strong> {trip._id}</Card.Text>
                        {/* <Card.Text><strong>Customer:</strong> {trip.customerId.username}</Card.Text> */}
                        <Card.Text><strong>Driver:</strong> {trip.driverId.username}</Card.Text>
                        <Card.Text><strong>Vehicle:</strong> {trip.vehicleId.vehicleName}</Card.Text>
                        <Card.Text><strong>Trip Start Date:</strong> {new Date(trip.tripStartDate).toLocaleString()}</Card.Text>
                        <Card.Text><strong>Trip End Date:</strong> {new Date(trip.tripEndDate).toLocaleString()}</Card.Text>
                        {/* <Card.Text><strong>Pick-up Location:</strong> {trip.pickUplocation.address}</Card.Text>
                        <Card.Text><strong>Drop-off Location:</strong> {trip.dropOfflocation.address}</Card.Text> */}
                        <Card.Text><strong>Trip Status</strong> {trip.tripStatus}</Card.Text>
                    </Card.Body>
                </Col>
                <Col md={6}>
                    <Card.Body>
                    <Card.Text><strong>Pick-up Location:</strong> {trip.pickUplocation.address}</Card.Text>
                        <Card.Text><strong>Drop-off Location:</strong> {trip.dropOfflocation.address}</Card.Text>
                        <Card.Text><strong>Total Amount:</strong> {trip.totalAmount}</Card.Text>
                        {/* <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text> */}

                         
                         {/* {trip.tripStatus==='driverConfirm' &&(
                            <div>
                          <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
                         <Button onClick={handlePaymet}>Payment</Button>
                        
                            </div>
                         )} */}

     {/* {trip.tripStatus === 'driverConfirm' && (
          <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
        )} */}
        {trip.tripStatus === 'paymentCompleted' && (
            <div>
            <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
          <Button onClick={handlePaymentDetails}>Payment Details</Button>
          </div>
        )}
        {trip.tripStatus === 'driverConfirm' && !trip.paymentStatus && (
            
            <div>
            <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
            <Button onClick={handlePaymet}>Payment</Button>
            </div>
          
         
        )}
                    </Card.Body>
                </Col>

            </Row>
        </Card>
    );
};

export default TripCard;
