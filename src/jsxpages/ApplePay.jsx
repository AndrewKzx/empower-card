import React from 'react'
import ReactDOM from 'react-dom/client'

import AppleCard from "../components/AppleCard";

import cardReader from "../img/cardReader.png";


import "../css/ApplePay.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div id='card'>
      <AppleCard /> 
    </div>
    <div id='reader'>
      <img src={cardReader}/>
      <p>
        Hold Near Reader
      </p>
      <a href="../../index.html">Return</a>
    </div>
      
    </>
  </React.StrictMode>,
)