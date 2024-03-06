
import axios from "../config/axios"

const updateIsLoading = (boolean) => {
    return {
        type: "UPDATE_IS_LOADING",
        payload: boolean
    }
}
//driver adding vehicle 
export const startAddVehicle = (body,navigate) => {
    return async (dispatch) => {
        try {
            const addVehcileResponse = await axios.post('api/add-details', body, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(addVehcileResponse.data)
            dispatch(addVehcile(addVehcileResponse.data))
            navigate('/myvehicle')
        } catch (e) {
            console.log(e)
            // console.log(e.response.data.errors)
            // dispatch(serverErrors(e.response.data.errors))
        }
    }
}

const addVehcile = (data) => {
    return {
        type: 'ADD_VEHICLE',
        payload: data
    }
}


export const startGetVehicle = () => {
    return async (dispatch) => {
        try {
            const getVehicle = await axios.get('api/myvehicle', {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            })
            console.log(getVehicle.data)
            dispatch(getVehicles(getVehicle.data))
        } catch (e) {
            console.log(e ,'error')
        }
    }

}

const getVehicles= (data) => {
    return {
        type: 'GET_VEHICLE',
        payload: data
    }
}

export const startRemoveVehicle=(id)=>{
    // console.log(id)
    return async(dispatch)=>{
           try{
            console.log(id)
 const removeVehicleResponse  = await axios.delete(`/api/delete-vehicle/${id}`,
                            {headers:{
                  Authorization:localStorage.getItem('token'),
                        }
                      })
                      console.log('end')
             console.log(removeVehicleResponse.data) 
             dispatch(removeVehicle(removeVehicleResponse.data)) 
           }catch(e){
            console.log(e);
           }
    }
}

const removeVehicle=(data)=>{
    return{
        type:'REMOVE_VEHICLE',
        payload:data
    }

}


export const startGetSearchedVehicles = (
    seats = "",
    location = ""
) => {

    return async (dispatch) => {
        try {
            // dispatch(updateIsLoading('true'))
            const response = await axios.get(`api/user/search?seats=${seats}&location=${location}`)
            console.log('serach vehicle by vehicle avtion')
            console.log(response.data)
            dispatch(setSearchedvehicle(response.data))
            // dispatch(updateIsLoading('false'))  
        } catch (e) {
            console.log(e)
        }
    }
}

const setSearchedvehicle = (vehicle) => {
    return {
        type: 'SET_VEHICLE',
        payload: vehicle
    }

}

const serverErrors =(data)=>{
    return{
        type:"SERVER_ERROR",
        payload:data
    }
}