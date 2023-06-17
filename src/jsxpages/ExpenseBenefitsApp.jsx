import React from 'react'
import ReactDOM from 'react-dom/client'

import Nabar2 from "../components/Navbar2";
import Navbar from "../components/NavbarLogo";
import CircularChart from "../components/CircularChart";
import Chart from "../img/chartplaceholder.png";
import ChartDeck from "../img/expensedeck.png";
import "../css/main.css"

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
            <div className='expense-chart-deck-image'>
            <img src={ChartDeck} className="chart-deck-image" alt="Chart Placeholder"/>
            </div>
           


        </>
  </React.StrictMode>,
)