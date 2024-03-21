import axios from "axios";
import { useState } from "react"
import {  useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loginsuccessmsg, setLoginsuccessmsg] = useState("");
  const navigate = useNavigate();


  async function onSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5002/signup",
        data: { username, password },
      });
      setError("");
      setLoginsuccessmsg(response.data);
      navigate("/admin");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
      setLoginsuccessmsg("");
    }
  }

  return (
    <div >
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center gap-4 bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div> <label htmlFor="username">
          Username:
          <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label></div>
        <div><label htmlFor="email">
          Email:
          <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label></div>
       <div> <label htmlFor="password">
          Password:
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label></div>
        <div><label htmlFor="passwordConfirm">
          Confirm Password:
          <input name="passwordConfirm" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        </label></div>
        <div>{error && <div style={{ color: "red" }}>{error}</div>}
        {loginsuccessmsg && <div style={{ color: "green" }}>{loginsuccessmsg.msg}</div>}</div>
        <div> <button type="submit" style={{ backgroundColor: "blue" }}>Submit</button> </div>
      </form>
    </div>
  );
}

export default Signin;
