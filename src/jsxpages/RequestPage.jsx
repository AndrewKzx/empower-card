import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "../components/NavbarLogo";

import "../css/tailwind.css"
import "../css/Request.css"
import Modal from '../components/ModalPopup';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
          <>
              <Navbar/>
              <div className="pl-6 pr-6"> 
                <div>
                  <p className="font-bold text-xl mb-10 mt-4 text-scbBlue">Request for Limit Increase</p>
                </div>
                <form action="" className="flex flex-col" >
                  <label htmlFor="limit" className="mb-4 text-sm text-scbBlue2">Increase limit by :</label>
                  <input className="border rounded-lg pl-2 w-80 h-7 text-lg" style={{borderColor: "#2B69F5"}} type="text" />
                  <label htmlFor="Category" className="mt-6 mb-4 text-sm text-scbBlue2">Category</label>
                  <select name="Category" id="" className="border rounded-lg pl-2 w-80 h-7 text-sm" style={{borderColor: "#2B69F5"}}>
                  <option value="petrol">Petrol Allowance</option>
                  <option value="client">Client Expenses</option>
                  <option value="meal ">Meal Allowance</option>
                  </select>
                  <label htmlFor="reason" className="mt-6 mb-4 text-sm text-scbBlue2">Reason for Limit Increase</label>
                  <textarea name="reason"  className="border w-full rounded-lg pl-2 w-80 h-36 pt-1" style={{borderColor: "#2B69F5"}} cols="30" rows="10"></textarea>
                </form>
                <Modal/>
              </div>
              
          </>
    </React.StrictMode>,
  )