import React from 'react'

export default function AboutImage(props:any) {
    return (
        <div className="col-lg-6">
        <div className="about-img">
            <img src={props.src} alt="unable to load" />
        </div>
        </div>
    )
}
