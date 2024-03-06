

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { isEmpty } from 'lodash';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { empty } from '../../actions/bookingAction';

function CustomerNavbar() {
    const { userState, userDispatch } = useContext(UserContext);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('query');
        dispatch(empty());
        userDispatch({ type: 'USER_LOGOUT' });
    };

    // const roleBasedNav = () => {
    //     const token = localStorage.getItem("token");
    //     const { role } = jwtDecode(token);

    //     return (
    //         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //             <Container>
    //                 <Navbar.Brand as={Link} to="/" className='navbar-title'>One day Trip</Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //                 <Navbar.Collapse id="responsive-navbar-nav">
    //                     <Nav className="mr-auto">
    //                         {role === 'customer' && (
    //                             <>
    //                                 <Nav.Link as={Link} to='/uhome'>Home</Nav.Link>
    //                                 <Nav.Link as={Link} to='/myTrip'>MyTrip</Nav.Link>
    //                                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
    //                             </>
    //                         )}
    //                         {role === 'driver' && (
    //                             <>
    //                                 <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    //                                 <Nav.Link as={Link} to='/myorder'>myOrders</Nav.Link>
    //                                 <Nav.Link as={Link} to='/addvehicle'>addVehicle</Nav.Link>
    //                                 <Nav.Link as={Link} to='/myvehicle'>MyVehicle</Nav.Link>
    //                                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
    //                             </>
    //                         )}
    //                         {role === 'admin' && (
    //                             <>
    //                                 <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    //                                 <Nav.Link as={Link} to='/vehicleapprove'>pendingforapproval</Nav.Link>
    //                                 <Nav.Link as={Link} to='/'>addVehicle</Nav.Link>
    //                                 <Nav.Link as={Link} to='/'>totaluser</Nav.Link>
    //                                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
    //                             </>
    //                         )}
    //                     </Nav>
    //                     <Nav>
    //                         <Nav.Link as={Link} to='/' onClick={handleLogout}>LogOut</Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Container>
    //         </Navbar>
    //     );
    // };

    const roleBasedNav = () => {
        const token = localStorage.getItem("token");
        const { role } = jwtDecode(token);
    
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='navbar-title'>One day Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            {role === 'customer' && (
                                <>
                                    <Nav.Link as={Link} to='/uhome'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/myTrip'>MyTrip</Nav.Link>
                                    <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                </>
                            )}
                            {role === 'driver' && (
                                <>
                                
                                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/myorder'>myOrders</Nav.Link>
                                <NavDropdown title="Driver Options" id="collasible-nav-dropdown">
                                    {/* <NavDropdown.Item as={Link} to='/home'>Home</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/myorder'>myOrders</NavDropdown.Item> */}
                                    <NavDropdown.Item as={Link} to='/addvehicle'>addVehicle</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/myvehicle'>MyVehicle</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                                </NavDropdown>
                                         <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                </>
                            )}
                            {role === 'admin' && (
                                <>
                                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/vehicleapprove'>pendingforapproval</Nav.Link>
                                    <Nav.Link as={Link} to='/'>addVehicle</Nav.Link>
                                    <Nav.Link as={Link} to='/'>totaluser</Nav.Link>
                                    <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/' onClick={handleLogout}>LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
    

    return (
        <div>
            {isEmpty(userState.user) ?
                <Navbar style={{backgroundColor : "#0096FF"}}>
                    <Container>
                        <Navbar.Brand as={Link} to="/" className='navbar-title' >My Trip</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                : roleBasedNav()
            }
        </div>
    );
}

export default CustomerNavbar;
