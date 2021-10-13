import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    let history = useHistory();

    const handleUname = (e) => {
        setUname(e.target.value)
    }
    const handlePwd = (e) => {
        setPwd(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const credentials = { email: uname, password: pwd };
        axios.post('https://reqres.in/api/login', credentials)
            .then(response => {
                localStorage.setItem("auth-token", response.data.token)
                history.push("/dashboard");
            })
            .catch(error => {
                if (error.response.status === 400) {
                    toast.error(error.response.data.error, {
                        theme: "dark",     
                      })
                }
            });
    }
    return (
        <>
            <div className="container">
            <ToastContainer  transition={Slide}/>
                <div className="wrapper">
                    <div className="title"><span>Login</span></div>
                    <form action="#" onSubmit={submitHandler}>
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input type="email" placeholder="Username" value={uname} onChange={handleUname} required />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={pwd} onChange={handlePwd} required />
                        </div>
                        <div className="row button">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
