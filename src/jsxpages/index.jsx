import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <div className="text-xl font-bold p-5">
          Expense and Benefits Details
      </div>
      <CircularChart/>
    </>
  </React.StrictMode>,
)
