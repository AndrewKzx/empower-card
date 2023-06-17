import React from 'react'
import ReactDOM from 'react-dom/client'

import folder from "../img/folder.png"
import RecentTrans from "../img/RecentTrans.png";
import theGoodLifeImg from "../img/theGoodLifeImg.png";

import CircularChart from "../components/CircularChartIndex";
import Cards from "../components/Cards";
import Navbar from "../components/NavbarLogo";

import BenefitCard from "../components/BenefitCard";
import GymAllowance from "../components/GymHealth";
import FlexiAllowance from "../components/FlexiAllowance";


import "../css/index.css"
import "../css/tailwind.css"
import RadialBarChart from '../components/RadialBarChart';

const chartData = [32.1]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <br></br>
      <Cards /> 
      <a className="applePay" href="./src/pages/ApplePay.html">
      <img src={folder} alt="Folder" width="10%" />
      <p>Add your Card to your Wallet for Apple Pay</p>
      </a>


      <div className="text-xl font-bold p-5">
          Expense and Benefits Overview
      </div>
      {/* <CircularChart/> */}
      <div className='flex px-8'>
      <div className='w-1/2'>
        <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5'/>
      </div>
      <div className='w-1/2 bg-[#9087FB] ml-2 rounded-xl flex flex-col p-4'>
        <h3 className='text-white text-sm font-bold'>Utilized</h3>
        <h3 className='text-white text-sm'>RM 321.00</h3>
        <br></br>
        <h3 className='text-white text-sm font-bold'>Card Limit</h3>
        <h3 className='text-white text-sm'>RM 1000.00</h3>
      </div>
      </div>
      
      <div id='benefitContainer' style={{marginTop: "1em"}}>
          <BenefitCard chartData={[30]} label='Petrol Allowance'/>
          <BenefitCard chartData={[40]} label='Gym Allowance'/>
          <BenefitCard chartData={[70]} label='Flexi Benefits'/>
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