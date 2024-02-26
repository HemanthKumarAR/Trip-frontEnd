



import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import ImageComp from '../image';
import { startApproveVehicle,startRejectVehicle,startGetUnApprovedVehicles } from '../../../actions/adminAction';
import { useDispatch } from 'react-redux';
import { modalStyle } from '../ModalStyle';
import './VehicleItem.css'

export default function VehicleItem(props) {
  const { vehicle } = props;
  console.log(vehicle)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(startGetUnApprovedVehicles())
  // },[])

  // View & approve Approve Handle
  const approvebuttonHandle = (id) => {
    console.log("approved",id);
    
   dispatch(startApproveVehicle(id)) 
    setOpen(false);
  }

  // View & approve Reject Handle
  const rejectbuttonHandle = (id) => {
    console.log('reject',id)
    dispatch(startRejectVehicle(id))
    setOpen(false);
  }

  return (
    <tr>
      
        <>
          <td>{vehicle._id}</td>
          <td>{vehicle.driverId.username}</td>
          <td>{vehicle.driverId.email}</td>
          <td>{vehicle.vehicleNumber}</td>
          <td>{vehicle.vehicleName}</td>
          <td>{vehicle.seating}</td>
          <td>
            <Button variant='secondary' onClick={() => setOpen(true)}>
              Open & Approve
            </Button>
            <Modal 
              show={open}
              onHide={() => setOpen(false)}
              aria-labelledby="parent-modal-title"
              size="xl" // Set the size to extra-large (you can also use "lg" for large)
            >
              <Modal.Header closeButton>
                <Modal.Title id="parent-modal-title">{vehicle.vehicleName}</Modal.Title>
              </Modal.Header>
              {/* <Modal.Body>
                <Row>
                  {vehicle.images.map(image => (
                    <Col md={6} key={image._id}>
                      <ImageComp src={image.image} alt={image.tittle} />
                    </Col>
                  ))}
                </Row>
              </Modal.Body> */}
              <ImageComp docs={vehicle.images}/>
              <Modal.Footer>
                <Button variant='primary' onClick={() => setOpen(false)}>Close</Button>
                <Button variant='danger' onClick={() => rejectbuttonHandle(vehicle._id)}>Reject</Button>
                <Button variant='success' onClick={() => approvebuttonHandle(vehicle._id)}>Approve</Button>
              </Modal.Footer>
            </Modal>
          </td>
        </>
     
    </tr>
  );
}


// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import ImageComp from '../image';
// import { startApproveVehicle, startRejectVehicle } from '../../../actions/adminAction';
// import { useDispatch } from 'react-redux';

// import './VehicleItem.css'; // Import the CSS file for styling

// export default function VehicleItem({ vehicle }) {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();

//   const approvebuttonHandle = (id) => {
//     dispatch(startApproveVehicle(id));
//     setOpen(false);
//   };

//   const rejectbuttonHandle = (id) => {
//     dispatch(startRejectVehicle(id));
//     setOpen(false);
//   };

//   return (
//     <tr>
//       <td>{vehicle._id}</td>
//       <td>{vehicle.driverId.username}</td>
//       <td>{vehicle.driverId.email}</td>
//       <td>{vehicle.vehicleNumber}</td>
//       <td>{vehicle.vehicleName}</td>
//       <td>{vehicle.seating}</td>
//       <td>
//         <Button variant='contained' onClick={() => setOpen(true)}>
//           Open & Approve
//         </Button>
//         <Modal show={open} onHide={() => setOpen(false)} size="xl">
//           <Modal.Header closeButton>
//             <Modal.Title>{vehicle.vehicleName}</Modal.Title>
//           </Modal.Header>
//           <ImageComp docs={vehicle.images} className="vehicle-image" />
//           <Modal.Footer>
//             <Button variant='contained' onClick={() => setOpen(false)}>Close</Button>
//             <Button variant='contained' onClick={() => rejectbuttonHandle(vehicle._id)}>Reject</Button>
//             <Button variant='contained' onClick={() => approvebuttonHandle(vehicle._id)}>Approve</Button>
//           </Modal.Footer>
//         </Modal>
//       </td>
//     </tr>
//   );
// }





