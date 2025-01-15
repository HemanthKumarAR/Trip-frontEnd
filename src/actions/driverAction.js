
import { toast } from 'react-toastify'
import axios from '../config/axios'

export const startGetDriverorder=()=>{
    return async(dispatch)=>{
        try{
        const myOrderResponse=    await axios.get('api/myorder',{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(myOrderResponse.data)
            dispatch(setMyOrders(myOrderResponse.data))
        }catch(e){

        }
    }
}

export const startGetDriverStatistics=()=>{
    console.log('driver statitics')
    return async(dispatch)=>{
         try{
    const driverStatisticsResponse = await axios.get('api/driver/dashboard',{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
//   console.log(driverStatisticsResponse.data,'statitics2')
  dispatch(setMyDashBoard(driverStatisticsResponse.data))
         }catch(error){

         }
    }
}

export const startAcceptOrder=(body)=>{
    console.log(body)
    return async(dispatch)=>{
     try{
        const orderAcceptResponse=  await axios.get(`api/accept/${body}`,{
                headers:{Authorization: localStorage.getItem('token') }
             })
             console.log(orderAcceptResponse.data)
           dispatch(setOrderAccept(orderAcceptResponse.data))
     }catch(e){
       console.log(e)

     }
    }
}

export const startRejectOrder=(id,body)=>{
    console.log(id,body)
    return async(dispatch)=>{
        try{
          const orderRejectResponse=    await axios.post(`api/reject/${id}`,body,{
                headers:{Authorization: localStorage.getItem('token') }
              })
            console.log(orderRejectResponse.data)
            dispatch(setOrderAccept(orderRejectResponse.data))
        }catch(e){

        }
    }
}


export const startTrip=(tripId)=>{

    console.log(tripId)
    return async(dispatch)=>{
     try{
        const orderAcceptResponse=  await axios.get(`api/tripstart/${tripId}`,{
                headers:{Authorization: localStorage.getItem('token') }
             })
             console.log(orderAcceptResponse.data)
        //    dispatch(setUpdateOtp(orderAcceptResponse.data))
     }catch(e){
       console.log(e)

     }
    }

}


export const startTripOtpVerify=(body)=>{
    console.log(body)
    return async(dispatch)=>{
        try{
          const orderRejectResponse=    await axios.post('api/start/otp',body,{
                headers:{Authorization: localStorage.getItem('token') }
              })
            console.log(orderRejectResponse.data)
            if(orderRejectResponse.status==201){
                toast.success(orderRejectResponse.data.message)
                dispatch(setOrderAccept(orderRejectResponse.data.tripUpdate))
                // res.json({ message: 'trip is verified',tripUpdate});
            }else{
                toast.error(orderRejectResponse.data.error)
            }
            // dispatch(setOrderAccept(orderRejectResponse.data))
        }catch(error){
           console.log(error)

           toast.error(error.response.data.error)
        }
    }
}


export const endTripOtpVerify=(body)=>{
    return async(dispatch)=>{
        try{
            const orderRejectResponse=    await axios.post('api/end/otp',body,{
                headers:{Authorization: localStorage.getItem('token') }
              })
              console.log(orderRejectResponse.data)
              if(orderRejectResponse.status==201){
                toast.success(orderRejectResponse.data.message)
                dispatch(setOrderAccept(orderRejectResponse.data.tripUpdate))
                // res.json({ message: 'trip is verified',tripUpdate});
            }else{
                toast.error(orderRejectResponse.data.error)
            }
        }catch(error){
            console.log(error)

            toast.error(error.response.data.error)
        }
    }
}




const setMyOrders=(data)=>{
    return{
        type:"DRIVER_ORDER",
        payload:data
    }
}

const setMyDashBoard=(data)=>{
    return{
        type:"DRIVER_STATISTICS",
        payload:data
    }
}

const setOrderAccept=(data)=>{
    return{
        type:"ORDER_ACCEPT",
        payload:data

    }
}

const setUpdateOtp=(data)=>{
    return{
        type:"UPDATE_TRIP_OTP",
        payload:data
    }
}