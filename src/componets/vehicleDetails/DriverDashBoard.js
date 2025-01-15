import React from 'react'
import { useSelector } from 'react-redux'

function DriverDashBoard() {
   const driverDashBoard= useSelector((state)=>state.driver.driverStatistics)
   console.log(driverDashBoard)
  return (
    <div>DriverDashBoard</div>
  )
}

export default DriverDashBoard