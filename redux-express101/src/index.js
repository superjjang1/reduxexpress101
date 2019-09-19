import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxPromise from 'redux-promise';

// 1. in order to use react with redux, we need react-redux
import { Provider } from 'react-redux'; //this is our glue between react and redux

// 2. Create a redux store, so that:
//      2.1: Redux exists,
//      2.2: The provider has that store.
//      2.3.1: We NEED some middleware
//      Redux comes with a function called applyMiddleware
import { createStore, applyMiddleware } from 'redux';
// 3. reducers to populate the store
// 3.1. reducers go into the rootReducer
// 3.2. make individual reducers to go into the rootreducer
import rootReducer from './reducers/rootReducer';
//4. actually create the store(2) 
// by passing it the root reducer(3.) which is made up of the individual reducers
// 4.1.1 to use middleware, we intercept createstore
const theStoreWithSomeMiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer);
//above is the same thing as this. 

// const aPublix = createStore(rootReducer);
//WOOHOO! made a store, redux is ready
//provider(1) is the component that glues react and redux together
//we hand the provider to reactDOM.render,
//and we hand the provider a prop of store, with our store.App
ReactDOM.render(
    <Provider store={theStoreWithSomeMiddleware}>
        <App />
    </Provider>,
    document.getElementById('root')
);



