import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card,Button } from 'react-bootstrap'



function BookingDetails() {
    const trip = useSelector((state) => state.booking.tripBooking)
    console.log(trip)
    console.log(Object.keys(trip).length)

    const handlePayment=()=>{
        console.log('payment')
    }
    return (
        <div>BookingDetails
           {Object.keys(trip).length > 0 && trip.paymentStatus === false && (
  <div>
    <h2>Trip Details</h2>
    <Card style={{ width: '80%' }}>
      <Card.Body>
        <Card.Title>Trip Information</Card.Title>
        <Card.Text>
          <p><strong>Customer:</strong> {trip?.customerId?.username}</p>
          <p><strong>Driver:</strong> {trip?.driverId?.username}</p>
          <p><strong>Vehicle:</strong> {trip?.vehicleId?.vehicleName}</p>
          <p><strong>Trip Start Date:</strong> {new Date(trip?.tripStartDate)?.toLocaleString()}</p>
          <p><strong>Trip End Date:</strong> {new Date(trip?.tripEndDate)?.toLocaleString()}</p>
          <p><strong>Pickup Location:</strong> {trip?.pickUplocation?.address}</p>
          <p><strong>Drop-off Location:</strong> {trip?.dropOfflocation?.address}</p>
          <p><strong>Total Distance:</strong> {trip?.totalDistance} kms</p>
          <p><strong>Payment Status:</strong> {trip?.paymentStatus ? 'Paid' : 'Pending'}</p>
          <Button onClick={handlePayment}>Payment</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
)}

        </div>

    )
}

export default BookingDetails