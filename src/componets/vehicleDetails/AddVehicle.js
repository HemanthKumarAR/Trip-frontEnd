
//withcss
import { useDispatch, useSelector } from 'react-redux';
import { startAddVehicle } from '../../actions/vehicleAction';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

import './AddVehicle.css'

const YourFormComponent = () => {
  const vehicle = useSelector((state) => state.vehicle.myVehicle);
  console.log(vehicle);

  const [vehicleNumber, setVehicleNumber] = useState("")
  const [rcNumber, setRcNumber] = useState('')
  const [licenseNumber, setLicenseNumber] = useState(" ")
  const [vehicleName, setVehicleName] = useState(" ")
  const [vehicleModel, setVehicleModel] = useState(" ")
  const [address, setAddress] = useState(" ")
  const [pricePerKm, setpricePerKm] = useState(0)
  const [wages, setWages] = useState("")
  const [seating, setSeating] = useState(" ")

  const [formErrors, setFormErrors] = useState({});

  const [images, setImages] = useState([
    { title: 'vehicle', image: null },
    { title: 'rc', image: null },
    { title: 'license', image: null },
    { title: 'insurance', image: null },
  ]);

  const error = {}

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleImageChange = (index, selectedImage) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].image = selectedImage;
      return updatedImages;
    });
  };

  function runValidation() {
    if (vehicleNumber.trim() === '') {
      error.vehicleNumber = 'vehicleNumber id required'
    }

    if (rcNumber.trim() === '') {
      error.rcNumber = 'RC Number is required';
    }

    if (vehicleName.trim() === '') {
      error.vehicleName = 'Vehicle Name is required';
    }

    if (vehicleModel.trim() === '') {
      error.vehicleModel = 'Vehicle Model is required';
    }

    if (address.trim() === '') {
      error.address = 'Address is required';
    }

    if (seating.trim() === '') {
      error.seating = 'Seating is required';
    }

    if (pricePerKm === 0 || isNaN(pricePerKm)) {
      error.pricePerKm = 'Price per Km must be a valid number greater than 0';
    }

    if (wages.trim() === '' || isNaN(wages)) {
      error.wages = 'Wages must be a valid number';
    }

    for (let i = 0; i < images.length; i++) {
      if (!images[i].image) {
        error[images[i].title] = `${images[i].title} Image is required`;
      }
    }
    // console.log('validation', error)
    setFormErrors(error)
    // console.log('vaidation12',formErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation()
    console.log('hello add vehcile')

    if (Object.keys(error).length === 0) {
      // console.log('validation2',formErrors)
      setFormErrors({})
      const formDataToSend = new FormData();
      formDataToSend.append("vehicleNumber", vehicleNumber)
      formDataToSend.append("rcNumber", rcNumber)
      formDataToSend.append("licenseNumber", licenseNumber)
      formDataToSend.append("wages", wages)
      formDataToSend.append("pricePerKm", pricePerKm)
      formDataToSend.append("address", address)
      formDataToSend.append('vehicleName', vehicleModel)
      formDataToSend.append('vehicleModel', vehicleModel)
      formDataToSend.append('seating', seating)

      images.forEach((image, index) => {
        formDataToSend.append(`${image.title}Title`, image.title);
        formDataToSend.append(`${image.title}Image`, image.image);
      });

      console.log('vehicle', [...formDataToSend]);
      dispatch(startAddVehicle(formDataToSend,navigate));
      // navigate('/myvehicle');
    } else {
      console.log(error)
      setFormErrors(error)
    }
  };

  return (

    <div>
      <Container>
        {vehicle.length !== 0 ? (
          <h2 className="text-center my-4">Your vehicle has been added. Please check it in My Vehicles.</h2>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>



                <Form.Group className="mb-3" controlId="vehicleNumber">
                  <Form.Label>Vehicle Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter vehicle Number"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                  />
                  {formErrors.vehicleNumber && <span className="text-danger">{formErrors.vehicleNumber}</span>}
                </Form.Group>


                <Form.Group className="mb-3" controlId="rcNumber">
                  <Form.Label>rc Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter rcNumber"
                    value={rcNumber}
                    onChange={(e) => setRcNumber(e.target.value)}
                  />
                  {formErrors.rcNumber && <span className="text-danger">{formErrors.rcNumber}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="vehicleName">
                  <Form.Label>Vehicle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Vehicle Name"
                    value={vehicleName}
                    onChange={(e) => setVehicleName(e.target.value)}
                  />
                  {formErrors.vehicleName && <span className="text-danger">{formErrors.vehicleName}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="vehicleModel">
                  <Form.Label>Vehicle Model</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Vehicle model"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                  />
                  {formErrors.vehicleModel && <span className="text-danger">{formErrors.vehicleModel}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>startin Point of vehicle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {formErrors.address && <span className="text-danger">{formErrors.address}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="seating">
                  <Form.Label>Seating</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter total number of seats"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                  />
                  {formErrors.seating && <span className="text-danger">{formErrors.seating}</span>}
                </Form.Group>

              </Col>

              <Col md={6}>
                <h2> part2</h2>
                <Form.Group className="mb-3" controlId="pricePerKm">
                  <Form.Label>Price per km</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Price per Km"
                    value={pricePerKm}
                    onChange={(e) => setpricePerKm(e.target.value)}
                  />
                  {formErrors.pricePerKm && <span className="text-danger">{formErrors.pricePerKm}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="wages">
                  <Form.Label>Daily Wages</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Daily wages"
                    value={wages}
                    onChange={(e) => setWages(e.target.value)}
                  />
                  {formErrors.wages && <span className="text-danger">{formErrors.wages}</span>}
                </Form.Group>

                {/* {images.map((image, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={`image${index}`} className="form-label">{image.title} Image:</label>
              <input type="file" id={`image${index}`} className="form-control" onChange={(e) => handleImageChange(index, e.target.files[0])} multiple/>
            </div>
          ))} */}

                <Form.Group className="mb-3" controlId="image">
                  {images.map((image, index) => (
                    <div key={index}>
                      <label htmlFor={`image${index}`} className="form-label">
                        {image.title} Image:
                      </label>
                      <input
                        type="file"
                        id={`image${index}`}
                        className="form-control"
                        onChange={(e) => handleImageChange(index, e.target.files[0])}
                        multiple
                      />
                      {formErrors[image.title] && <span className="text-danger">{formErrors[image.title]}</span>}
                    </div>
                  ))}
                </Form.Group>


                <Button style={{ backgroundColor: "#0096FF", color: "white" }} type="submit" className="btn btn-primary" >Submit</Button>
              </Col>
            </Row>
          </Form>
        )}

      </Container>
    </div>
  );
};

export default YourFormComponent;


