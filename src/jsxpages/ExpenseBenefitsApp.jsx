import React from 'react'
import ReactDOM from 'react-dom/client'

import Chart from "../img/chartplaceholder.png";

import Navbar from "../components/NavbarLogo";
import CircularChart from "../components/CircularChart";

import PetrolAllowance from "../components/BenefitCard";
import GymAllowance from "../components/GymHealth";
import FlexiAllowance from "../components/FlexiAllowance";
import TravelAllowance from "../components/TravelAllowance";
import MobileAllowance from "../components/MobileAllowance";
import ProAllowance from "../components/ProfessionalAllowance";

import BenefitCard from "../components/BenefitCard";
import BarChart from '../components/BarChart';

import "../css/main.css"
import "../css/tailwind.css"

import RadialBarChart from '../components/RadialBarChart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <>
            <Navbar/>
            <div className="text-xl font-bold p-5">
                Expense and Benefits Details
            </div>
            <CircularChart/>
            <div className='expense-chart-image'>
                <BarChart
                    data={[4500, 3200, 5700, 2800,  6100, 3900]} // Replace with your monthly data
                />
            </div>
            <div className="text-xl font-bold p-5">
                Full Benefits Entitlement
            </div>

            <div style={{ marginTop: "1em" }} className='px-4 flex space-x-2'>
                <BenefitCard chartData={[30]} label='Petrol Allowance' />
                <BenefitCard chartData={[10]} label='Gym Allowance' />
                <BenefitCard chartData={[70]} label='Flexi Benefits' />
            </div>

            
            <div style={{ marginTop: "1em" }} className='px-4 flex space-x-2'>
                <BenefitCard chartData={[30]} label='Travel Allowance' />
                <BenefitCard chartData={[40]} label='Mobile Allowance' />
                <BenefitCard chartData={[80]} label='Pro Development Allowance' />
            </div>

            <div className='flex justify-end my-4 px-4 mb-24'>
                <button className='bg-[#2B69F5] text-white py-1 px-8 text-sm rounded-lg'>
                <a href="../../index.html">See All</a>
                </button>
            </div>
      
        </>
  </React.StrictMode>,
)