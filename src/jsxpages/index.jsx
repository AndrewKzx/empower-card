import React from 'react'
import ReactDOM from 'react-dom/client'

import folder from "../img/folder.png"
import RecentTrans from "../img/RecentTrans.png";
import theGoodLifeImg from "../img/theGoodLifeImg.png";

import CircularChart from "../components/CircularChartIndex";
import Cards from "../components/Cards";
import Navbar from "../components/NavbarLogo";

import PetrolAllowance from "../components/PetrolAllowance";
import GymAllowance from "../components/GymHealth";
import FlexiAllowance from "../components/FlexiAllowance";


import "../css/index.css"
import "../css/tailwind.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <Cards /> 
      <a className="applePay" href="./src/pages/ApplePay.html">
      <img src={folder} alt="Folder" width="10%" />
      <p>Add your Card to your Wallet for Apple Pay</p>
      </a>


      <div className="text-xl font-bold p-5">
          Expense and Benefits Details
      </div>
      <CircularChart/>
      <div id='benefitContainer' style={{marginTop: "1em"}}>
          <PetrolAllowance/>
          <GymAllowance/>
          <FlexiAllowance/>
      </div>
      <div id='seeAll'>
        <a href="./src/pages/ExpenseBenefitsPage.html">See All</a>
      </div>

      <img className="recentTransImg" src={RecentTrans} alt="box" />
      <div id='seeAll'>
        <a href=".">View All</a>
      </div>

      <img className="recentTransImg" src={theGoodLifeImg} alt="box" />
      <div id='seeAll'>
        <a href=".">View All</a>
      </div>
      
    </>
  </React.StrictMode>,
)