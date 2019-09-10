import {createStore}  from 'redux';
import reducer from './reducer';

const store=createStore(reducer);
store.subscribe(function(){
  localStorage.setItem("storeDetails",JSON.stringify(store.getState()))
})

export default store;