import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Footer from "./footer/Footer"

function Layout() {
  return (
    <>
    <div>
        
    <Navbar/>
        <Outlet/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Layout