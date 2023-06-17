import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from "../components/NavbarLogo";
import CircularChart from "../components/CircularChart";
import "../css/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <>
        <Navbar/>
        <div className="text-xl font-bold p-5">
            Expense and Details main
        </div>
        <CircularChart/>
      </>
  </React.StrictMode>,
)
