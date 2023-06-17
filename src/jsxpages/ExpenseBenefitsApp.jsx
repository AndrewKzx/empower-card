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
                <img src={Chart} className="chart-image" alt="Chart Placeholder"/>
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

            <div id='returnBox'>
                <a style={{color:"white", backgroundColor:"blue", padding:"5px", borderRadius:"5px"}} href='../../index.html'>Return</a>
            </div>
            
        </>
  </React.StrictMode>,
)