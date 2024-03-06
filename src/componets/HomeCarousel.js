import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import taxi1 from '../componets/images/taxi1.jpg'
import carousal1 from './images/carousal 1.webp'
import carousal2 from './images/carousal 2.jpg'


function HomeCarousel() {
  return (
    <Container>
         <Row >
        <Col>
          <Carousel data-bs-theme="dark" className='carousel-image' style={{maxWidth: '90%', marginLeft:'6%',marginTop:"2%"}} >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousal1}
                alt="First slide"
                style={{ height: '510px'}} 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousal2}
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
      </Row>
    </Container>
  )
}

export default HomeCarousel