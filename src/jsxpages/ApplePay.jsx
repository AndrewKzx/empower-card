import React from 'react'
import ReactDOM from 'react-dom/client'

import AppleCard from "../components/AppleCard";

import cardReader from "../img/cardReader.png";


import "../css/ApplePay.css"
import "../css/tailwind.css"

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
      
    </div>
    <a style={{color: "white"}}  href="../../index.html">Return</a>
      
    </>
  </React.StrictMode>,
)