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
      <Navbar />
      <br></br>
      <Cards />
      <a className="applePay" href="./src/pages/ApplePay.html">
        <img src={folder} alt="Folder" width="10%" />
        <p>Add your Card to your Wallet for Apple Pay</p>
      </a>


      <div className="text-xl font-bold p-5">
        Expense and Benefits Overview
      </div>
      <div className='flex px-4'>
        <div className='w-1/2 rounded-xl border border-[#5C97F0]'>
          <h3 className='text-md text-center font-bold mt-4 text-[#2B69F5]'>Total Utilization</h3>
          <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5' />
        </div>
        <div className='w-1/2 bg-[#9087FB] ml-2 rounded-xl flex flex-col p-4'>
          <h3 className='text-white text-sm font-bold'>Utilized</h3>
          <h3 className='text-white text-sm'>RM 321.00</h3>
          <br></br>
          <h3 className='text-white text-sm font-bold'>Card Limit</h3>
          <h3 className='text-white text-sm'>RM 1000.00</h3>
        </div>
      </div>

      <div style={{ marginTop: "1em" }} className='px-4 flex space-x-2'>
        <BenefitCard chartData={[30]} label='Petrol Allowance' />
        <BenefitCard chartData={[40]} label='Gym Allowance' />
        <BenefitCard chartData={[70]} label='Flexi Benefits' />
      </div>

      <div className='flex justify-end my-4 px-4'>
        <button className='bg-[#2B69F5] text-white py-1 px-8 text-sm rounded-lg'>
          <a href="./src/pages/ExpenseBenefitsPage.html">See All</a>
        </button>
      </div>

      <div className="text-xl font-bold p-4">
        Recent Transactions
      </div>

      <div className='px-4'>
      <div className="flex flex-col space-y-6">
        <div className="flex">
          <div className="flex flex-col w-3/4">
            <div>GRAB RIDES-EC</div>
            <div className="text-xs text-[#949494]">Taxi & Limousines</div>

          </div>
          <div className="w-1/4 text-[#F24E30]">-RM 25.40</div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-3/4">
            <div>Anytime Fitness</div>
            <div className="text-xs text-[#949494]">Health</div>

          </div>
          <div className="w-1/4 text-[#F24E30]">-RM 190.00</div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-3/4">
            <div>Tony Roma's</div>
            <div className="text-xs text-[#949494]">Food and Beverages</div>

          </div>
          <div className="w-1/4 text-[#F24E30]">-RM 98.10</div>
        </div>
      </div>
      </div>

      <div className='flex justify-end my-4 px-4 mb-24'>
        <button className='bg-[#2B69F5] text-white py-1 px-8 text-sm rounded-lg'>
          <a href="./src/pages/ExpenseBenefitsPage.html">See All</a>
        </button>
      </div>



    </>
  </React.StrictMode>,
)