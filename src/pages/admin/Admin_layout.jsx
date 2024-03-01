import Cookies from 'js-cookie';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

function AdminLayout() {
  const navigate = useNavigate();
  
  function logout(){
    Cookies.remove("token",{path: "/"});
    navigate("/login");

  }
  return (
    <div className="flex h-screen">
      {/* Side Navigation Bar */}
      <div className="bg-gray-900 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          {/* Navigation links using React Router's Link component */}
          <Link to="/admin" className="block py-2 px-4 text-sm hover:bg-gray-800">Dashboard</Link>
          <Link to="users" className="block py-2 px-4 text-sm hover:bg-gray-800">Users</Link>
          <NavLink to="products" className="block py-2 px-4 text-sm hover:bg-gray-800">Products</NavLink>
          <NavLink to="setting" className="block py-2 px-4 text-sm hover:bg-gray-800">Settings</NavLink>

          <div  className="ml-4 text-sm" ><button className="" onClick={logout}>
            Log Out</button></div>
        </nav>
      </div>
        <Outlet/> 
    </div>
  );
}

export default AdminLayout;
