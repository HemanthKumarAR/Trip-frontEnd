// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Row, Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap'; // Import Row from react-bootstrap
// import Select from 'react-select';

// export default function Profile() {
//   const { id } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dropSearchTerm, setDropSearchTerm] = useState('');

//   const [searchResults, setSearchResults] = useState([]);
//   const [dropSearchResult, setDropSearchResult] = useState([]);

//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const[selectedDropAddress,setSelectedDropAddress]=useState(null)

//   const [locObj, setLocObj] = useState({
//     address: '',
//     // place_id: '',
//     lonlat: ['', ''],
//     // city: '',
//   });
//   const[dropLocObj,serDropLocObj]=useState({
//     address: '',
//     lonlat: ['', ''],
//   })
//   const [errors, setErrors] = useState({});

//   const fetchAddresses = async () => {
//     try {
//       const GEO_CODE_API_KEY = '659802a9ecc6a876797382jag35e1f0';
//       const response = await axios.get(
//         `https://geocode.maps.co/search?q=${searchTerm}&api_key=${GEO_CODE_API_KEY}`
//       );
//       setSearchResults(response.data);
//       if (response.data.length === 0) {
//         setSearchResults([
//           {
//             place_id: '404',
//             display_name: 'Try typing different or check typo',
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error('Error fetching addresses:', error);
//     }
//   };

//   const fetchDropAddress=async()=>{
//     try{
//       const GEO_CODE_API_KEY = '659802a9ecc6a876797382jag35e1f0';
//       const response = await axios.get(
//         `https://geocode.maps.co/search?q=${dropSearchTerm}&api_key=${GEO_CODE_API_KEY}`
//       );
//       console.log(response.data)
//       setDropSearchResult(response.data)
//       if(response.data.length===0){
//         setDropSearchResult([
//           {place_id:'404',display_name:'try typing different or check typo'}
//         ])
//       }
//     }catch(error){
//       console.log('Error fetching addresses:', error)
//     }
//   }

//   const handleAddressSelect = (selectedOption) => {
//     setSelectedAddress(selectedOption);
//     const selectedResult = searchResults.find(
//       (result) => result.place_id === selectedOption.value
//     );
//     setLocObj((prev) => ({
//       ...prev,
//       address: selectedResult.display_name,
//       // place_id: selectedResult.place_id,
//       lonlat: [selectedResult.lon, selectedResult.lat],
//       // city: prev.city,
//     }));
//   };

//   const handleDropAddressSelect=(selectedOption)=>{
//    setSelectedDropAddress(selectedOption)
//    const selectedDropResult=dropSearchResult.find((result)=> result.place_id===selectedOption)
//    serDropLocObj((prev)=>({
//     ...prev,
//     address:selectedDropResult.display_name,
//     lonlat:[selectedDropResult.lon,selectedDropResult.lat]
//    }))



//   }



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', locObj);
//     // Further processing like sending data to backend can be done here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Row className="mb-3"> {/* Use Row component here */}
//           <Col>
//             <Form.Group controlId="searchAddress">
//               <Form.Label>Search Addresses:</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   type="text"
//                   placeholder="Type to search addresses"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onFocus={() => setLocObj((prevLocObj) => ({ ...prevLocObj, selectedAddress: "" }))}
//                   // onFocus={() => setLocObj((prevLocObj) => ({ ...prevLocObj, selectedAddress: "" }))} 
//                   // onFocus={() => setSelectedAddress(null)}
//                   isInvalid={!!errors.searchTerm}
//                 />
//                 <Button variant="outline-secondary" onClick={fetchAddresses}>
//                   Search
//                 </Button>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.searchTerm}
//                 </Form.Control.Feedback>
                
//               </InputGroup>
//             </Form.Group>
//           </Col>
//           {/* <Col>
//             <Form.Group className="mb-3" controlId="cityName">
//               <Form.Label>City Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={locObj.city}
//                 onChange={(e) =>
//                   setLocObj((prev) => ({ ...prev, city: e.target.value }))
//                 }
//                 isInvalid={!!errors.cityName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.cityName}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col> */}
//         </Row>
//         <Form.Group controlId="selectAddress">
//           <Form.Label>Select an Address:</Form.Label>
//           <Select
//             options={searchResults.map((addr) => ({
//               label: addr.display_name,
//               value: addr.place_id,
//             }))}
//             value={selectedAddress}
//             onChange={handleAddressSelect}
//             isSearchable
//             placeholder="Select an address"
//           />
//         </Form.Group>
//         <div className="errors">
//           {errors.selectedAddress && <h6>{errors.selectedAddress}</h6>}
//         </div>
//       </div>

//       <div>
//       <Row className="mb-3">
//        <Col>
//        <Form.Group controlId="searchAddress"></Form.Group>
//        <Form.Label>Search drop Addresses:</Form.Label>
//        <InputGroup>
//        <FormControl
//        type='text'
//        placeholder='type drop address'
//        value={dropSearchTerm}
//        onChange={(e)=>setDropSearchTerm(e.target.value)}
//        isInvalid={!errors.dropSearchTerm}
//        />

//        <button variant="outline-secondary"  onClick={fetchDropAddress}>
//        search
//        </button>

//        </InputGroup>
       
//        </Col>

//       </Row>
//       <Form.Group controlId="selectAddress">
//       <Form.Label>Select an  drop Address:</Form.Label>
//       <Select 
//       options={dropSearchResult.map((addr)=>({
//          label:addr.display_name,
//          value: addr.place_id,
//       }))}
//       value={dropSearchResult}
//       onChange={handleDropAddressSelect}
//       />
//       </Form.Group>
//       </div>


//       <Button type="submit">Confirm Address</Button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';

export default function Profile() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [dropSearchTerm, setDropSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dropSearchResult, setDropSearchResult] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedDropAddress, setSelectedDropAddress] = useState(null);
  const [locObj, setLocObj] = useState({
    address: '',
    lonlat: ['', ''],
  });
  const [dropLocObj, setDropLocObj] = useState({
    address: '',
    lonlat: ['', ''],
  });
  const [errors, setErrors] = useState({});

  const fetchAddresses = async () => {
    try {
      const GEO_CODE_API_KEY = '659802a9ecc6a876797382jag35e1f0';
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${searchTerm}&api_key=${GEO_CODE_API_KEY}`
      );
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
      lonlat: [selectedResult.lon, selectedResult.lat],
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
      lonlat: [selectedDropResult.lon, selectedDropResult.lat],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', locObj);
    console.log('Drop Form submitted:', dropLocObj);
    // Further processing like sending data to backend can be done here
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="errors">
          {errors.selectedAddress && <h6>{errors.selectedAddress}</h6>}
        </div>
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
        <div className="errors">
          {errors.selectedDropAddress && <h6>{errors.selectedDropAddress}</h6>}
        </div>
      </div>

      <Button type="submit">Confirm Address</Button>
    </form>
  );
}

