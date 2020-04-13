import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import {createStore} from "redux"; // Install npm install redux then import this. 
import {reducer} from './reducers/title'; // you will add this into the argument in the createStore function. 

import {Provider} from 'react-redux' //install this through npm install react-redux. And import this to surround the component where you want to render.


const store = createStore(reducer) //bind it in all together and assign it to store variable. 

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store ={store}> 
{/* Make sure to pass down the store in Provider.  */}
  <App />
</Provider>
, rootElement);
