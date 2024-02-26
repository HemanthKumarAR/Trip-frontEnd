


import { useState } from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './UserLogin.css';
import { useContext } from 'react';
import { UserContext } from "../../App";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from "react-redux";
import { startGetVehicle } from '../../actions/vehicleAction';
import {startGetMyTrip} from '../../actions/bookingAction'
import {startGetUnApprovedVehicles} from '../../actions/adminAction'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState([]);
  const [formErrors, setFormErrors] = useState({})
    const { userDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const errors = {}
  const dispatch=useDispatch()
  function runValidation() {
    if (email.trim().length === 0) {
      errors.email = 'email is required'
    } else if (!isEmail(email)) {
      errors.email = 'invalid email format'
    }

    if (password.trim().length === 0) {
      errors.password = 'password is required'
    }
    setFormErrors(errors)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setFormErrors({})
    }

    try {
      const formData = { email, password };
      const response = await axios.post('api/login', formData); 
      localStorage.setItem('token', response.data.token);

      const profile = await axios.get('api/profile', {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })

      userDispatch({ 
        type: 'USER_LOGIN', 
        payload: profile.data
      });

      if (profile.data.role === 'driver') {
        dispatch(startGetVehicle());

      }

      if(profile.data.role==='customer'){
        dispatch(startGetMyTrip()) 
      }
      if(profile.data.role==='admin'){
        dispatch(startGetUnApprovedVehicles())
      }
      


      profile.data.role === 'customer' ? navigate('/uhome') : navigate('/');

    } catch (error) {
      console.error(error.response.data.errors);
      setServerError(error.response.data.errors);
    }
  }

  return (
    <div style={{ backgroundColor: "#fafafa", height: "80.5vh", margin: "0px",marginTop:'5%' }}>
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6}>
          {serverError.length > 0 && (
            <div className="alert alert-danger">
              {serverError.map(ele => (
                <li key={ele.msg}>{ele.msg}</li>
              ))}
            </div>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <h5>If you don't have an account, <Link to="/register">register here</Link></h5>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default UserLogin;
