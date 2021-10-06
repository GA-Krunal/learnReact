import React from 'react'

export default function LocArea(props) {
    return (
        <div className="col-md-6">
            <div className="location-item">
                <i className="fa fa-map-marker-alt"></i>
                <div className="location-text">
                    <h3>{props.heading}</h3>
                    <p>{props.address}</p>
                    <p><strong>Call:</strong>{props.number}</p>
                </div>
            </div>
        </div>
    )
}
