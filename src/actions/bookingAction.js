import axios from "../config/axios"
import { useNavigate } from "react-router-dom"

// const navigate= useNavigate()
export const startGetEstimateAmount=(body)=>{

    return async (dispatch)=>{
        
        try{
            const calculationRespose=   await axios.post('api/amount',body,{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
              })
              console.log('booking action22')
              console.log(calculationRespose.data)
              dispatch(getCalculate(calculationRespose.data))
        }catch(e){

        }

    }

}

export const startBooking=(body,navigate)=>{
    
    console.log(body)
    return async(dispatch)=>{
        try{
          const book= await axios.post('api/book',body,{
                    headers:{
                        Authorization: localStorage.getItem('token')
                    }
                 })
                 console.log(book.data)
                 dispatch(getBook(book.data))
                 navigate('/bookDetails')
                 
        }catch(e){
            console.log(e)
        }
       
    }
}

export const startGetMyTrip=()=>{
    console.log('helooo')
    return async(dispatch)=>{
        try{
          const myTripResponse=   await axios.get('api/mytrip',{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
             })
             console.log(myTripResponse.data)
             dispatch(getMyTrip(myTripResponse.data))
        }catch(e){
            console.log(e)
        }

    }
}


export const startPayment = (tripId)=>{
    return async(dispatch)=>{
        console.log('payment api')
        try{
        const response = await axios.post(`api/booking/${tripId}/payment`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
         })
            console.log(response.data.id)
            dispatch(setStartBooking(response.data)) 
  
        }catch(err){
            console.log(err)
        }
    }
}

const setStartBooking = (data)=>{
    if(data){
        localStorage.setItem("stripeId",data.id)
        window.location = data.url
    }else{

    }
}

// export const startPaymentDelete = ()=>{
//     return async(dispatch)=>{
//         try{
            
//             // const response = await axios.delete(`/api/delete-payment/${}`)
//             dispatch(setStartPaymnetDelete(response.data))
//         }catch(err){
//             console.log(err)
//         }
//     }
// }
// const setStartPaymnetDelete = (data)=>{
//     return{
//         type:"DELTE_PAYMENT_TRUE",
//         paylaod:data
//     }

// }
// export const startCancelBooking = (bookingId)=>{
//     console.log(bookingId,"id")
//     return async(dispatch)=>{
//         try{
//             const response = await axios.delete(`/api/booking/${bookingId}`,config)
//             dispatch(setCancelPayment(response.data))   
//             dispatch(setClearTicket())
//         }catch(err){
//             toast.error(err.response.data.error)
//             console.log(err)
//         }
//     }
// }
// const setCancelPayment = (data)=>{
//     return{
//         type:"DELTE_BOOKING_TRUE",
//         paylaod:data
//     }

// }

const getMyTrip=(data)=>{
    return{
        type:"USER_TRIP",
        payload:data
    }

}

const getBook=(data)=>{
    return{
        type:'ADD_BOOKING',
        payload:data
    }
}

const getCalculate=(data)=>{
    return{
        type:"ADD_CALCULATION",
        payload:data,
    }

}