

import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux';
import { startAcceptOrder, startRejectOrder,startTrip ,startTripOtpVerify,endTripOtpVerify} from '../../../actions/driverAction';
import { ToastContainer } from 'react-toastify';




function MyOrderDetails({ myOrder }) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showStartTripModal, setShowStartTripModal] = useState(false);
  const [showEndTripModal, setShowEndTripModal] = useState(false);


  const [rejectReason, setRejectReason] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  // const myOrder = useSelector((state) => state.driver.myOrder)
  const dispatch = useDispatch();

  console.log(myOrder.startOtp)

  const handleAccept = (id) => {
    console.log(id);
    dispatch(startAcceptOrder(id));
  };

  const handleReject = (id) => {
    console.log(id);
    setShowRejectModal(true);
  };

  const handleRejectConfirm = () => {
    console.log(rejectReason);
    const formData={
      rejectReason
    }
    dispatch(startRejectOrder(myOrder._id, formData));
    setShowRejectModal(false);
  };

  const handleStartTrip = (tripId) => {
    console.log('start trip');
    setShowStartTripModal(true);
    dispatch(startTrip(tripId))
  };

  const handleVerifyOTP = () => {
     const formData={
      tripId:myOrder._id,
      otp:otp
     }
    //  console.log(formData)
    dispatch(startTripOtpVerify(formData))
    setShowStartTripModal(false)
    setOTP('')
    console.log('start trip verify')
  };


  const handleEndTrip=(tripId)=>{
    console.log('start trip');
    setShowEndTripModal(true);
    dispatch(startTrip(tripId))

  }

  const handleEndTripVerification = () => {
    console.log('end otp')
   const formData={
    tripId:myOrder._id,
      otp:otp
   }
   dispatch(endTripOtpVerify(formData))
   setShowEndTripModal(false);
   setOTP('')
  };

  return (
    <>
      <Card style={{ width: "95%", height: "85%" }}>
        <Row>
          <Col md={6}>
            <Card.Body>
              <Card.Text><strong>Trip ID:</strong> {myOrder._id}</Card.Text>
              <Card.Text><strong>Customer ID:</strong> {myOrder.customerId}</Card.Text>
              <Card.Text><strong>Trip Start Date:</strong> {new Date(myOrder.tripStartDate).toLocaleString()}</Card.Text>
              <Card.Text><strong>Trip End Date:</strong> {new Date(myOrder.tripEndDate).toLocaleString()}</Card.Text>
              <Card.Text><strong>Trip Status:</strong> {myOrder.tripStatus}</Card.Text>
              {myOrder.tripStatus === 'driverConfirm' && (
                <Card.Text><strong>Payment Status:</strong> {myOrder.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
              )}
            </Card.Body>
          </Col>

          <Col md={6}>
            <Card.Text><strong>Pick-up Location:</strong> {myOrder.pickUplocation.address}</Card.Text>
            <Card.Text><strong>Drop-off Location:</strong> {myOrder.dropOfflocation.address}</Card.Text>
            <Card.Text><strong>Total Amount:</strong> {myOrder.totalAmount}</Card.Text>
            <Card.Text><strong>Total Distance:</strong> {myOrder.totalDistance}</Card.Text>

            {myOrder.tripStatus === 'bookingPlaced' && (
              <div style={{display:'flex', justifyContent:'space-around', margin:"40px 0 0 0"}}>
                <Button  variant='success' onClick={() => handleAccept(myOrder._id)}>Accept Trip</Button>
                <Button  variant='danger' onClick={() => handleReject(myOrder._id)}>Reject Trip</Button>
              </div>
            )}

            {myOrder.tripStatus === 'paymentCompleted' && (
              <div>
                {/* <Button onClick={handleStartTrip}>Start Trip</Button> */}
                <Button onClick={()=>handleStartTrip(myOrder._id)}>Start Trip</Button>

              </div>
            )}

                  {myOrder.tripStatus === 'inProgress' && (
              <div>
                {/* <Button onClick={handleStartTrip}>Start Trip</Button> */}
                <Button onClick={()=>handleEndTrip(myOrder._id)}>End Trip</Button>

              </div>
            )}
          </Col>
        </Row>
      </Card>

      <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Reject Reason</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder="Enter reject reason..."
            rows="4"
            cols="50"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRejectModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleRejectConfirm}>Reject Confirm</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showStartTripModal} onHide={() => setShowStartTripModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP..."
          />
          <Button onClick={handleVerifyOTP}>Verify OTP</Button>
          {verificationStatus === 'success' && (
            <p style={{ color: 'green' }}>OTP verified successfully. Trip started!</p>
          )}
          {verificationStatus === 'invalid' && (
            <p style={{ color: 'red' }}>Invalid OTP. Please try again.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowStartTripModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEndTripModal} onHide={() => setShowEndTripModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>End Trip Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to end the trip?</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP..."
          />
          <Button onClick={handleEndTripVerification}>Verify OTP</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEndTripModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  );
}

export default MyOrderDetails;



