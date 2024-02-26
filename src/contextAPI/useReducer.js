// function userReducer(state,action){
//     switch(action.type){
//         case 'USER_LOGIN':{
//             return {...state,user:action.payload,isLoggedIn:true}
//         }
//         case 'LOGOUT_USER':{
//             return {...state,user:{},isLoggedIn:false}
//         }
//         default:{
//             return {...state}
//         }
//     }
//  }

//  export default userReducer

 const userReducer = (state, action) => {
  console.log(state)
    switch (action.type) {
      case "USER_LOGIN": {
        console.log('hemanth')
        return { ...state, user: { ...action.payload } };
      }
      case "USER_UPDATE": {
        return { ...state, user: { ...state.user,...action.payload } };
      }
      
      case "USER_LOGOUT": {
        // return { ...state, user: { ...action.payload } };
        return { ...state, user: {} }
      }
      
      default: {
        return { ...state };
      }
    }
  };
  
  export default userReducer;

//m //n

//  const userReducer = (state, action) => {
//     switch (action.type) {
//       case "USER_LOGIN": {
//         return { ...state, user: { ...action.payload } };
//       }
//       case "USER_UPDATE": {
//         return { ...state, user: { ...state.user,...action.payload } };
//       }
//       case "USER_LOGOUT": {
//         return { ...state, user: { ...action.payload } };
//       }
//       default: {
//         return { ...state };
//       }
//     }
//   };
  
//   export default userReducer;