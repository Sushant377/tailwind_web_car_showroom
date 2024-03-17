import axios from "axios";
import { useState } from "react"
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
const cookie = Cookies.get("token")
const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loginsuccessmsg, setLoginsuccessmsg] = useState("");


async function onSubmit(e) {
    e.preventDefault();
    try{
        const response = await  axios({
            method: "post",
            url: "http://localhost:5002/login",
            data:{username , password},
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
   <div>
        <form  onSubmit={onSubmit} >
            <label htmlFor="username">
                username:
                <input name="username"  type="text" value={username}  onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label htmlFor="password">
                password:
                <input name="password"  type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <div style={{color:"red"}}>{error} </div> }
            {loginsuccessmsg && <div style={{color:"green"}}>{loginsuccessmsg.msg} </div> }

            <button type="submit" style={{backgroundColor:"blue"}}>submit</button>
        </form>
    </div>
   ): (
    <Navigate to={"/admin"} />
    )}

    </>
  )
}

export default Login