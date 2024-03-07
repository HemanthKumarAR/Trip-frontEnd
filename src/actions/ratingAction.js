import axios from "../config/axios"

export const startAddRating=(body)=>{
    console.log(body)
    return async(dispatch)=>{
        try{
            const reviewResponse= await axios.post('api/review/add',body,{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(reviewResponse.data)
        }catch(error){
            console.log(error)
        }
   

    }
}