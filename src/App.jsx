import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Testride from './pages/testride/Testride';
import Garage from './pages/garage/Garage';
import Contact from './pages/contact/Contact';
import Layout from './components/layout/Layout';
import Signin from './pages/sign-in/Sign-in';
import Login from './pages/login/Login';
import Protected from './components/Protected';
import Admin from './pages/admin/Admin_dashboard';
import Dashboard from './pages/admin/Users';
import Setting from './pages/admin/Setting';
import Users from './pages/admin/Users';
import Products from './pages/admin/Products';

function App() {
  return (
    <> 
                                                
    <Routes>
      <Route path="" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/testride" element={<Testride />} />


      </Route>
      <Route path="/login" element={<Login/>} />

      <Route path="/sign-in" element={<Signin />} />
      <Route path="/admin" element={<Protected />}>
       <Route index element={<Admin/>} />
       <Route path="/admin" element={< Dashboard/>} />
       <Route path="setting" element={< Setting/>} />
       <Route path="users" element={< Users/>} />
       <Route path="products" element={< Products/>} />

        </Route> 



    </Routes>
    </>
  )
}

export default App