import React from 'react'
// import QueryForm from '../search/QueryForm'
import QueryForm from '../search/QueryForm'
import VehicleContainer from './VehicleContainer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {startGetSearchedVehicles} from '../../actions/vehicleAction'

function VehicleResult() {
    const dispatch=useDispatch()
    useEffect(()=>{
                 const formData= JSON.parse(localStorage.getItem('query'))
                 console.log(formData)
                 console.log(formData.seats)
                 console.log(formData.location)
                 dispatch(startGetSearchedVehicles(formData.seats,formData.location))      
    })
  return (
    <div  style={{ backgroundColor: "#fafafa", height: "90vh", margin: "0px", }}>VehicleResult
     <QueryForm />
     <VehicleContainer/>
    </div> 
  )
}

export default VehicleResult