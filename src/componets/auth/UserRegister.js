


// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from "react";
// import { isEmail } from 'validator';
// import { useNavigate, Link } from 'react-router-dom';
// import { isNumber } from "lodash";
// import axios from '../../config/axios';
// import { Form, Button, Container, Col, Row } from 'react-bootstrap';
// import './UserRegister.css'

// const UserRegister = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");
//     const [serverErrors, setServerErrors] = useState([]);
//     const [formErrors, setFormErrors] = useState({});
//     const navigate = useNavigate();

//     function runValidation() {
//         const errors = {};

//         if (username.trim().length === 0) {
//             errors.username = "username is required";
//         } else if (username.trim().length < 4 || username.trim().length > 64) {
//             errors.username = "username should be between 4-64 characters";
//         }

//         if (email.trim().length === 0) {
//             errors.email = "email is required";
//         } else if (!isEmail(email)) {
//             errors.email = "invalid email format";
//         }

//         if (mobileNumber.trim().length === 0) {
//             errors.mobileNumber = "mobile Number is required"
//         } else if (mobileNumber.trim().length !== 10 || !isNumber(mobileNumber)) {
//             errors.mobileNumber = "invalid mobile Number"
//         }

//         if (password.trim().length === 0) {
//             errors.password = "password is required";
//         } else if (password.trim().length < 8 || password.trim().length > 128) {
//             errors.password = "password should be between 8-128 characters";
//         }

//         setFormErrors(errors);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         runValidation();
//         if (Object.keys(formErrors).length === 0) {
//             try {
//                 const formData = { username, email, mobileNumber, password, role };
//                 const response = await axios.post('api/register', formData);
//                 console.log(response.data);
//                 navigate('/login', { state: { msg: 'Login Successful' } });
//             } catch (e) {
//                 console.log(e.response.data.errors);
//                 setServerErrors(e.response.data.errors);
//             }
//         }
//     };

//     return (
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col md={6}>
//                     {serverErrors.length > 0 && (
//                         <div className="alert alert-danger">
//                             {serverErrors.map(ele => (
//                                 <li key={ele.msg}>{ele.msg}</li>
//                             ))}
//                         </div>
//                     )}
//                     <h2>Register Here</h2>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group className="mb-3" controlId="username">
//                             <Form.Label>Name:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             {formErrors.username && <span className="text-danger">{formErrors.username}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="email">
//                             <Form.Label>Email:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="mobileNumber">
//                             <Form.Label>Mobile Number:</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 placeholder="Enter mobile number"
//                                 value={mobileNumber}
//                                 onChange={(e) => setMobileNumber(e.target.value)}
//                             />
//                             {formErrors.mobileNumber && <span className="text-danger">{formErrors.mobileNumber}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="password">
//                             <Form.Label>Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Enter password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Check
//                                 inline
//                                 type="radio"
//                                 name="role"
//                                 value="customer"
//                                 label="Customer"
//                                 onChange={(e) => setRole(e.target.value)}
//                             />
//                             <Form.Check
//                                 inline
//                                 type="radio"
//                                 name="role"
//                                 value="driver"
//                                 label="Driver"
//                                 onChange={(e) => setRole(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Button type="submit" variant="primary">Register</Button>
//                     </Form>
//                     <h5>Do you have an account? <Link to='/login'>Login</Link></h5>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default UserRegister;

// import { useState } from "react";
// import { isEmail } from 'validator';
// import { useNavigate, Link } from 'react-router-dom';
// import { isNumber } from "lodash";
// import axios from '../../config/axios';
// import { Form, Button, Container, Col, Row } from 'react-bootstrap';
// import './UserRegister.css';

// const UserRegister = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");
//     const [serverErrors, setServerErrors] = useState([]);
//     const [formErrors, setFormErrors] = useState({});
//     const navigate = useNavigate();

//     function runValidation() {
//         const errors = {};

//         if (username.trim().length === 0) {
//             errors.username = "username is required";
//         } else if (username.trim().length < 4 || username.trim().length > 64) {
//             errors.username = "username should be between 4-64 characters";
//         }

