import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch,useSelector } from 'react-redux';
import { startGetEstimateAmount ,startBooking} from '../../actions/bookingAction';
import {isEmpty} from 'lodash'
import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddressForm({ vehicle }) {
  const { _id } = vehicle;
  console.log(_id);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropSearchTerm, setDropSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dropSearchResult, setDropSearchResult] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedDropAddress, setSelectedDropAddress] = useState(null);
  const [locObj, setLocObj] = useState({
    address: '',
    pickCoordinate: ['', ''],
  });
  const [dropLocObj, setDropLocObj] = useState({
    address: '',
    dropCoordinate: ['', ''],
  });
  const [errors, setErrors] = useState({});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();
  const navigate=useNavigate()
  const tripDetails=useSelector((state)=> state.booking.tripBooking )
 

//  useEffect(()=>{
//  if(Object.keys(tripDetails).length>0 && tripDetails.paymentStatus===false){
//   navigate('/bookDetails')
//  }
//  },[tripDetails,navigate])




  const dispatch = useDispatch();
  const {estimateAmount}= useSelector((state)=>{
    return state.booking
   })

   console.log(estimateAmount)

  const fetchAddresses = async () => {
    console.log("100")
    try {
      const GEO_CODE_API_KEY = '659802a9ecc6a876797382jag35e1f0';
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${searchTerm}&api_key=${GEO_CODE_API_KEY}`
      );
      console.log(response.data);
      setSearchResults(response.data);
      if (response.data.length === 0) {
        setSearchResults([
          {
            place_id: '404',
            display_name: 'Try typing different or check typo',
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const fetchDropAddress = async () => {
    try {
      const GEO_CODE_API_KEY = '659802a9ecc6a876797382jag35e1f0';
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${dropSearchTerm}&api_key=${GEO_CODE_API_KEY}`
      );
      console.log(response.data);
      setDropSearchResult(response.data);
      if (response.data.length === 0) {
        setDropSearchResult([
          {
            place_id: '404',
            display_name: 'try typing different or check typo',
          },
        ]);
      }
    } catch (error) {
      console.log('Error fetching addresses:', error);
    }
  };

  const handleAddressSelect = (selectedOption) => {
    
    setSelectedAddress(selectedOption);
    const selectedResult = searchResults.find(
      (result) => result.place_id === selectedOption.value
    );
    setLocObj((prev) => ({
      ...prev,
      address: selectedResult.display_name,
      pickCoordinate: [selectedResult.lat, selectedResult.lon],
    }));
  };

  const handleDropAddressSelect = (selectedOption) => {
    setSelectedDropAddress(selectedOption);
    const selectedDropResult = dropSearchResult.find(
      (result) => result.place_id === selectedOption.value
    );
    setDropLocObj((prev) => ({
      ...prev,
      address: selectedDropResult.display_name,
      dropCoordinate: [selectedDropResult.lat, selectedDropResult.lon],
    }));
  };

  const handleSubmit = (e) => {
    console.log('estimate amount ')
    e.preventDefault();

    const tripStartDate = startDate ? startDate.toISOString() : '';
    const tripEndDate = endDate ? endDate.toISOString() : '';

    const formData = {
      vehicleId: _id,
      tripStartDate,
      tripEndDate,
      pickUplocation: locObj,
      dropOfflocation: dropLocObj,
    };
    console.log(formData);
    dispatch(startGetEstimateAmount(formData));
  };

  const handeleConfirm=()=>{
    // console.log('booking')
    console.log(estimateAmount ,'dataaaaa')


  dispatch(startBooking(estimateAmount,navigate))  
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Calculate max end date (three days after the selected start date)
    const maxEndDate = new Date(date);
    maxEndDate.setDate(maxEndDate.getDate() + 3);
    setEndDate(endDate => endDate ? (endDate > maxEndDate ? maxEndDate : endDate) : maxEndDate);
  };

  return (
    <div className="col-6">
      <form onSubmit={handleSubmit}>
        <div>
          {/* <Row className="mb-3">
            <Col>
              <Form.Group controlId="startDate">
                <Form.Label>Trip Start Date:</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  minDate={today}
                  dateFormat="dd-MM-yyyy HH:mm aa"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="endDate">
                <Form.Label>Trip End Date:</Form.Label>
                <DatePicker maxDate={startDate}
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  minDate={startDate || today}
                  dateFormat="dd-MM-yyyy HH:mm aa"
                />
              </Form.Group>
            </Col>
          </Row> */}
           <Row className="mb-3">
        <Col>
          <Form.Group controlId="startDate">
            <Form.Label>Trip Start Date:</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              showTimeSelect
              minDate={today}
              dateFormat="dd-MM-yyyy HH:mm aa"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="endDate">
            <Form.Label>Trip End Date:</Form.Label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              minDate={startDate || today}
              maxDate={startDate ? new Date(startDate.getTime() + (3 * 24 * 60 * 60 * 1000)) : null} // 3 days in milliseconds
              dateFormat="dd-MM-yyyy HH:mm aa"
            />
          </Form.Group>
        </Col>
      </Row>
        </div>
        <div>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="searchAddress">
                <Form.Label>Search Addresses:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Type to search addresses"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    isInvalid={!!errors.searchTerm}
                  />
                  <Button variant="outline-secondary" onClick={fetchAddresses}>
                    Search
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.searchTerm}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="selectAddress">
                <Form.Label>Select an Address:</Form.Label>
                <Select
                  options={searchResults.map((addr) => ({
                    label: addr.display_name,
                    value: addr.place_id,
                  }))}
                  value={selectedAddress}
                  onChange={handleAddressSelect}
                  isSearchable
                  placeholder="Select an address"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="searchDropAddress">
                <Form.Label>Search Drop Addresses:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Type to search drop addresses"
                    value={dropSearchTerm}
                    onChange={(e) => setDropSearchTerm(e.target.value)}
                    isInvalid={!!errors.dropSearchTerm}
                  />
                  <Button variant="outline-secondary" onClick={fetchDropAddress}>
                    Search
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.dropSearchTerm}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="selectDropAddress">
                <Form.Label>Select a Drop Address:</Form.Label>
                <Select
                  options={dropSearchResult.map((addr) => ({
                    label: addr.display_name,
                    value: addr.place_id,
                  }))}
                  value={selectedDropAddress}
                  onChange={handleDropAddressSelect}
                  isSearchable
                  placeholder="Select a drop address"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        
        {/* {estimateAmount== null?(<Button type="submit">Estimate Price</Button>):(
         
             <Button type="submit">RecalculatePrice</Button>
        )} */}


        {isEmpty(estimateAmount)?(<Button type="submit">Estimate Price</Button>):
        (<Button type="submit">RecalculatePrice</Button>)}
        {/* // <Button type="submit">Estimate Price</Button> */}

        {!isEmpty(estimateAmount)&&(
          <div>
      <p>Estimate Amount Details</p>
      {/* <p>tripEndDate:{estimateAmount.tripStartDate}</p> */}
      <p>tripEndDate: {new Date(estimateAmount.tripStartDate).toLocaleString()}</p>
      <p>tripEndDate: {new Date(estimateAmount.tripEndDate).toLocaleString()}</p>
      <p>pickUplocation:{estimateAmount.pickUplocation.address}</p>
      <p>dropOfflocation:{estimateAmount.dropOfflocation.address}</p>
      <p> Distance:{Math?.round(estimateAmount.totalDistance)} kms</p>
      <p>Driver PerDay Chagers:{estimateAmount.totalwages}</p>
      <p>Amount :{estimateAmount.totalAmount}</p>
      <p>Price per Km :{estimateAmount.pricePerKm}</p>
      <Button type='button' onClick={handeleConfirm}>ConfirmBooking</Button>
      
      {/* <p>Total Distance:{estimateAmount.totalDistance}kms</p> */}
          </div>
        )}
      </form>
    </div>
  );
}

export default AddressForm;
