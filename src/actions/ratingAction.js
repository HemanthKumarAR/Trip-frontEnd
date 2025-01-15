import { toast } from "react-toastify"
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
            if(Object.keys(reviewResponse.data.error).length>0){

                toast.error(reviewResponse.data.error)
            }else{
                
            }
            console.log(reviewResponse.data)

        }catch(error){
            console.log(error)
        }
   

    }
}