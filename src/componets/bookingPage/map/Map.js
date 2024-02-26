import React from 'react'
import { MapContainer ,TileLayer,Marker} from 'react-leaflet'

import "../../../App.css"
import { Icon } from 'leaflet'
import RoutingMap from './RoutingMap'
import taxiIcon from '../../images/taxi icon.png'
import 'leaflet/dist/leaflet.css';

function Map({ coordinates, drag }) {
   const [pickUpCoordinate,dropOffCoordinate]=coordinates
   console.log(pickUpCoordinate,dropOffCoordinate ,'details')
  
    
  return (

    <div class="col-6">
        <h2> MAP</h2>
      
        <MapContainer  doubleClickZoom={false} center={[20.5937, 78.9629]} zoom={6}>
       
        <TileLayer
             url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
             attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
           />
         {/* {marker.map((marker)=>{
             <Marker position={marker.geoCode} ></Marker>
         }
         )} */}
         {/* {marker.map(marker =>(
             <Marker position={marker.geoCode} icon={customIcon}>
 
             </Marker>
         ))} */}
         {/* {pickUpCoordinate && <Marker position={pickUpCoordinate} icon={customIcon}></Marker>}
         {dropOffCoordinate && <Marker position={dropOffCoordinate} icon={customIcon}></Marker>} */}
         
         {coordinates[0] && coordinates[1] &&(
         <RoutingMap 
          pick={coordinates[0]}
          drop={coordinates[1]}
          drag={drag}
         />)}
     </MapContainer>
        
    
    </div>
  )
}

export default Map