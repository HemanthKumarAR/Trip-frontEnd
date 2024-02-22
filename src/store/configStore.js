// import {createStore,combineReducers,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import vehicleReducer from '../reducers/vehicleReducer'

// import bookingReducer from '../reducers/bookingReducer'

// const configStore=()=>{
//  const store=  createStore(combineReducers({
//         //  vehicle : vehicleReducer,
//          booking:bookingReducer
//     }),applyMiddleware(thunk))
//     return store
// }

// export default configStore

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import vehicleReducer from '../reducers/vehicleReducer';
import bookingReducer from '../reducers/bookingReducer'; // Corrected import

const configStore = () => {
    const store = createStore(
        combineReducers({
            vehicle: vehicleReducer, 
            booking: bookingReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};

export default configStore;

