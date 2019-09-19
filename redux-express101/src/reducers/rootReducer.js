//this is the root reducer
//to make a rootreducer...
//1. get a method from redux called combineReducer
import { combineReducers } from 'redux';
// 2. get each individual reducer
// the store is managed by this thing ( root reducer )
//the manager needs individual departments... the reducers
import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';

// 3. call combineReducers, and hand it an object. 
//3.1 each key in the object we pass to combineReducers, will be
//a piece of state in the redux Store.
//3.2 each value will be the value of that piece of state, in the redux store.
const rootReducer = combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
});

export default rootReducer;