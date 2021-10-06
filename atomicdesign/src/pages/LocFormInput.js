import React from 'react'

export default function LocFormInput(props) {
    return (
        <div className="control-group">
            <input type={props.type} className="form-control" placeholder={props.placeholder} required="required" />
        </div>
    )
}
