import registerReducer from "./reg";
import loginReducer from "./login";
import {combineReducers} from 'redux';



const AllReducers=combineReducers({
    login: loginReducer,
    register:registerReducer,
  
    
});

export default AllReducers;