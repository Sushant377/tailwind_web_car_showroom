import axios from "axios";
import { useState } from "react"
import {  useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
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
    <div className="login_form">
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          Username:
          <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label htmlFor="passwordConfirm">
          Confirm Password:
          <input name="passwordConfirm" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        </label>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loginsuccessmsg && <div style={{ color: "green" }}>{loginsuccessmsg.msg}</div>}
        <button type="submit" style={{ backgroundColor: "blue" }}>Submit</button>
      </form>
    </div>
  );
}

export default Signin;