//         if (email.trim().length === 0) {
//             errors.email = "email is required";
//         } else if (!isEmail(email)) {
//             errors.email = "invalid email format";
//         }

//         if (mobileNumber.trim().length === 0) {
//             errors.mobileNumber = "mobile Number is required"
//         } else if (mobileNumber.trim().length !== 10 ) {
//             errors.mobileNumber = "invalid mobile Number"
//         }

//         if (password.trim().length === 0) {
//             errors.password = "password is required";
//         } else if (password.trim().length < 8 || password.trim().length > 128) {
//             errors.password = "password should be between 8-128 characters";
//         }

//         setFormErrors(errors);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         runValidation();
//         if (Object.keys(formErrors).length === 0) {
//             try {
//                 const formData = { username, email, mobileNumber, password, role };
//                 const response = await axios.post('api/register', formData);
//                 console.log(response.data);
//                 navigate('/login', { state: { msg: 'Login Successful' } });
//             } catch (e) {
//                 console.log(e.response.data.errors);
//                 setServerErrors(e.response.data.errors);
//             }
//         }
//     };

//     return (
//         <div style={{ backgroundColor: "#fafafa", height: "90vh", margin: "0px", }}>
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col md={6}>
//                     {serverErrors.length > 0 && (
//                         <div className="alert alert-danger">
//                             {serverErrors.map(ele => (
//                                 <li key={ele.msg}>{ele.msg}</li>
//                             ))}
//                         </div>
//                     )}
//                     <h2>Register Here</h2>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group className="mb-3" controlId="username">
//                             <Form.Label>Name:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             {formErrors.username && <span className="text-danger">{formErrors.username}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="email">
//                             <Form.Label>Email:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="mobileNumber">
//                             <Form.Label>Mobile Number:</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 placeholder="Enter mobile number"
//                                 value={mobileNumber}
//                                 onChange={(e) => setMobileNumber(e.target.value)}
//                             />
//                             {formErrors.mobileNumber && <span className="text-danger">{formErrors.mobileNumber}</span>}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="password">
//                             <Form.Label>Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Enter password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Check
//                                 inline
//                                 type="radio"
//                                 name="role"
//                                 value="customer"
//                                 label="Customer"
//                                 onChange={(e) => setRole(e.target.value)}
//                             />
//                             <Form.Check
//                                 inline
//                                 type="radio"
//                                 name="role"
//                                 value="driver"
//                                 label="Driver"
//                                 onChange={(e) => setRole(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Button type="submit" variant="primary">Register</Button>
//                     </Form>
//                     <h5>Do you have an account? <Link to='/login'>Login</Link></h5>
//                 </Col>
//             </Row>
//         </Container>
//         </div>
//     );
// };

// export default UserRegister;







import { useState } from "react";
import { isEmail } from 'validator';
import { useNavigate, Link } from 'react-router-dom';
import { isNumber } from "lodash";
import axios from '../../config/axios';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './UserRegister.css'
import taxi1 from '.././images/taxi1.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';


