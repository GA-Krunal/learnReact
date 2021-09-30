import React from 'react'
import { Link } from "react-router-dom";

export default function View(props) {
    return (
        <div>
            <div>firstName is : {props.viewItem.firstName} </div>
            <div>last name is : {props.viewItem.lastName}</div>
            <div>age is : {props.viewItem.userAge}</div>
            <div>email id is: {props.viewItem.userEmail}</div>
            <div>photo : <img src={props.viewItem.userPhoto} alt="failed to load "></img></div>
            <Link to="/dashboard"> <button> go to dashboard</button> </Link>
        </div>
    )
}
