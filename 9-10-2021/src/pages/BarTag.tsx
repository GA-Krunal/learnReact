import React from 'react'

export default function BarTag(props:any) {
    return (
        <div className="col-4">
            <div className="top-bar-item">
                <div className="top-bar-icon">
                    <i className={props.type}></i>
                </div>
                <div className="top-bar-text">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
        </div>
    )
}
