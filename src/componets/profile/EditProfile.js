
import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap'; // Correct import for Form
import { useState ,useEffect,useContext} from 'react'; // No need to import useEffect since it's not being used
import { isEmail } from "validator";
import axios from '../../config/axios';
import { UserContext } from '../../App';

function EditProfile(props) {
  const { username, mobileNumber, uEmail } = props;
  const {userState,userDispatch}=useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState({});
//edit profile
  const errors={}

  const editHandleFunction = () => {
    setOpen(true);
  };

  const handleClose=()=>{
    setOpen(false)
  }

useEffect(()=>{
    if(username && mobileNumber && uEmail){
        setName(username)
        setPhone(mobileNumber)
        setEmail(uEmail)
    }
},[open])


const runValidation=()=>{
    if(name===""){
        errors.name = "Name is required";
    }
    if (email.trim().length === 0) {
        errors.email = "email is required";
      } else if (!isEmail(email)) {
        errors.email = "invalid email";
      }

      if (phone.trim().length === 0) {
        errors.phone = "Mobile Number is required";
      } else if (phone.length !== 10) {
        errors.phone = "invalid mobile number";
      }
      setFormError(errors)

}

const handleEditSubmit = async (e) => {
  e.preventDefault();
  runValidation();
  if (Object.keys(errors).length === 0) {
    // Clear form errors
    setFormError({});
    const formData = {
      username: name,
      email: email,
      mobileNumber: phone
    };
    console.log(formData);
    try {
      const updateProfileResponse = await axios.put(
        "api/update-account",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      userDispatch({
        type: "USER_UPDATE",
        payload: updateProfileResponse.data
      });
      setOpen(false);
    } catch (e) {
      console.log(e.response.data.errors);
    }
  } else {
    // Set form errors
    setFormError(errors);
  }
};


return (
  <div className='edit-profile'>
    <Button className='edit-buttn' onClick={editHandleFunction}>Edit</Button>

    <Modal show={open} onHide={handleClose} className='class-modal'>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEditSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formError.name && <span className="text-danger">{formError.name}</span>}
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              isInvalid={!!formError.phone}
            />
            {formError.phone && <span className="text-danger">{formError.phone}</span>}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!formError.email}
            />
            {formError.email && <span className="text-danger">{formError.email}</span>}
          </Form.Group>
          <Button type="submit" className='submit-buttn'>Submit</Button>
        </Form>
        <Button className='close-buttn' onClick={handleClose}>Close</Button>
      </Modal.Body>
    </Modal>
  </div>
);
}

export default EditProfile;