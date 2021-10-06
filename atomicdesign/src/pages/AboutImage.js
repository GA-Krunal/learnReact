import React from 'react'

export default function AboutImage(props) {
    return (
        <div className="col-lg-6">
        <div className="about-img">
            <img src={props.src} alt="Image" />
        </div>
        </div>
    )
}
