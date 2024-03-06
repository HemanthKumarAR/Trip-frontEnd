
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startGetSearchedVehicles } from '../../actions/vehicleAction';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap
import './QueryForm.css'; // Import your custom CSS file

export default function QueryForm() {
  const [seats, setSeats] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = useLocation();

  console.log(url);
  useEffect(() => {
    // Check if query because queryform for used in 2 pages to know the location
    if (url.pathname.toLowerCase() === '/vehicleresult') {
      const query = JSON.parse(localStorage.getItem('query'));
      console.log('2nd page query result');
      // If query present set state
      if (query) {
        setSeats(query.seats);
        setLocation(query.location);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryData = { seats, location };
    localStorage.setItem('query', JSON.stringify(queryData));
    dispatch(startGetSearchedVehicles(seats, location));
    console.log('hemanth');
    navigate('/vehicleResult');
  };

  const handleClear = () => {
    setSeats('');
    setLocation('');
  };

  return (
    <div >
      <Container style={{marginTop:"2%" ,marginLeft:"20%"}} >
        <Form onSubmit={handleSubmit} className="mb-4">
          <Row> 
            <Col> 
              <Form.Group className="mb-3">
                <Form.Label htmlFor="seats" className="mb-2 form-label">Search Seats</Form.Label>
                <Form.Control
                  type="text"
                  id="seats"
                  placeholder="Enter seats"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col> 
              <Form.Group className="mb-3">
                <Form.Label htmlFor="location" className="mb-2 form-label">Nearest Location</Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button  style={{ backgroundColor: "#0096FF", color: "white",marginTop:"31px"}} type="submit" variant="primary" className="me-2 btn-search" >
              Search
            </Button>
              </Col>
              {/* <Col>
              <Button  style ={{marginTop:"31px"}}type="button" variant="secondary" onClick={handleClear} className="btn-clear">
              Clear
            </Button>
              </Col> */}
          </Row>
          {/* <div className="d-flex justify-content-between">
            <Button type="submit" variant="primary" className="me-2 btn-search">
              Search
            </Button>
            <Button type="button" variant="secondary" onClick={handleClear} className="btn-clear">
              Clear
            </Button>
          </div> */}
        </Form>
      </Container>
    </div>
   
  );
}
