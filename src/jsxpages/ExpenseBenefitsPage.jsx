import Nabar2 from "../components/Navbar2";
import Navbar from "../components/NavbarLogo";
import CircularChart from "../components/CircularChart";
import "../css/main.css"

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