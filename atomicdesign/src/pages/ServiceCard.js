import React from 'react'

export default function ServiceCard(props) {
    return (
        <div className="col-lg-3 col-md-6">
                    <div className="service-item">
                        <i className={props.type}></i>
                        <h3>{props.heading}</h3>
                        <p>{props.para}</p>
                    </div>
                </div>
    )
}
