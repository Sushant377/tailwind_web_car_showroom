import Cookies from "js-cookie"
import { Navigate} from "react-router-dom";
import AdminLayout from "../pages/admin/Admin_layout";

export default function Protected() {
  const token =  Cookies.get("token");
  return  token ? <> <AdminLayout/> </>  : <Navigate to ="/login" /> 
 }
