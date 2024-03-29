import React,{useEffect} from 'react'
import { Button, ToastContainer } from 'react-bootstrap'

import axios from '../config/axios'
import {Link} from "react-router-dom"

function Success() {
  useEffect(()=>{
    (async()=>{
      try{
        const stripeId = localStorage.getItem("stripeId")
        console.log(stripeId)
        const response = await axios.put("api/trip/update-payment",{stripeId},{
          
            headers:{
                Authorization: localStorage.getItem('token')
            }
         
        })
        if(response) localStorage.removeItem("stripeId")
        


      }catch(err){
        console.log(err)
        // toast.error(JSON.stringify(err))
      }
    })()
  },[])
  return (
    <div style={{backgroundImage:"url(https://eventpot.s3.ap-south-1.amazonaws.com/success-gif.gif)"}}>
      <div style={{display:"flex",justifyContent:"space-around",backgroundImage:"url(https://eventpot.s3.ap-south-1.amazonaws.com/success-gif.gif)"}} >

      <Link to="/"><Button>Home</Button></Link>
      <Link to="/user-profile"><Button>Profile</Button></Link>
      </div>
      <img src={`https://eventpot.s3.ap-south-1.amazonaws.com/success-gif.gif`} style={{width:"80%",height:"40%",margin:"0 0 0 10%"}}/>
      <ToastContainer/>
    </div>
  );

  
  
}

export default Success
