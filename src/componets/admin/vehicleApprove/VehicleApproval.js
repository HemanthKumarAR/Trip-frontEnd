


import { Table, Button, FormControl, InputGroup, Form } from 'react-bootstrap';
// import ProfileItem from './ProfileItem';
import VehicleItem from './VehicleItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetUnApprovedVehicles, startGetPage } from '../../../actions/adminAction';

// console.log('hemath')
export default function ProfileApproval(props) {
  const [sort, setSort] = useState(-1);
  const [search, setSearch] = useState('');
  const [approvedVehicles, setApprovedVehicles] = useState([]);

  const dispatch = useDispatch();

  const unApprProfiles = useSelector((state) => state.admin.vehicleProfile);
 
  


return (
    <div>
      <h3 style={{ padding: '20px', marginLeft: '3vw' }}>VehicleApproval</h3>
      <div style={{ width: '90vw', margin: 'auto' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Reg Number</th>
              <th>Vehicle Name</th>
              <th>Total seats</th>
              <th align='center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {unApprProfiles?.map((ele) => (
              
              <VehicleItem vehicle={ele} key={ele._id} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

}
//console.log('hemath)



// import React from 'react';
// import { Table } from 'react-bootstrap';
// import VehicleItem from './VehicleItem';
// import { useSelector } from 'react-redux';

// // import './VehicleApproval.css'; // Import the CSS file for styling

// export default function ProfileApproval() {
//   const unApprProfiles = useSelector((state) => state.admin.vehicleProfile);

//   return (
//     <div className="profile-approval-container">
//       <h3 className="profile-approval-heading">Vehicle Approval</h3>
//       <div style={{ width: '90vw', margin: 'auto' }}>
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Reg Number</th>
//               <th>Vehicle Name</th>
//               <th>Total seats</th>
//               <th align='center'>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {unApprProfiles?.map((vehicle) => (
//               <VehicleItem key={vehicle._id} vehicle={vehicle} />
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }
