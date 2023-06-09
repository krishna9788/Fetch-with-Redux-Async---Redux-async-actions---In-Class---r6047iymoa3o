import {
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "./constants";

import {
    getUsers,
} from "./api";

import store from './store'



const getUserById = async (id) => {
   //Complete this function
    try {
        
       // Dispatch GET_USERS_BY_ID_REQUEST action
        store.dispatch({ type: GET_USERS_BY_ID_REQUEST });
        const userName =  await getUsers(id);
       // Fetch user data from the API
        //  const response = await getUsers(id);
        //  console.log("check user",userName);

       // Dispatch GET_USERS_BY_ID_SUCCESS action with the user's name as the payload
       store.dispatch({
         type: GET_USERS_BY_ID_SUCCESS,
         payload: userName,
       });
     } catch (error) {
    //    Dispatch GET_USERS_BY_ID_FAIL action with the error message as the payload
       store.dispatch({
         type: GET_USERS_BY_ID_FAIL,
         payload: error.message,
       });
     }
};

export default getUserById




