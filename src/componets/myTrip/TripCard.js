// import React from 'react';
// import { Button, Card, Col, Row ,Modal} from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { startPayment } from '../../actions/bookingAction';



// const TripCard = ({ trip }) => {


//     const dispatch = useDispatch()

//     const handlePaymet = () => {
//         console.log(trip._id)
//         dispatch(startPayment(trip._id))
//     }

//     const handlePaymentDetails = () => {
//         console.log('payment details')
//     }

//     return (
//         <div>
//         <Card style={{ width: '75rem', height: '320px' }}>
//             <Row>
//                 <Col md={6}>
//                     <Card.Body>
//                         <Card.Text><strong>Trip ID:</strong> {trip._id}</Card.Text>

//                         <Card.Text><strong>Driver:</strong> {trip.driverId.username}</Card.Text>
//                         <Card.Text><strong>Vehicle:</strong> {trip.vehicleId.vehicleName}</Card.Text>
//                         <Card.Text><strong>Trip Start Date:</strong> {new Date(trip.tripStartDate).toLocaleString()}</Card.Text>
//                         <Card.Text><strong>Trip End Date:</strong> {new Date(trip.tripEndDate).toLocaleString()}</Card.Text>

//                         <Card.Text><strong>Trip Status</strong> {trip.tripStatus}</Card.Text>
//                     </Card.Body>
//                 </Col>
//                 <Col md={6}>
//                     <Card.Body>
//                         <Card.Text><strong>Pick-up Location:</strong> {trip.pickUplocation.address}</Card.Text>
//                         <Card.Text><strong>Drop-off Location:</strong> {trip.dropOfflocation.address}</Card.Text>
//                         <Card.Text><strong>Total Amount:</strong> {trip.totalAmount}</Card.Text>
//                         {/* <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text> */}


//                         {/* {trip.tripStatus==='driverConfirm' &&(
//                             <div>
//                           <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
//                          <Button onClick={handlePaymet}>Payment</Button>

//                             </div>
//                          )} */}

//                         {/* {trip.tripStatus === 'driverConfirm' && (
//           <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
//         )} */}
//                         {trip.tripStatus === 'paymentCompleted' && (
//                             <div>
//                                 <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
//                                 <Button onClick={handlePaymentDetails}>Payment Details</Button>
//                             </div>
//                         )}
//                         {trip.tripStatus === 'driverConfirm' && !trip.paymentStatus && (

//                             <div>
//                                 <Card.Text><strong>Payment Status:</strong> {trip.paymentStatus ? 'Paid' : 'Pending'}</Card.Text>
//                                 <Button onClick={handlePaymet}>Payment</Button>
//                             </div>


//                         )}

//                         {
//                             trip.tripStatus === 'Completed' && (
//                                 <div>
//                                     <Button>Give Review</Button>
//                                 </div>
//                             )
//                         }

//                     </Card.Body>
//                 </Col>

//             </Row>
//         </Card>

//         <Modal>

//         </Modal>

//         </div>   
//     );
// };

// export default TripCard;









import React, { useState } from 'react';
import { Button, Card, Col, Row, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startPayment } from '../../actions/bookingAction';
import ReactStars from 'react-rating-stars-component'
import { startAddRating } from '../../actions/ratingAction';

const TripCard = ({ trip }) => {
    console.log(trip)
    const [reviewModal, setReviewModal] = useState(false);
    const [rating, setRating] = useState({
        driver:0,
        vehicle:0
    });
    
    const [feedback, setFeedback] = useState('');
    const dispatch = useDispatch();

    const handlePaymet = () => {
        console.log(trip._id);
        dispatch(startPayment(trip._id));
    };

    const handlePaymentDetails = () => {
        console.log('payment details');
    };

    const handleReviewModalOpen = () => {
        setReviewModal(true);
    };

    const handleReviewModalClose = () => {
        setReviewModal(false);
    };

    const handleReviewSubmit = () => {
        console.log('Rating:', rating);
        console.log('Feedback:', feedback);
        // Add logic to submit the rating and feedback to the backend
        // Once submitted, close the modal
        const formData={
            vehicleId:trip.vehicleId._id,
            rating,
            feedback
        }
        console.log(formData)
        dispatch(startAddRating(formData))
        setReviewModal(false);
    };


    return (
        <div>
            <Card style={{ width: '75rem', height: '320px' }}>
                <Row>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text><strong>Trip ID:</strong> {trip._id}</Card.Text>
                            <Card.Text><strong>Driver:</strong> {trip.driverId.username}</Card.Text>
                           
                            <Card.Text><strong>Vehicle:</strong> {trip.vehicleId._id}</Card.Text>

                            <Card.Text><strong>Vehicle:</strong> {trip.vehicleId.vehicleName}</Card.Text>
                            <Card.Text><strong>Trip Start Date:</strong> {new Date(trip.tripStartDate).toLocaleString()}</Card.Text>
                            <Card.Text><strong>Trip End Date:</strong> {new Date(trip.tripEndDate).toLocaleString()}</Card.Text>
                            <Card.Text><strong>Trip Status</strong> {trip.tripStatus}</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text><strong>Pick-up Location:</strong> {trip.pickUplocation.address}</Card.Text>
                            <Card.Text><strong>Drop-off Location:</strong> {trip.dropOfflocation.address}</Card.Text>
                            <Card.Text><strong>Total Amount:</strong> {trip.totalAmount}</Card.Text>

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
                            {trip.tripStatus === 'Completed' && (
                                <div>
                                    <Button onClick={()=>handleReviewModalOpen(trip.vehicleId._id)}>Give Review</Button>
                                </div>
                            )}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Modal show={reviewModal} onHide={handleReviewModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Give Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">

                        
                    <h5> driver rating</h5>
                    <ReactStars

                        value={rating.driver}
                        // onChange={ratingChanged}
                        onChange={(newRating) => setRating({...rating, driver: newRating})}

                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    </div>
                    <div className="col-md-6">

                    

                   <h5> vehicle</h5>

                    <ReactStars

                        value={rating.vehicle}
                        // onChange={ratingChanged}
                        onChange={(newRating) => setRating({...rating, vehicle: newRating})}

                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    </div>
                    <div style={{ marginTop: '20px' ,marginBottom:'20px'}}>
    <label>Feedback:</label>
    <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="form-control"
        placeholder="Enter your feedback here..."
    />
    
</div>


                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleReviewModalClose}>Close</Button> */}
                    <Button variant="primary" onClick={handleReviewSubmit}>Submit Review</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TripCard;

