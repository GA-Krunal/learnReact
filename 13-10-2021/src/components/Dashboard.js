import React from 'react'
import { useHistory } from "react-router-dom";
export default function Dashboard() {
    let history = useHistory();
    const logoutHandler=()=>{
        localStorage.removeItem("auth-token");
        history.push("/");
    }
    return (
        <>
        <h1>Welcome to dashboard</h1>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}
