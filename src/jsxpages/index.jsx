import React from 'react'
import ReactDOM from 'react-dom/client'

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <div className="text-xl font-bold p-5">
          Expense and Benefits Details
      </div>
      <CircularChart/>
    </>
=======
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
>>>>>>> a15408eb475958520525b8779251e1cb01dcbcdd
  </React.StrictMode>,
)
