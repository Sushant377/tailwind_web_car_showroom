import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../GlobalContext";
import { motion} from "framer-motion"


function Navbar() {
  const contextVlues =useContext(GlobalContext);
  const {theme, setTheme} = contextVlues;
  const {backgroundColor , color} = theme;

  function themeFunction(e) {
    const value = e.target.value;

    if(value==="light"){
      setTheme({backgroundColor:"white" , color: "black"})
    }
    else if(value==="dark"){
      setTheme({backgroundColor:"black" , color: "white"})
    }else{
      setTheme({backgroundColor:"#949CF7", color:"white"})
    }
  }
  return (
      <header style={{color:color, backgroundColor:backgroundColor}} className="text-gray-1200 shadow-xl body-font bg-slate-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <motion.span className="ml-3 text-xl"
            initial={{scale:0.4}}
            animate={{ scale:1.2}}
            transition={{ duration:3}}
            whileHover={{  textShadow: "0px 0px 8px rgb(255,255,255)",
              scale:[1.2,1,1.1,1,1.2,1,1.2,1,1.1,1,1.2,1,1.2,1,1.1,1,1.2,1,1.2,1.1,1,1.2,1,1.2,1,1.1,1,1.2,1,1.2,1.1,1,1.2,1,1.2,1,1.1,1,1.2,1,1.2]}}
            >SuperCars Nepal</motion.span>
          </a>

      
          <motion.nav initial={{opacity:0, x:'-100vw'}}  animate={{ opacity:1 , x:0}} transition={{duration:3}} className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </NavLink>
            <NavLink to="/garage" className="mr-5 hover:text-gray-900">
              Garage
            </NavLink>
            <NavLink to="/testride" className="mr-5 hover:text-gray-900">
              Test Ride
            </NavLink>
           
            <NavLink to="/hookform" className="mr-5 hover:text-gray-900">
              Hook Form
            </NavLink>
            <label style={{color:color, backgroundColor:backgroundColor}} >Select Theme
            <select style={{color:color, backgroundColor:backgroundColor}} onChange={themeFunction}         
 >
               <option  value=""></option>
                <motion.option  initial={{opacity:0, x:'-100vw'}}  animate={{ opacity:1 , x:0}} transition={{duration:3}} value="light">Light</motion.option>
                <option  value="dark">Night</option>
          
            </select>
            </label>
          </motion.nav> 
         <motion.div  initial={{opacity:0, x:'-100vw'}}  animate={{ opacity:1 , x:0}} transition={{duration:3}}> <NavLink to="/signinhook" className="inline-flex items-center border-0 ml-3 mr-5 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign in
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NavLink>
          <NavLink to="/loginhook" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           Log in
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NavLink></motion.div>
        </div>
        
      </header>
  );
}

export default Navbar;
