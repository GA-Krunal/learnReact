import React, { Component } from 'react'

export default class Input extends Component {

    render() {
        let { updateItems, updateValue, val } = this.props
        return (
            <div className="container" style={{ width: "400px" }}>
                <div className="d-flex justify-content-center">
                    <input className="form-control " value={val} onChange={updateValue} />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={updateItems}>Add item</button>
                </div>
            </div>
        )
    }

}