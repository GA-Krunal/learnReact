import React, { Component } from 'react'

export default class Table extends Component {

    render() {
        let { itemsArr } = this.props
        return (
            <div className="container" style={{ width: "400px" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsArr.map((element) =>
                            <tr key={Math.random()}>
                                <td>{element}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
