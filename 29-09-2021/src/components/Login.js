import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css';
export default function Login() {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const handleUname = (e) => {
    setUname(e.target.value)
  }
  const handlePwd = (e) => {
    setPwd(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Login</span></div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={uname} onChange={handleUname} required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={pwd} onChange={handlePwd} required />
            </div>
            <div className="row button">
              <Link to={() => uname === "admin" && pwd === "admin" ? "/dashboard" : "/"} onClick={() => uname !== "admin" || pwd !== "admin" ? alert("invalid input") : ""}><input type="submit" value="Login" /> </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
