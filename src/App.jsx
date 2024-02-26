import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Testride from './pages/testride/Testride';
import Garage from './pages/garage/Garage';
import Contact from './pages/contact/Contact';
import Layout from './components/layout/Layout';
import Signin from './pages/sign-in/Sign-in';

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
      <Route path="/sign-in" element={<Signin />} />


    </Routes>
    </>
  )
}

export default App