import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import taxi1 from '../componets/images/taxi1.jpg'
import taxi4 from '../componets/images/taxi4.jpg'

import './Home.css'

function Home() {
  return (
    <div >
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            //  style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            style={{height:'90vh'}}
            className="d-block w-100"
            src={taxi1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            //  style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            style={{height:'90vh'}}
            className="d-block w-100"
            src={taxi1}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            //  style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            style={{height:'90vh'}}
            className="d-block w-100"
            src={taxi1}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home

