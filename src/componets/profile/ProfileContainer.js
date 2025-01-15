// import React from 'react'
// import { useContext,useState,useEffect } from 'react'
// // import userContext from '../../App'
// import { UserContext } from '../../App'
// import { isEmail } from "validator";
// import axios from '../../config/axios';
// import { Form, Button } from 'react-bootstrap';
// import './ProfileContainer.css'


// function ProfileContainer() {
//   const {userState,userDispatch}=useContext(UserContext)
//   const {user}=userState
//   const initialState={
//     username:user.username,
//     email:user.email,
//     mobileNumber:user.mobileNumber
//   }


//   const[formData,setFormData]=useState(initialState)
//   const [disableValue, setDisable] = useState(true);
//   const [formError, setFormError] = useState({});
//   const [serverError, setServerError] = useState({});


//   const errors = {};

//   const handleEdit = () => {
//     setDisable(false);
//   };

//   const runValidation = () => {
//     const { username, email, mobileNumber } = formData;
//     if (username.trim().length === 0) {
//       errors.username = "First Name is required";
//     }
    // if (email.trim().length === 0) {
    //   errors.email = "email is required";
    // } else if (!isEmail(email)) {
    //   errors.email = "invalid email";
    // }

    // if (mobileNumber.trim().length === 0) {
    //   errors.mobileNumber = "Mobile Number is required";
    // } else if (mobileNumber.length !== 10) {
    //   errors.mobileNumber = "invalid mobile number";
    // }
//     setFormError(errors);
//     return Object.keys(errors).length;
//   };


//   const submitEdit = async () => {
//     const validationResult = runValidation();
//     if (!validationResult) {
//       try {

//         const updateProfileResponse = await axios.put(
//           "api/update-account",
//           formData,
//           {
//             headers: {
//               Authorization: localStorage.getItem("token"),
//             },
//           }
//         );
//         userDispatch({
//           type: "USER_UPDATE",
//           payload: updateProfileResponse.data,
//         });
//         setDisable(true);
//       } catch (e) {
//         if (e.response.status === 400) {
//           setServerError(e.response.data);

//         } else if (e.response.status === 500) {
//           alert(e.response.statusText);

//         }
//       }
//     }
//   };


//   const cancleEdit = () => {
//     setDisable(true);
//     setFormData(initialState);
//   };


//   useEffect(() => {
//     setFormData(initialState);
//   }, [user]);


//   const handleEditChanges = (e) => {
//     setFormData((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   return (
// <div className="profile-container">
//   <h2 className="custom-heading">Profile Container</h2>
//   <Form>
//     <Form.Group controlId="formUsername">
//       <Form.Label className="custom-label">Name</Form.Label>
//       <Form.Control
//         value={formData.username}
//         disabled={disableValue}
//         name="username"
//         onChange={(e) => handleEditChanges(e)}
//         isInvalid={formError?.username || (serverError?.username && true)}
//         className="custom-input"
//       />
//       <Form.Control.Feedback type="invalid" className="custom-error">
//         {formError?.username || serverError?.username}
//       </Form.Control.Feedback>
//     </Form.Group>

//     <Form.Group controlId="formEmail">
//       <Form.Label className="custom-label">Email</Form.Label>
//       <Form.Control
//         value={formData.email}
//         disabled={disableValue}
//         name="email"
//         onChange={(e) => handleEditChanges(e)}
//         isInvalid={formError?.email || (serverError?.email && true)}
//         className="custom-input"
//       />
//       <Form.Control.Feedback type="invalid" className="custom-error">
//         {formError?.email || serverError?.email}
//       </Form.Control.Feedback>
//     </Form.Group>

//     <Form.Group controlId="formMobileNumber">
//       <Form.Label className="custom-label">Mobile Number</Form.Label>
//       <Form.Control
//         value={formData.mobileNumber}
//         disabled={disableValue}
//         name="mobileNumber"
//         onChange={(e) => handleEditChanges(e)}
//         isInvalid={formError?.mobileNumber || (serverError?.mobileNumber && true)}
//         className="custom-input"
//       />
//       <Form.Control.Feedback type="invalid" className="custom-error">
//         {formError?.mobileNumber || serverError?.mobileNumber}
//       </Form.Control.Feedback>
//     </Form.Group>

//     {disableValue ? (
//       <Button variant="primary" onClick={handleEdit}>
//         Edit
//       </Button>
//     ) : (
//       <>
//         <Button variant="secondary" onClick={cancleEdit} className="custom-button">
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={submitEdit} className="custom-button">
//           Submit
//         </Button>
//       </>
//     )}
//   </Form>
// </div>
//   );
// }

// export default ProfileContainer




//-----------------------------------

