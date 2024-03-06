const initialVehicleState = {
    serachedVehicle:[],
    // isLoading: false,
    myVehicle:[],
    serverError:[]
  }


  const vehicleReducer=(state=initialVehicleState,action)=>{
    switch(action.type){
        case 'SET_VEHICLE':{
            return {...state, serachedVehicle:action.payload}
        }
        case 'UPDATE_IS_LOADING':{
          if (action.payload === 'true') {
            return { ...state, isLoading: true }
          } else {
            return { ...state, isLoading: false }
          }
        }
        case 'ADD_VEHICLE':{
          // console.log({...state})
           return {...state,myVehicle:[...state.myVehicle,action.payload]}
          // return {...state,myVehicle:action.payload}
        }
        
        case 'GET_VEHICLE':{
          return {...state,myVehicle:action.payload}
        }

        case 'REMOVE_VEHICLE': {
          return {
            ...state,
            myVehicle: state.myVehicle.filter(ele => ele._id !== action.payload._id)
          };
        }
        case 'SERVER_ERROR':{
          return{...state,serverError:action.payload}
        }
        default:{
           return {...state}
        }
    }
    
  }
  export  default vehicleReducer
  