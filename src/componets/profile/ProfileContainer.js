import React from 'react'
import { useContext,useState,useEffect } from 'react'
// import userContext from '../../App'
import { UserContext } from '../../App'
import { isEmail } from "validator";
import axios from '../../config/axios';
import { Form, Button } from 'react-bootstrap';
import './ProfileContainer.css'


function ProfileContainer() {
  const {userState,userDispatch}=useContext(UserContext)
  const {user}=userState
  const initialState={
    username:user.username,
    email:user.email,
    mobileNumber:user.mobileNumber
  }
 

  const[formData,setFormData]=useState(initialState)
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
//    <div>
//     <h2>Profile Container</h2>
//     <label> name</label>
//     <input
//        id="username"
//        value={formData.username}
//        disabled={disableValue}
//        variant="outlined"
//        name="username"
//        onChange={(e) => handleEditChanges(e)}
//       error={formError?.username || (serverError?.username && true)}
//       helperText={formError?.username || serverError?.username}
//     ></input>
//     <br/>

// <label> Email</label>
//     <input
//        id="email"
//        value={formData.email}
//        disabled={disableValue}
//        variant="outlined"
//        name="email"
//        onChange={(e) => handleEditChanges(e)}
//       error={formError?.email || (serverError?.email && true)}
//       helperText={formError?.email || serverError?.email}
//     ></input>
//     <br/>

//     <label> Mobile Number</label>
//     <input
//        id="mobileNumber"
//        value={formData.mobileNumber}
//        disabled={disableValue}
//        variant="outlined"
//        name="mobileNumber"
//        onChange={(e) => handleEditChanges(e)}
//       error={formError?.mobileNumber || (serverError?.mobileNumber && true)}
//       helperText={formError?.mobileNumber || serverError?.mobileNumber}
//     ></input>

// {disableValue ? (
//     <button onClick={handleEdit}>Edit</button>
//   ) : (
//     <>
//       <button onClick={cancleEdit}>Cancel</button>
//       <button onClick={submitEdit}>Submit</button>
//     </>
//   )}
//    </div>
//   )
<div className="profile-container">
      <h2 className="custom-heading">Profile Container</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label className="custom-label">Name</Form.Label>
          <Form.Control
            id="username"
            value={formData.username}
            disabled={disableValue}
            name="username"
            onChange={(e) => handleEditChanges(e)}
            isInvalid={formError?.username || (serverError?.username && true)}
            className="custom-input"
          />
          <Form.Control.Feedback type="invalid" className="custom-error">
            {formError?.username || serverError?.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="custom-label">Email</Form.Label>
          <Form.Control
            id="email"
            value={formData.email}
            disabled={disableValue}
            name="email"
            onChange={(e) => handleEditChanges(e)}
            isInvalid={formError?.email || (serverError?.email && true)}
            className="custom-input"
          />
          <Form.Control.Feedback type="invalid" className="custom-error">
            {formError?.email || serverError?.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMobileNumber">
          <Form.Label className="custom-label">Mobile Number</Form.Label>
          <Form.Control
            id="mobileNumber"
            value={formData.mobileNumber}
            disabled={disableValue}
            name="mobileNumber"
            onChange={(e) => handleEditChanges(e)}
            isInvalid={formError?.mobileNumber || (serverError?.mobileNumber && true)}
            className="custom-input"
          />
          <Form.Control.Feedback type="invalid" className="custom-error">
            {formError?.mobileNumber || serverError?.mobileNumber}
          </Form.Control.Feedback>
        </Form.Group>

        {disableValue ? (
          <Button variant="primary" onClick={handleEdit} className="custom-button">
            Edit
          </Button>
        ) : (
          <>
            <Button variant="secondary" onClick={cancleEdit} className="custom-button">
              Cancel
            </Button>
            <Button variant="primary" onClick={submitEdit} className="custom-button">
              Submit
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default ProfileContainer



