import React from 'react'
import { Route , Redirect } from 'react-router'


export default function PrivateRoute({children , ...rest}) {
    let isAuth = false;
    if (localStorage.getItem("auth-token")) {
        isAuth = true;
    }
   
    return (
        <Route {...rest} render={()=>isAuth? (children):(<Redirect to={"/"}/>)}/>);
}
