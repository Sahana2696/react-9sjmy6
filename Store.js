import {createStore}  from 'redux';
import reducer from './reducer';

const store=createStore(reducer);
store.subscribe(function(){
  console.log("Store changing");
  localStorage.setItem("Store",JSON.stringify(store.getState()));
})

export default store;