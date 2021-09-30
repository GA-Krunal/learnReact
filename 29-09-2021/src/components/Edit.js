import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import './Edit.css';

export default function Edit(props) {
  const [edFname, setEdFname] = useState(props.edItem.firstName)
  const [edLname, setEdLname] = useState(props.edItem.lastName)
  const [edAge, setEdAge] = useState(props.edItem.userAge)
  const [edEmail, setEdEmail] = useState(props.edItem.userEmail)
  const [edPhoto, setEdPhoto] = useState(props.edItem.userPhoto)
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Edit Data</span></div>
          <form action="#">
            <div className="row">
              fname<input type="text" value={edFname} onChange={(e) => { setEdFname(e.target.value) }} />
            </div>
            <div className="row">
              lname<input type="text" value={edLname} onChange={(e) => { setEdLname(e.target.value) }} />
            </div>
            <div className="row">
              Age<input type="number" value={edAge} onChange={(e) => { setEdAge(e.target.value) }} />
            </div>
            <div className="row">
              email<input type="email" value={edEmail} onChange={(e) => { setEdEmail(e.target.value) }} />
            </div>
            <div className="row">
              image url<input type="url" value={edPhoto} onChange={(e) => { setEdPhoto(e.target.value) }} />
            </div>
            <div className="row button">
              <Link to="/dashboard"><input type="submit" value="Update data" onClick={() => props.updateData(edFname, edLname, edAge, edEmail, edPhoto)} /></Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
