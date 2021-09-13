import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: '',
        };
    }
    updateValue = (event) => {
        this.setState({ newItem: event.target.value });
    }
    updateItems = () => {
        let arr = this.state.items;
        if (this.state.newItem !== "") {
            arr.push(this.state.newItem);
            this.setState({
                items: arr,
            })
        }
        else {
            alert("input can not be empty")
        }
    }
    render() {
        return (
            <div className="container" style={{ width: "300px" }}>
                <div className="d-flex justify-content-center">
                    <input className="form-control " value={this.state.newItem} onChange={this.updateValue} />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={this.updateItems}>Add item</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((element) =>
                            <tr key={element}>
                                <td>{element}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}