import React from 'react'
import './Button.css';

export default function Button(props) {
    return (
        <div onClick={() => props.handleClick(props.symbol)} className="button-wrapper" style={{ backgroundColor: props.color }}>
            {/* {props.symbol==="**" ? "^" : props.symbol} */}
            {props.symbol}
        </div>
    )
}
