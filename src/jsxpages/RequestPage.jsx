import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "../components/NavbarLogo";
import "../css/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
          <>
              <Navbar/>
              <div class = "pl-6" style = {{fontFamily : "Roboto"}}> 
              <div>
                <p class = "font-bold text-xl mb-10 mt-4">Ask for additional limit increase</p>
              </div>
              <form action="" class = "flex flex-col" >
                <label htmlFor="limit" class = "font-medium mb-4 text-sm">Increase limit by :</label>
                <input class = "border rounded-lg pl-2 w-80 h-7 text-lg" style={{borderColor: "#2B69F5"}} type="text" />
                <label htmlFor="Category" class = "font-medium mt-6 mb-4 text-sm">Category</label>
                <select name="Category" id="" class = "border rounded-lg pl-2 w-80 h-7 text-sm" style={{borderColor: "#2B69F5"}}>
                <option value="petrol">Petrol Allowance</option>
                <option value="client">Client Expenses</option>
                <option value="meal ">Meal Allowance</option>
                </select>
                <label htmlFor="reason" class = "font-medium mt-6 mb-4 text-sm">Reason for Limit Increase</label>
                <textarea name="reason"  class = "border rounded-lg pl-2 w-80 h-36 pt-1" style={{borderColor: "#2B69F5"}} cols="30" rows="10"></textarea>
              
                <input class = "h-8 w-28 border rounded-lg text-sm mt-6 text-white" style={{backgroundColor: "#2B69F5", fontFamily: "Roboto"}} type="submit" value="Submit Request" />
              </form>
              </div>
              
          </>
    </React.StrictMode>,
  )