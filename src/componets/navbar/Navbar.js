// import {Link} from 'react-router-dom'
// import { jwtDecode } from 'jwt-decode'
// import { UserContext } from '../../App'
// import { useContext } from 'react'
// // import { isEmail, isEmpty } from 'validator';
// import { isEmpty } from "lodash";
// import { Navbar, Nav } from 'react-bootstrap';
// import './NavBar.css'

// export default function CoustomerNavbar() {
//     const { userState, userDispatch } = useContext(UserContext);

//     const handlelogout = () => {
//       console.log("remove")
//         localStorage.removeItem('token')
//         //for clear user and profile(useReducer & ContextAPI)
//         localStorage.removeItem('query')
//         userDispatch({ type: "USER_LOGOUT" })
//       }

//     const roleBasedNav = () => {
//         const token = localStorage.getItem("token")
//         const { role } = jwtDecode(token)
//         console.log(role);
//         if (role === "customer") {
//             return (
//               <nav>
//                  <Navbar.Brand href="#home">TRIP</Navbar.Brand>
//                 <ul >
//                   <li>
//                   {/* <Link  to='/' >Home</Link> */}
//                   <Nav.Link as={Link} to="/uhome">Home</Nav.Link>
//                   </li>
//                   <li>
//                   <Link to='/mytrips'>my trips</Link>
//                   </li>
//                   <li>
//                   <Link  to='/profile'>profile</Link>
//                   </li>
//                   <li>
//                   <Nav.Link as={Link} to="/" onClick={handlelogout}>Logout</Nav.Link>  
//                   </li>
//                 </ul>
//               </nav>
//             )
//           }else if (role === "driver") {
//             return (
//               <nav>
//               <Navbar.Brand href="#home">TRIP</Navbar.Brand>
//              <ul >
//                <li>
//                {/* <Link  to='/' >Home</Link> */}
//                <Nav.Link as={Link} to="/">Home</Nav.Link>
//                </li>
//                <li>
//                <Link to='/mytrips'>Dasboard</Link>
//                </li>
//                <li>
//                <Link to='/addvehicle'>addVehicle</Link>
//                </li>
//                <li>
//                <Link to='/myvehicle'>My Vehicle</Link>
//                </li>
//                <li>
//                <Link  to='/profile'>profile</Link>
//                </li>
//                <li>
//                <Nav.Link as={Link} to="/" onClick={handlelogout}>Logout</Nav.Link>  
//                </li>
//              </ul>
//            </nav>
//               )
            
//           }else if(role==="admin"){
//             return (
//               <nav>
//               <Navbar.Brand href="#home">TRIP</Navbar.Brand>
//              <ul >
//                <li>
//                {/* <Link  to='/' >Home</Link> */}
//                <Nav.Link as={Link} to="/">pending of approval</Nav.Link>
//                </li>
//                <li>
//                <Link to='/mytrips'>total user</Link>
//                </li>
//                <li>
//                <Link  to='/profile'>profile</Link>
//                </li>
//                <li>
//                <Nav.Link as={Link} to="/" onClick={handlelogout}>Logout</Nav.Link>  
//                </li>
//              </ul>
//            </nav> 
//               )
//           }
//     }
//     return (
//         <div>
//             {isEmpty(userState.user) ?
//             <>

//              <nav>
//               <Navbar.Brand href="#home">TRIP</Navbar.Brand>
//              <ul >
//                <li>
               
//                <Nav.Link as={Link} to="/register">Register</Nav.Link>
//                </li>
//                <li>
//                <Link to='/login'>login</Link>
//                </li>
               
//              </ul>
//            </nav>
              
  
//             </>
//             :
//             roleBasedNav()
//           }
//         </div>
//     )
// }


import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import './NavBar.css'
import { isEmpty } from 'lodash';
import { jwtDecode } from 'jwt-decode'
import { UserContext } from '../../App'
import { useContext } from 'react'



function CoustomerNavbar() {
    const { userState, userDispatch } = useContext(UserContext)

    const handleLogout = () => {
        console.log('remove')
        localStorage.removeItem('token')
        localStorage.removeItem('query')
        userDispatch({ type: 'USER_LOGOUT' })
    }

    const roleBasedNav = () => {
        const token = localStorage.getItem("token")
        const { role } = jwtDecode(token)
        console.log(role)
        if (role === 'customer') {
            return (
                <Navbar bg='dark' data-bs-theme='dark' className="justify-content-between">
                    {/* <Container className="navbar-container" style={{ backgroundColor: '#343a40', padding: '0', marginLeft: '4%' }}> */}
                    <Container className="navbar-container" >

                        <Navbar.Brand href="#home">One day Trip</Navbar.Brand>
                    </Container>
                    <Nav className="ml-auto">

                        <Nav.Link as={Link} to='/uhome'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/myTrip'>MyTrip</Nav.Link>
                        <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                        <Nav.Link as={Link} to='/' onClick={handleLogout}>LogOut </Nav.Link>
                    </Nav>
                </Navbar>
            )
        } else if (role === 'driver') {
            return (
                <Navbar bg='dark' data-bs-theme='dark' className="justify-content-between">
                    <Container className="navbar-container" >
                        <Navbar.Brand href="#home">One day Trip</Navbar.Brand>
                    </Container>
                    <Nav className="ml-auto">

                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/mytrips'>Dasboard</Nav.Link>
                        <Nav.Link as={Link} to='/addvehicle'>addVehicle</Nav.Link>
                        <Nav.Link as={Link} to='/myvehicle'>MyVehicle</Nav.Link>
                        <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                        <Nav.Link as={Link} to='/' onClick={handleLogout}>LogOut </Nav.Link>
                    </Nav>
                </Navbar>
            )
        } else if (role === 'admin') {
            return (
                <Navbar bg='dark' data-bs-theme='dark' className="justify-content-between">
                    <Container className="navbar-container" >
                        <Navbar.Brand href="#home">One day Trip</Navbar.Brand>
                    </Container>
                    <Nav className="ml-auto">

                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/mytrips'>pendingforapproval</Nav.Link>
                        <Nav.Link as={Link} to='/'>addVehicle</Nav.Link>
                        <Nav.Link as={Link} to='/'>totaluser</Nav.Link>
                        <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                        <Nav.Link as={Link} to='/' onClick={handleLogout}>LogOut </Nav.Link>
                    </Nav>
                </Navbar>
            )
        }
    }
    return (
        <div>
            {isEmpty(userState.user) ?

                <Navbar bg="dark" data-bs-theme="dark" className="justify-content-between">
                    <Container className="navbar-container" >
                        <Navbar.Brand href="#home">One day Trip</Navbar.Brand>
                    </Container>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                    </Nav>
                </Navbar>
                : roleBasedNav()
            }
        </div>
    )
}

export default CoustomerNavbar