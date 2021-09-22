import React from 'react'
import './Input.css';

export default function Input(props) {
    return (
        <div className="input-wrapper">
            <div className="result">
                <h2>{props.result}</h2>
            </div>
            <div className="text">
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}
