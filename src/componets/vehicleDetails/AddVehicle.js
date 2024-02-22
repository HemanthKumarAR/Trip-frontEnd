




// import { useDispatch ,useSelector} from 'react-redux';
// import {startAddVehicle} from '../../actions/vehicleAction'
// import { useNavigate } from 'react-router-dom';

// import React, { useState } from 'react';


// const YourFormComponent = () => {
//   const vehicle=  useSelector((state)=>state.vehicle.myVehicle)
//   console.log(vehicle)

//   const [formData, setFormData] = useState({
//     driverId: '',
//     vehicleNumber: '',
//     rcNumber: '',
//     licenseNumber: '',
//     vehicleName: '',
//     vehicleModel: '',
//     wages: '',
//     pricePerKm: 0,
//     seating: '',
//     permit: '',
//     address: '',
//   });

//   const navigate = useNavigate();

//   const [images, setImages] = useState([
//     { title: 'vehicle', image: null },
//     { title: 'rc', image: null },
//     { title: 'license', image: null },
//     { title: 'insurance', image: null },
//   ]);

  

//   const dispatch=useDispatch()

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (index, selectedImage) => {
//     setImages((prevImages) => {
//       const updatedImages = [...prevImages];
//       updatedImages[index].image = selectedImage;
//       return updatedImages;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append("vehicleNumber",formData.vehicleNumber)
//     formDataToSend.append("rcNumber",formData.rcNumber)
//     formDataToSend.append("licenseNumber",formData.licenseNumber)
//     formDataToSend.append("wages",formData.wages)
//     formDataToSend.append("pricePerKm",formData.pricePerKm)
//     formDataToSend.append("address",formData.address)
//     formDataToSend.append('vehicleName',formData.vehicleModel)
//     formDataToSend.append('vehicleModel',formData.vehicleModel)
//     formDataToSend.append('seating',formData.seating)

//     images.forEach((image, index) => {
//       formDataToSend.append(`${image.title}Title`, image.title);
//       formDataToSend.append(`${image.title}Image`, image.image);
//     });


//     // formDataToSend.append("vehicleTitle", images[0].tittle);
//     // formDataToSend.append("vehicleImage", images[0].image);

//     // formDataToSend.append("rcTitle", images[1].tittle);
//     // formDataToSend.append("rcImage", images[1].image);

//     // formDataToSend.append("licenseTitle",images[2].tittle)
//     // formDataToSend.append('licenseImage',images[2].image)

//     // formDataToSend.append('insuranceTitle',images[3].tittle)
//     // formDataToSend.append('insuranceImage',images[3].image)



//   console.log('vehicle',[...formDataToSend])
//   dispatch(startAddVehicle(formDataToSend))
//   navigate('/myvehicle')

//   };


 

//   return (
//     <div>
//       {vehicle.length!=0 ? (<h2> your Vechile is added please check in my vehicle</h2>):
//                 (<form onSubmit={handleSubmit}>
//                   <label>
//                     Driver ID:
//                     <input type="text" name="driverId" value={formData.driverId} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Vehicle Number:
//                     <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     RC Number:
//                     <input type="text" name="rcNumber" value={formData.rcNumber} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     License Number:
//                     <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
//                   </label>
            
//                   {images.map((image, index) => (
//                   <div key={index}>
//                     {/* <label>
//                       {image.title} Title:
//                       <input
//                         type="text"
//                         value={image.title}
//                         readOnly
//                       />
//                     </label> */}
//                     <label>
//                       {image.title} Image:
//                       <input
//                         type="file"
//                         onChange={(e) => handleImageChange(index, e.target.files[0])}
//                       />
//                     </label>
//                   </div>
//                 ))}
                  
            
//                   <label>
//                     Vehicle Name:
//                     <input type="text" name="vehicleName" value={formData.vehicleName} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Vehicle Model:
//                     <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Wages:
//                     <input type="text" name="wages" value={formData.wages} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Price Per Km:
//                     <input type="number" name="pricePerKm" value={formData.pricePerKm} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Seating:
//                     <input type="text" name="seating" value={formData.seating} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Permit:
//                     <input type="text" name="permit" value={formData.permit} onChange={handleChange} />
//                   </label>
            
//                   <label>
//                     Address:
//                     <input type="text" name="address" value={formData.address} onChange={handleChange} />
//                   </label>
            
//                   <button type="submit">Submit</button>
//                 </form>)
//       }
    
//     </div>
//   );
// };

// export default YourFormComponent;


//withcss
import { useDispatch ,useSelector} from 'react-redux';
import { startAddVehicle } from '../../actions/vehicleAction';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './AddVehicle.css'

const YourFormComponent = () => {
  const vehicle = useSelector((state) => state.vehicle.myVehicle);
  console.log(vehicle);

  const [formData, setFormData] = useState({
    driverId: '',
    vehicleNumber: '',
    rcNumber: '',
    licenseNumber: '',
    vehicleName: '',
    vehicleModel: '',
    wages: '',
    pricePerKm: 0,
    seating: '',
    permit: '',
    address: '',
  });

  const navigate = useNavigate();

  const [images, setImages] = useState([
    { title: 'vehicle', image:[] },
    { title: 'rc', image: null },
    { title: 'license', image: null },
    { title: 'insurance', image: null },
  ]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (index, selectedImage) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].image = selectedImage;
      return updatedImages;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("vehicleNumber",formData.vehicleNumber)
    formDataToSend.append("rcNumber",formData.rcNumber)
    formDataToSend.append("licenseNumber",formData.licenseNumber)
    formDataToSend.append("wages",formData.wages)
    formDataToSend.append("pricePerKm",formData.pricePerKm)
    formDataToSend.append("address",formData.address)
    formDataToSend.append('vehicleName',formData.vehicleModel)
    formDataToSend.append('vehicleModel',formData.vehicleModel)
    formDataToSend.append('seating',formData.seating)

    images.forEach((image, index) => {
      formDataToSend.append(`${image.title}Title`, image.title);
      formDataToSend.append(`${image.title}Image`, image.image);
    });

    console.log('vehicle',[...formDataToSend]);
    dispatch(startAddVehicle(formDataToSend));
    navigate('/myvehicle');
  };

  return (
    <div className="container">
      {vehicle.length !== 0 ? (
        <h2 className="text-center my-4">Your vehicle has been added. Please check it in My Vehicles.</h2>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          {/* <div className="mb-3">
            <label htmlFor="driverId" className="form-label">Driver ID:</label>
            <input type="text" name="driverId" id="driverId" className="form-control" value={formData.driverId} onChange={handleChange} />
          </div> */}

          <div className="mb-3">
          <label className="form-label">
          Vehicle Number:
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        </div>

        <div className="mb-3">
        <label className="form-label">
          RC Number:
          <input
            type="text"
            name="rcNumber"
            value={formData.rcNumber}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
          <label className="form-label">
           License Number:
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        </div>

        <div className="mb-3">
        <label className="form-label">
          Vehicle Name:
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
        <label className="form-label">
          Vehicle Model:
          <input
            type="text"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
        <label className="form-label">
          Wages:
          <input
            type="text"
            name="wages"
            value={formData.wages}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
        <label className="form-label">
          Price Per Km:
          <input
            type="text"
            name="pricePerKm"
            value={formData.pricePerKm}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
        <label className="form-label">
          Seating :
          <input
            type="text"
            name="seating"
            value={formData.seating}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

        <div className="mb-3">
        <label className="form-label">
          starting point of vehicle  :
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
          />
        </label> 
        </div>

          {images.map((image, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={`image${index}`} className="form-label">{image.title} Image:</label>
              <input type="file" id={`image${index}`} className="form-control" onChange={(e) => handleImageChange(index, e.target.files[0])} multiple/>
            </div>
          ))}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default YourFormComponent;


//full componet 

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { startAddVehicle } from '../../actions/vehicleAction';
// import { useNavigate } from 'react-router-dom';
// import './AddVehicle.css';

// const YourFormComponent = () => {
//   const vehicle = useSelector((state) => state.vehicle.myVehicle);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = React.useState({
//     driverId: '',
//     vehicleNumber: '',
//     rcNumber: '',
//     licenseNumber: '',
//     vehicleName: '',
//     vehicleModel: '',
//     wages: '',
//     pricePerKm: 0,
//     seating: '',
//     permit: '',
//     address: '',
//   });

//   const [images, setImages] = React.useState([
//     { title: 'vehicle', image: null },
//     { title: 'rc', image: null },
//     { title: 'license', image: null },
//     { title: 'insurance', image: null },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (index, selectedImage) => {
//     setImages((prevImages) => {
//       const updatedImages = [...prevImages];
//       updatedImages[index].image = selectedImage;
//       return updatedImages;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     images.forEach((image, index) => {
//       formDataToSend.append(`${image.title}Title`, image.title);
//       formDataToSend.append(`${image.title}Image`, image.image);
//     });

//     console.log('vehicle', [...formDataToSend]);
//     dispatch(startAddVehicle(formDataToSend));
//     navigate('/myvehicle');
//   };

//   return (
//     <div className="container">
//       {vehicle.length !== 0 ? (
//         <h2>Your Vehicle is added. Please check in My Vehicle.</h2>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="driverId">Driver ID:</label>
//             <input
//               type="text"
//               name="driverId"
//               value={formData.driverId}
//               onChange={handleChange}
//               className="form-control"
//               id="driverId"
//             />
//           </div>

//           {/* Repeat the pattern for other input fields */}
          
//           {images.map((image, index) => (
//             <div key={index} className="form-group">
//               <label htmlFor={image.title}>{image.title} Image:</label>
//               <input
//                 type="file"
//                 onChange={(e) => handleImageChange(index, e.target.files[0])}
//                 className="form-control-file"
//                 id={image.title}
//               />
//             </div>
//           ))}

//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default YourFormComponent;


