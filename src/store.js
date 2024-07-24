import { createStore } from 'redux';
import userReducer from '../src/Components/User/UserReducer'; 

const store = createStore(userReducer);

export default store;