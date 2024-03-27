// import { useContext } from "react";
// import GlobalContext from "../../GlobalContext";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useTheme from "../../store/useTheme";

function Navbar() {
  // theming using zustand
  const {theme,setTheme,setDefault} = useTheme();
console.log(theme)
// //themeing using context 
//   const contextVlues = useContext(GlobalContext);
//   const { theme, setTheme } = contextVlues;
//   const { backgroundColor, color } = theme;

//function for mzustandf theming
function zustandTheme(e) {
  const value = e.target.value;

  if (value === "light") {
  setTheme({color:"black",bgColor:"yellow", primaryColor:"#F5DD61"});
  } else if (value === "dark") {
    setTheme({color:"blue",bgColor:"black", primaryColor:"#7469B6"});

  } else {
   setDefault();
  }
}

  // // function for contect theming
  // function themeFunction(e) {
  //   const value = e.target.value;

  //   if (value === "light") {
  //     setTheme({ backgroundColor: "white", color: "black" });
  //   } else if (value === "dark") {
  //     setTheme({ backgroundColor: "black", color: "white" });
  //   } else {
  //     setTheme({ backgroundColor: "#949CF7", color: "white" });
  //   }
  // }
  return (
    <header
      style={{ color: theme.color, backgroundColor: theme.bgColor }}
      className="text-gray-1200 shadow-xl body-font bg-slate-400"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <motion.span
            className="ml-3 text-xl"
            initial={{ scale: 0.4 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 3 }}
            whileHover={{
              textShadow: "0px 0px 8px rgb(255,255,255)",
              scale: [
                1.2, 1, 1.1, 1, 1.2, 1, 1.2, 1, 1.1, 1, 1.2, 1, 1.2, 1, 1.1, 1,
                1.2, 
              ],
            }}
            style={{ color: theme.color }}

          >
            SuperCars Nepal
          </motion.span>
        </a>

        <motion.nav
          // initial={{ opacity: 0, x: "-100vw" }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 3 }}
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
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
          {
            //for zustand theme
          }
           <select 
             className="block appearance-none border-gray-200 text-black py-2 px-4 rounded-2xl leading-tight  focus:bg-white focus:border-gray-500"

           style={{color:theme.color, backgroundColor:theme.bgColor}} onChange={zustandTheme}         
 >
               <option  value="">Def.Theme</option>
                <option  value="light">Light</option>
                <option  value="dark">Night</option>
          
            </select>

{/* 
          {
            //for global contect theming
          }
          <label style={{ color: color, backgroundColor: backgroundColor }}>
            <select
              style={{ color: color, backgroundColor: backgroundColor }}
              onChange={themeFunction}
            >
              <option value="">Default Theme</option>
              <motion.option
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                value="light"
              >
                Light
              </motion.option>
              <option value="dark">Night</option>
            </select>
          </label> */}

              {/* {adding toogle button for dark and light mode } */}
              <label className="inline-flex items-center me-5 cursor-pointer">
  <input
    onChange={zustandTheme}
    value="light"
    type="checkbox"
    defaultValue=""
    className="sr-only peer"
    defaultChecked=""
    
  />
  <span   className="absolute left-0.5 top-0.5 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-gray-900 dark:text-gray-300"
  >  </span>
  <div className="  relative w-11 h-6 bg-gray-600 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" />
  <span className="absolute right-0.5 top-0.5 transform translate-x-1/2 -translate-y-1/2 text-xs font-medium text-gray-900 dark:text-gray-300">
    
  </span>
</label>


      


        </motion.nav>
        <motion.div
          // initial={{ opacity: 0, x: "-100vw" }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 3 }}
        >
          {" "}
          <NavLink
            to="/signinhook"
            className="inline-flex items-center border-0 ml-3 mr-5 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
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
          <NavLink
            to="/loginhook"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
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
          </NavLink>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
