import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Testride from "./pages/testride/Testride";
import Garage from "./pages/garage/Garage";
import Contact from "./pages/contact/Contact";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Protected from "./components/Protected";
import Admin from "./pages/admin/Admin_dashboard";
import Dashboard from "./pages/admin/Users";
import Setting from "./pages/admin/Setting";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products";
import Dynamic from "./pages/dynamic/Dynamic";
import Bmw from "./pages/garage/garage_sidenav/Bmw";
// import GlobalContext from "./GlobalContext";
// import { useState } from "react";  
import Hookform from "./pages/hook_form/Hookform";
import Example from "./components/material_react_table/Reacttable";
import LoginHook from "./pages/login/LoginHookForm";
import Signinhook from "./pages/sign-in/Signinhook";
import Signin from "./pages/sign-in/Sign-in";
import useTheme from "./store/useTheme";
function App() {
  //for context theming
  // const [theme, setTheme]= useState({
  //   backgroundColor:"#b37ec8",
  //   color: "black"
  // })
  const {theme}= useTheme();

  return (
    <div  style={{ backgroundColor:theme.primaryColor}} >
    {/* <GlobalContext.Provider value={{theme, setTheme}}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="garage" element={<Garage />} />
          <Route path="/garage/:id" element={ 
          <Garage >
            <Bmw />
          </Garage>
        } />  

          <Route path="/testride" element={<Testride />} />
          <Route path="/dynamic/:id" element={<Dynamic />} />
          <Route path="/hookform" element={<Hookform />} />


        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/loginhook" element={<LoginHook />} />


        <Route path="/signinhook" element={<Signinhook />} />
        <Route path="/sign-in" element={<Signin />} />


        <Route path="/admin" element={<Protected />}>
          <Route index element={<Admin />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/table" element={<Example />} />

      </Routes>
      {/* </GlobalContext.Provider> */}
    </div>
  );
}

export default App;
