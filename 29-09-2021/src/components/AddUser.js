import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function AddUser(props) {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [photo, setPhoto] = useState("")
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Add user</span></div>
          <form action="#">
            <div className="row">
              fname<input type="text" value={fname} onChange={(e) => { setFname(e.target.value) }} />
            </div>
            <div className="row">
              lname<input type="text" value={lname} onChange={(e) => { setLname(e.target.value) }} />
            </div>
            <div className="row">
              age<input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div className="row">
              email<input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="row">
              image url<input type="url" value={photo} onChange={(e) => { setPhoto(e.target.value) }} />
            </div>
            <div className="row button">
              <Link to="/dashboard"><input type="submit" value="Add Data" onClick={() => props.getData(fname, lname, age, email, photo)} /></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
