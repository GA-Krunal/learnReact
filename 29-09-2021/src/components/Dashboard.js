import React from 'react'
import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard(props) {
    return (
        <>
            <main>
                <div className="aside">
                    <div className="aa"><Link to="/Home">Home</Link></div>
                    <div className="aa"> <Link to="/AddUser">Add user</Link></div>
                    <div className="aa"> <Link to="/About">About</Link></div>
                </div>
                <table className="table">
                    <thead>
                        <tr id="header">
                            <th>first name</th>
                            <th>last name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>photo</th>
                            <th>view</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.items.map((item) =>
                            <tr key={Math.random()}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.userAge}</td>
                                <td>{item.userEmail}</td>
                                <td>  <img src={item.userPhoto} alt="failed to load " style={{ height: "50px", width: "50px" }} /></td>
                                <td > <Link to="/view"><button onClick={() => props.viewData(item)}>view</button></Link></td>
                                <td >  <Link to="/edit"><button onClick={() => props.editData(item)}>edit</button></Link></td>
                                <td ><button onClick={() => props.deleteData(item)}>delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </>
    )
}
