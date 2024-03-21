import axios from "axios";
import { useState } from "react"
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
const cookie = Cookies.get("token")
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loginsuccessmsg, setLoginsuccessmsg] = useState("");


async function onSubmit(e) {
    e.preventDefault();
    try{
        const response = await  axios({
            method: "post",
            url: "http://localhost:5002/login",
            data:{email , password},
        });
        console.log(response);
        setError("");   
        setLoginsuccessmsg(response.data);
        Cookies.set("token", response.data.token,{path:"/"})
        navigate("/admin");

    }catch(err){
        console.log(err.response.data)
        setError(err.response.data);
        setLoginsuccessmsg("");
    }
}
  return (
    <>
   { !cookie ? (
   <div className=" flex items-center min-h-screen justify-center ">
        <form  onSubmit={onSubmit} className= " flex flex-col justify-center items-center gap-4 bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" >
            <div><label htmlFor="username">
                Email:
                <input name="email"  type="text" value={email}  onChange={(e) => setEmail(e.target.value)} />
            </label> </div>
           <div> <label htmlFor="password">
                Pass  :
                <input name="password"  type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} />
            </label></div>
           <div> {error && <div style={{color:"red"}}>{error} </div> }
            {loginsuccessmsg && <div style={{color:"green"}}>{loginsuccessmsg.msg} </div> }</div>

           <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" ><button type="submit" style={{backgroundColor:"blue"}}>submit</button></div> 
        </form>
    </div>
   ): (
    <Navigate to={"/admin"} />
    )}

    </>
  )
}

export default Login