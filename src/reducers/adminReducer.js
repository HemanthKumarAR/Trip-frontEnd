const initialVehicle={
    vehicleProfile:[]
}

const adminReducer=(state=initialVehicle,action)=>{
    switch(action.type){
        case 'UNAPPROVED_VEHICLE':{
            return {...state,vehicleProfile:action.payload}
        }
        case 'APPROVE_VEHICLE':{
            return {...state,vehicleProfile:state.vehicleProfile.filter((ele)=>ele.id!==action.payload)}
        }
       

        default:{
            return{...state}
        }
    }

}

export default adminReducer