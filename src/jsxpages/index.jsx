import React from 'react'
import ReactDOM from 'react-dom/client'

import folder from "../img/folder.png"
import Cards from "../components/Cards";
import Navbar from "../components/NavbarLogo";
import CircularChart from "../components/CircularChart";
import "../css/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <Cards /> 
      <button className="applePay">
      <img src={folder} alt="Folder" width="10%" />
      <p>Add your Card to your Wallet for Apple Pay</p>
      </button>
      
    </>
  </React.StrictMode>,
)
