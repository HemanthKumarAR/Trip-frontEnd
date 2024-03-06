import { empty } from "../actions/bookingAction"

const intialBookState={
    estimateAmount:{},
    myTrip:[],
    tripBooking:{},
    serverError:[],
   //  myOrder:[]
}




const bookingReducer=(state=intialBookState,action)=>{
 switch(action.type){
     case 'ADD_CALCULATION':{
        return {...state,estimateAmount:action.payload} // adding only one current data
     }
     case 'EMPTY_ESTIMATE':{
        console.log('working')
        return {...state,estimateAmount:{},tripBooking:{},myTrip:[]}
     }
     
     case 'ADD_BOOKING':{
    //    return{...state,booking:[...state.booking,action.payload]} // adding along with old data
    return{...state,tripBooking:action.payload}
     }
     case 'USER_TRIP':{
        return{...state,myTrip:action.payload}
     }
   //   case 'DRIVER_ORDER':{
   //    return {...state,myOrder:action.payload}
   //   }
    default:{
        return {...state}
    }
 }
}

export default bookingReducer; 