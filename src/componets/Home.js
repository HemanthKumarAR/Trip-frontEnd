// import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import taxi1 from '../componets/images/taxi1.jpg'
// import taxi4 from '../componets/images/taxi4.jpg'
// import {Col, Row} from 'react-bootstrap'
// import { Link } from 'react-router-dom';

// import './Home.css'
// import { Container } from 'react-bootstrap';

// function Home() {
//   return (
//     <div >
//       <div>
//       <Container className='carousel-image' fluid>
//       <Carousel data-bs-theme="dark">
//         <Carousel.Item>
//           <img

//             style={{height:'78vh', width:'75%'}}
//             className="d-block w-100"
//             src={taxi1}
//             alt="First slide"
//           />
         
//         </Carousel.Item>
//         <Carousel.Item>
//           <img

//             style={{height:'78vh'}}
//             className="d-block w-100"
//             src={taxi1}
//             alt="Second slide"
//           />
        
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{height:'78vh'}}
//             className="d-block w-100"
//             src={taxi1}
//             alt="Third slide"
//           />
          
//         </Carousel.Item>
//       </Carousel>
//       </Container>
//       </div>
//       <div className='section1'>
//         <Container >
//           <Row>
//             <Col md={4}>
//               <div>
//             <h4> Super flexible</h4>
//             </div>
//             <div>
//               <p>Change of plans? With our services you can book stress free and protect your travel in no time. Check our options</p>
//             </div>
//             </Col>
//             <Col md={4}>
//               <div>
//               <h4> Stay informed</h4>
//               <p>Need more info about your flight? Login to My Bookings for trip details, check-in options and everything about your add-ons.</p>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div>
//             <h4> Save big and plan easy</h4>
//             <p>Ready to travel more for less? With the Mytrip app you can book flights, store your booking details, and check in hassle-free</p>
//             </div>
//             </Col>

//           </Row>
//         </Container>
      
//       </div>

//       <div className='section-2'>
//        {/* <Container> */}
//           <Row>
//             <Col md={3}>
//               <div>
//             <h4> Follow us on</h4>
//             </div>
//             </Col>

//             <Col md={3}>
//               <div>
//             <h4> About us</h4>
//             <div>
//             <Link> About us</Link>
//             </div>
//             <div>
//             <Link> Trvael condition</Link>
//             </div>
//             <div>
//             <Link> Privacy Policy</Link>
//             </div>
//               </div>
//             </Col>

//             <Col md={3}>
              
//             <h4> Support</h4>
//             <div>
//             <Link> Contact us</Link>
//             </div>
//             <div>
//             <Link> FAQ</Link>
//             </div>
           
//             </Col>

//             <Col md={3}>
//             <h4> Log in </h4>
//             <Link to='/login'> My Bookings</Link>
            
//             </Col>
            
            

//           </Row>
//           {/* </Container> */}
      
//       </div>
//     </div>
//   )
// }

// export default Home



import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import taxi1 from '../components/images/taxi1.jpg'; // Corrected typo in 'components'
import taxi1 from '../componets/images/taxi1.jpg'
import { SocialIcon } from 'react-social-icons';
import './Home.css';
import HomeCarousel from './HomeCarousel';

function Home() {
  return (
    <div>
    <HomeCarousel/>
    <Container fluid>
      {/* Carousel */}
      {/* <Row >
        <Col>
          <Carousel data-bs-theme="dark" className='carousel-image' style={{maxWidth: '70%', marginLeft:'15%'}} >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={taxi1}
                alt="First slide"
                style={{ height: '510px'}} 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={taxi1}
                alt="Second slide"
                style={{ height: '510px'}} 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={taxi1}
                alt="Third slide"
                style={{  height: '510px'}} 
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row> */}

      {/* Section 1 */}
      <div>

     
      <Row className='section1'>
        <Col sm={4}>
          <h4>Super flexible</h4>
          <p>Change of plans? With our services you can book stress free and protect your travel in no time. Check our options</p>
        </Col>
        <Col sm={4}>
          <h4>Stay informed</h4>
          <p>Need more info about your flight? Login to My Bookings for trip details, check-in options and everything about your add-ons.</p>
        </Col>
        <Col sm={4}>
          <h4>Save big and plan easy</h4>
          <p>Ready to travel more for less? With the Mytrip app you can book flights, store your booking details, and check in hassle-free</p>
        </Col>
      </Row>
      </div>

      {/* Section 2 */}
      <div>
      <Row className='section-2'>
        <Col sm={3}>
          <h4>Follow us on</h4>
          <div>
            <SocialIcon url="https://twitter.com"/>
            <SocialIcon url="https://facebook.com"/>
            <SocialIcon url="https://instagram.com"/>
          </div>
        </Col>
        <Col sm={3}>
          <h4>About us</h4>
          <div>
            <Link> About us</Link>
          </div>
          <div>
            <Link> Travel condition</Link> {/* Corrected typo in 'Travel' */}
          </div>
          <div>
            <Link> Privacy Policy</Link>
          </div>
        </Col>
        <Col sm={3}>
          <h4>Support</h4>
          <div>
            <Link> Contact us</Link>
          </div>
          <div>
            <Link> FAQ</Link>
          </div>
        </Col>
        <Col sm={3}>
          <h4>Log in</h4>
          <Link to='/login'> My Bookings</Link>
        </Col>
      </Row>
      </div>
    </Container>
    </div>
  );
}

export default Home;
