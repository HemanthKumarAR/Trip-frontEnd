// import logo from './logo.svg';
// import './App.css';
//navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/navbar/Navbar';
//floder
import Home from './componets/Home';
import UserRegister from './componets/auth/UserRegister';
import UserLogin from './componets/auth/UserLogin';
import Search from './componets/search/SearchContainer';
import HomeCarousel from './componets/HomeCarousel';
import ProfileContainer from './componets/profile/ProfileContainer'
import VehicleResult from './componets/serachResult/VehicleResult';
import MyVehicle from './componets/vehicleDetails/MyVehicle';

import AddVehicle from "./componets/vehicleDetails/AddVehicle.js"
import Book from './componets/bookingPage/Book';
// import MyTrip from './componets/myTrip/mytrip.js'
// import MyTrip from './componets/myTrip/'
import TripDetails from './componets/myTrip/TripDetails';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
//userReducer ,context api
import { createContext ,useReducer,useEffect} from 'react';
import userReducer from "./contextAPI/useReducer"
import Success from './pages/Success';
import Cancel from './pages/Cancel';

import VehicleApproval from './componets/admin/vehicleApprove/VehicleApproval';

import BookingDetails from './componets/bookingPage/BookingDetails';

import MyOrder from './componets/driverComponet/myOrder/MyOrder.js';

//axios
import axios from './config/axios';

//jwtDecode
import { jwtDecode } from "jwt-decode";

//redux
import { useDispatch } from 'react-redux';
import { startGetVehicle } from './actions/vehicleAction';
import { startGetMyTrip } from './actions/bookingAction';
import { startGetUnApprovedVehicles } from './actions/adminAction';
import { startGetDriverorder } from './actions/driverAction.js';

export const UserContext = createContext();
function App() {
  
  const [userState, userDispatch] = useReducer(userReducer, {
    user: {},
    // isLoggedIn: false,
    serverError: {},
  });
  console.log(userState)

const dispatch=useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      (async () => {
        try {
          const profile = await axios.get('api/profile', {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          });

          if(jwtDecode(localStorage.getItem('token')).role==='driver'){
            dispatch(startGetVehicle())
            dispatch(startGetDriverorder())
          }

          if(jwtDecode(localStorage.getItem('token')).role==='customer'){
            dispatch(startGetMyTrip()) 
          }

          if(jwtDecode(localStorage.getItem('token')).role==='admin'){
            dispatch(startGetUnApprovedVehicles())
          }

          
  
          userDispatch({
            type: 'USER_LOGIN',
            payload: profile.data,
          });
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, []);


  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
    <BrowserRouter>
    <div style={{backgroundColor: "#fafafa"}}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<HomeCarousel/>}/>
      <Route path='/register' element={<UserRegister/>}/>
      <Route path='/login' element={<UserLogin/>}/>

      <Route path='/uhome' element={<Search/>}/>
      <Route path='/profile' element={<ProfileContainer/>}/>
      <Route path='/vehicleresult' element={<VehicleResult/>}/>
      <Route path='/addvehicle' element={<AddVehicle/>}/>
      <Route path='/myvehicle' element={<MyVehicle/>}/>
      <Route path='/myTrip' element={<TripDetails/>}/>
      <Route path='/book' element={<Book/>}/>

      <Route path='/bookDetails' element={<BookingDetails/>}/>

      <Route path='/myorder' element={<MyOrder/>}/>

      <Route path='/success' element={<Success/>}/>
      <Route path='/cancel' element={<Cancel/>}/>

      <Route path='/vehicleapprove' element={<VehicleApproval/>}/>

     
    </Routes>

      

      
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  )
}


export default App;
