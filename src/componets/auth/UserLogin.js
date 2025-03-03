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
import { startGetMyTrip } from '../../actions/bookingAction'
import { startGetUnApprovedVehicles } from '../../actions/adminAction'
import { startGetDriverorder, startGetDriverStatistics } from "../../actions/driverAction";
import taxi2 from '../images/taxi2.avif'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState([]);
  const [formErrors, setFormErrors] = useState({})
  const { userDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const errors = {}
  const dispatch = useDispatch()
  function runValidation() {
    if (email.trim().length === 0) {
      errors.email = 'email is required'
    } else if (!isEmail(email)) {
      errors.email = 'invalid email format'
    }

    if (password.trim().length === 0) {
      errors.password = 'password is required'
    }
    console.log("valiation", formErrors)
    setFormErrors(errors)
    console.log("valiation2", formErrors)
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
        dispatch(startGetDriverorder())
        dispatch(startGetDriverStatistics())
      }

      if (profile.data.role === 'customer') {
        dispatch(startGetMyTrip())
      }
      if (profile.data.role === 'admin') {
        dispatch(startGetUnApprovedVehicles())
      }



      profile.data.role === 'customer' ? navigate('/uhome') : navigate('/home');

    } catch (error) {
      console.error(error.response.data.errors);
      setServerError(error.response.data.errors);
    }
  }

  return (
    

<div style={{ width: "100%" }}>
  <Container fluid>
    <Row>
      {/* Login Form Section */}
      <Col md={6}>
        <Container className="login-container">
          <Row className="login-form">
            <Col md={6} style={{ height: "100%", width: "80%" }}>
              {serverError.length > 0 && (
                <div className="alert alert-danger">
                  {serverError.map((ele) => (
                    <li key={ele.msg}>{ele.msg}</li>
                  ))}
                </div>
              )}
              <h3 style={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
                Welcome to MyTrip
              </h3>
              <Form onSubmit={handleLogin}>
                {/* Email Input */}
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "100%" }}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "10px", borderRadius: "5px" ,width: "100%" }}
                  />
                  {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                </Form.Group>
                {/* Password Input */}
                <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: "100%" }}>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "10px", borderRadius: "5px" }}
                  />
                  {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                </Form.Group>
                {/* Forgot Password Link */}
                <p style={{ textAlign: "right", width: "100%", marginTop: "10px" ,marginBottom:"-5px"}}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0096FF",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Forgot your password?
                  </Link>
                </p>
                {/* Login Button */}
                <Button
                  style={{
                    backgroundColor: "#0096FF",
                    color: "white",
                    border: "none",
                    width: "100%",
                    padding: "10px 0",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    marginTop: "10px",
                    transition: "all 0.3s ease",
                  }}
                  variant="primary"
                  type="submit"
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#007ACC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#0096FF")}
                >
                  Login
                </Button>
              </Form>
              {/* Register Link */}
              <h5 style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
                Not on MyTrip yet?{" "}
                <Link to="/register" style={{ color: "#0096FF", fontWeight: "bold" }}>
                  Register here
                </Link>
              </h5>
            </Col>
          </Row>
        </Container>
      </Col>

      {/* Image Section */}
      <Col md={6}>
        <img
          className="d-block w-100"
          src={taxi2}
          alt="First slide"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Col>
    </Row>
  </Container>
</div>

  );
}

export default UserLogin;