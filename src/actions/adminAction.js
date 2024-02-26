import axios from "../config/axios"

export const startGetUnApprovedVehicles=()=>{
    return async(dispatch)=>{
        try{
         const  response= await axios.get('api/vehicle/list',{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
              })
              console.log(response.data)
              dispatch(unApprovedVehicles(response.data))
        }catch(err){
            console.log(err)
        }

    }

}

export const startApproveVehicle=(id)=>{
    console.log(id)
    return async (dispatch)=>{
      const apprResponse=  await axios.get(`api/admin/${id}/approve`,{
          headers:{
            Authorization:localStorage.getItem('token')
          }
      })
      console.log(apprResponse.data)
      dispatch(updateVehicleList(apprResponse.data))
    }
}

export const startRejectVehicle=(id)=>{
    console.log(id)
    return async(dispatch)=>{
     const rejectResponse =  await axios.get(`api/admin/${id}/reject`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        console.log(rejectResponse.data)
        dispatch(updateVehicleList(rejectResponse.data))
    }

}


const unApprovedVehicles=(data)=>{
    return {
        type:'UNAPPROVED_VEHICLE',
        payload:data
    }

}

const  updateVehicleList=(data)=>{
    return{
        type:'APPROVE_VEHICLE',
        payload:data
    }
}