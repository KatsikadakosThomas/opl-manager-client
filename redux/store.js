import { createStore } from 'redux';
import reducer from './userReducer'

const store =createStore(reducer);

export default store;