const UserRegister = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [serverErrors, setServerErrors] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    function runValidation() {
        const errors = {};

        if (username.trim().length === 0) {
            errors.username = "username is required";
        } else if (username.trim().length < 4 || username.trim().length > 64) {
            errors.username = "username should be between 4-64 characters";
        }

        if (email.trim().length === 0) {
            errors.email = "email is required";
        } else if (!isEmail(email)) {
            errors.email = "invalid email format";
        }

        if (mobileNumber.trim().length === 0) {
            errors.mobileNumber = "mobile Number is required"
        } else if (mobileNumber.trim().length !== 10 ) {
            errors.mobileNumber = "invalid mobile Number"
        }

        if (password.trim().length === 0) {
            errors.password = "password is required";
        } else if (password.trim().length < 8 || password.trim().length > 128) {
            errors.password = "password should be between 8-128 characters";
        }

        setFormErrors(errors);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        runValidation();
        if (Object.keys(formErrors).length === 0) {
            try {
                const formData = { username, email, mobileNumber, password, role };
                const response = await axios.post('api/register', formData);
                console.log(response.data);
                navigate('/login', { state: { msg: 'Login Successful' } });
            } catch (e) {
                console.log(e.response.data.errors);
                setServerErrors(e.response.data.errors);
            }
        }
    };

    return (

        // <Container className="register-container" >
        //     <Row className="justify-content-md-center">
        //         <Col md={6}>
        //             {serverErrors.length > 0 && (
        //                 <div className="alert alert-danger">
        //                     {serverErrors.map(ele => (
        //                         <li key={ele.msg}>{ele.msg}</li>
        //                     ))}
        //                 </div>
        //             )}
        //             <h2>Register Here</h2>
        //             <Form onSubmit={handleSubmit}>
        //                 <Form.Group className="mb-3" controlId="username">
        //                     <Form.Label>Name:</Form.Label>
                            // <Form.Control
                            //     type="text"
                            //     placeholder="Enter username"
                            //     value={username}
                            //     onChange={(e) => setUsername(e.target.value)}
                            // />
        //                     {formErrors.username && <span className="text-danger">{formErrors.username}</span>}
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="email">
        //                     <Form.Label>Email:</Form.Label>
        //                     <Form.Control
        //                         type="text"
        //                         placeholder="Enter email"
        //                         value={email}
        //                         onChange={(e) => setEmail(e.target.value)}
        //                     />
        //                     {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="mobileNumber">
        //                     <Form.Label>Mobile Number:</Form.Label>
        //                     <Form.Control
        //                         type="number"
        //                         placeholder="Enter mobile number"
        //                         value={mobileNumber}
        //                         onChange={(e) => setMobileNumber(e.target.value)}
        //                     />
        //                     {formErrors.mobileNumber && <span className="text-danger">{formErrors.mobileNumber}</span>}
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="password">
        //                     <Form.Label>Password:</Form.Label>
        //                     <Form.Control
        //                         type="password"
        //                         placeholder="Enter password"
        //                         value={password}
        //                         onChange={(e) => setPassword(e.target.value)}
        //                     />
        //                     {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
        //                 </Form.Group>
        //                 <Form.Group>
        //                     <Form.Check
        //                         inline
        //                         type="radio"
        //                         name="role"
        //                         value="customer"
        //                         label="Customer"
        //                         onChange={(e) => setRole(e.target.value)}
        //                     />
        //                     <Form.Check
        //                         inline
        //                         type="radio"
        //                         name="role"
        //                         value="driver"
        //                         label="Driver"
        //                         onChange={(e) => setRole(e.target.value)}
        //                     />
        //                 </Form.Group>
        //                 <Button  style={{ backgroundColor: "#0096FF", color: "white",  marginLeft:"30%", marginTop:"10px",width:'25%'}}  type="submit" variant="primary">Register</Button>
        //             </Form>
        //             <div>

        //             <h5>Do you have an account? <Link to='/login'>Login</Link></h5>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
        
        // </div>

        <div>
            <Container fluid>
                <Row>
                    <Col mad={6}>
                    <img
                className="d-block w-100"
                src={taxi1}
                alt="First slide"
                style={{ height: '585px'}} 
              />
                    </Col>

                    <Col md={6}>
                    <Container className="register-container" >
            <Row className="justify-content-md-center">
                <Col md={6}>
                    {serverErrors.length > 0 && (
                        <div className="alert alert-danger">
                            {serverErrors.map(ele => (
                                <li key={ele.msg}>{ele.msg}</li>
                            ))}
                        </div>
                    )}
                    <h2>Register Here</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {formErrors.username && <span className="text-danger">{formErrors.username}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="mobileNumber">
                            <Form.Label>Mobile Number:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter mobile number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            {formErrors.mobileNumber && <span className="text-danger">{formErrors.mobileNumber}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                inline
                                type="radio"
                                name="role"
                                value="customer"
                                label="Customer"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="role"
                                value="driver"
                                label="Driver"
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </Form.Group>
                        <Button  style={{ backgroundColor: "#0096FF", color: "white",marginLeft:"95px", marginTop:"10px",width:'35%'}}  type="submit" variant="primary">Register</Button>
                    </Form>
                    <div>

                    <h5>Already a member ?<Link to='/login'>Login</Link></h5>
                    </div>
                </Col>
            </Row>
        </Container>
                   
                    
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default UserRegister;