import React from 'react'
import { useContext, useState, useEffect } from 'react'
// import userContext from '../../App'
import { UserContext } from '../../App'
import { isEmail } from "validator";
import axios from '../../config/axios';
// import { Form, Button } from 'react-bootstrap';
import './ProfileContainer.css'
import { Stack, Container, Col, Row, Image, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import EditProfile from './EditProfile';


function ProfileContainer() {
  const { userState, userDispatch } = useContext(UserContext)
  const { user } = userState
  const initialState = {
    username: user.username,
    email: user.email,
    mobileNumber: user.mobileNumber
  }


  const [formData, setFormData] = useState(initialState)
  const [disableValue, setDisable] = useState(true);
  const [formError, setFormError] = useState({});
  const [serverError, setServerError] = useState({});


  const errors = {};

  const handleEdit = () => {
    setDisable(false);
  };

  const runValidation = () => {
    const { username, email, mobileNumber } = formData;
    if (username.trim().length === 0) {
      errors.username = "First Name is required";
    }
    if (email.trim().length === 0) {
      errors.email = "email is required";
    } else if (!isEmail(email)) {
      errors.email = "invalid email";
    }

    if (mobileNumber.trim().length === 0) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (mobileNumber.length !== 10) {
      errors.mobileNumber = "invalid mobile number";
    }
    setFormError(errors);
    return Object.keys(errors).length;
  };


  const submitEdit = async () => {
    const validationResult = runValidation();
    if (!validationResult) {
      try {

        const updateProfileResponse = await axios.put(
          "api/update-account",
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        userDispatch({
          type: "USER_UPDATE",
          payload: updateProfileResponse.data,
        });
        setDisable(true);
      } catch (e) {
        if (e.response.status === 400) {
          setServerError(e.response.data);

        } else if (e.response.status === 500) {
          alert(e.response.statusText);

        }
      }
    }
  };


  const cancleEdit = () => {
    setDisable(true);
    setFormData(initialState);
  };


  useEffect(() => {
    setFormData(initialState);
  }, [user]);


  const handleEditChanges = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div style={{ height: '85vh' }} >
      <Container className="profile-container"  style={{ height: '60vh', justifyContent:"space-around" }} >
        <Row className="h-100">
          {/* Image Column */}
          <Col md={6} xs={12} className='profile-image'>
            <Image
              src="data:image/png;base64,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"
              alt={user.name}
              height="auto"
              style={{ maxWidth: '75%', maxHeight: '150px' }}
              className="img-fluid"
            />

          </Col>
          {/* <Col md={6} xs={12} className='profile-name' >
            <h3>{user.username}</h3>
          </Col> */}

           <Col md={6} xs={12} style={{marginTop:"40px"}} >
            <div>
           
              <h5 style={{ display: 'inline' }}>Username:</h5>
              <p style={{ display: 'inline', fontSize: '18px' }}> {user.username}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline-block' }}>Mobile Number:</h5>
              <p style={{ display: 'inline-block', fontSize: '18px', marginTop: '10px' }}> {user.mobileNumber}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline' }}>Email:</h5>
              <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px' }}> {user.email}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline' }}>Role:</h5>
              <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px'}}> {user.role}</p>
            </div>
            
           
           
            
          
          </Col>
          <EditProfile  username={user.username} mobileNumber={user.mobileNumber} uEmail={user.email} />
        </Row>

      </Container>
      {/* <Container className='profile-details'>
        <Row>
          <Col md={6} xs={12} >
            <div>
              <h5 style={{ display: 'inline' }}>Username:</h5>
              <p style={{ display: 'inline', fontSize: '18px' }}> {user.username}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline-block' }}>Mobile Number:</h5>
              <p style={{ display: 'inline-block', fontSize: '18px', marginTop: '10px' }}> {user.mobileNumber}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline' }}>Email:</h5>
              <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px' }}> {user.email}</p>
            </div>
            <div>
              <h5 style={{ display: 'inline' }}>Role:</h5>
              <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px'}}> {user.role}</p>
            </div> 
          </Col>
        </Row>
      </Container> */}
      
      

      
    // </div>


    // <div>
    // <Container style={{ margin:"50px 20% 30px 20%" ,backgroundColor:'red'}}>
    //   <Row>
    //     <Col style={{marginTop:"50px", marginLeft:"50px"}}>
    //     <Image
    //           src="data:image/png;base64,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"
    //           alt={user.name}
    //           height="auto"
    //           style={{ maxWidth: '75%', maxHeight: '150px' }}
    //           // className="img-fluid"
    //         />
    //     </Col>

    //     <Col style={{marginTop:"50px"}}>
    //     <div>
    //           <h5 style={{ display: 'inline' }}>Username:</h5>
    //           <p style={{ display: 'inline', fontSize: '18px' }}> {user.username}</p>
    //         </div>
    //         <div>
    //           <h5 style={{ display: 'inline-block' }}>Mobile Number:</h5>
    //           <p style={{ display: 'inline-block', fontSize: '18px', marginTop: '10px' }}> {user.mobileNumber}</p>
    //         </div>
    //         <div>
    //           <h5 style={{ display: 'inline' }}>Email:</h5>
    //           <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px' }}> {user.email}</p>
    //         </div>
    //         <div>
    //           <h5 style={{ display: 'inline' }}>Role:</h5>
    //           <p style={{ display: 'inline', fontSize: '18px',marginTop: '10px'}}> {user.role}</p>
    //         </div>
        
    //     </Col>

    //   </Row>
    // </Container>
    // </div>

  );

}

export default ProfileContainer




