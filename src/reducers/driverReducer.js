const initialState = {
  myOrder: [],
  driverStatistics: {}
}

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DRIVER_ORDER': {
      return { ...state, myOrder: action.payload }
    }

    case 'DRIVER_STATISTICS':{
      return {...state,driverStatistics:action.payload}
    }

    case 'ORDER_ACCEPT':
      const updatedOrders = state.myOrder.map(order =>
        order._id === action.payload._id ? { ...order, tripStatus: action.payload.tripStatus } : order
      );
      return { ...state, myOrder: updatedOrders };


    default: {
      return { ...state }
    }
  }


}

export default driverReducer