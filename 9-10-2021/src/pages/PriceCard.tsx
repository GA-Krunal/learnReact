import React from 'react'
import PriceCardButton from './PriceCardButton'

export default function PriceCard(props:any) {
    return (
        <div className="col-md-4">
            <div className={props.look}>
                <div className="price-header">
                    <h3>{props.heading}</h3>
                    <h2><span>{props.price.k1}</span><strong>{props.price.k2}</strong><span>{props.price.k3}</span></h2>
                </div>
                <div className="price-body">
                    <ul>
                        <li><i className={props.cls1}></i>Seats Washing</li>
                        <li><i className={props.cls1}></i>Vacuum Cleaning</li>
                        <li><i className={props.cls1}></i>Exterior Cleaning</li>
                        <li><i className={props.cls2}></i>Interior Wet Cleaning</li>
                        <li><i className={props.cls3}></i>Window Wiping</li>
                    </ul>
                </div>
                <PriceCardButton/>
            </div>
        </div>
    )
}
