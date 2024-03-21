import  { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Admin_footer from './Admin_footer';

function AdminLayout() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility

  function logout() {
    Cookies.remove('token', { path: '/' });
    navigate('/loginhook');
  }

  return (
    <div className="flex">
      {/* TOP Navigation Bar */}
      <div className="bg-slate-800 w-full fixed top-0 bottom-0 z-50 h-20 flex items-center pr-[80px]">
        <div className="ml-[20px] text-3xl font-bold text-white">Admin</div>
        <input type="search" placeholder='search here ' className='h-[30px] w-[200px] ml-[50px] rounded-lg' />
        <button className="text-white text-3xl justify-end ml-[770px] mr-[40px]  " onClick={() => setShowNotification(!showNotification)}>
          <IoIosNotificationsOutline />
        </button>
        <button className="text-white justify-end" onClick={logout}>
          Log Out
        </button>
      </div>

      {/* Notification Box */}
      {showNotification && (
        <div className="fixed top-24 right-4 bg-white  p-4 border border-gray-300 shadow-md rounded-md">
          {/* Notification content goes here */}
          Sorry Admin , currently it is under developement
        </div>
      )}

      {/* Side Navigation Bar */}
      <div className="bg-slate-500 text-white w-40 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <Link to="/admin" className="block py-2 px-4 text-sm hover:bg-gray-800">
            Dashboard
          </Link>
          <Link to="users" className="block py-2 px-4 text-sm hover:bg-gray-800">
            Users
          </Link>
          <NavLink to="products" className="block py-2 px-4 text-sm hover:bg-gray-800">
            Products
          </NavLink>
          <NavLink to="setting" className="block py-2 px-4 text-sm hover:bg-gray-800">
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="ml-2 mt-20  mb-6">
        <Outlet />
      </div>
      {/* Footer */}
      <div className="bg-slate-800 w-full fixed bottom-0 z-50 h-10 flex justify-between items-center">
        <Admin_footer/>
      </div>
    </div>
  );
}

export default AdminLayout;
