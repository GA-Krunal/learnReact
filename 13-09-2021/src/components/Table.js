import React, { Component } from 'react'

export default class Table extends Component {
    
    render() {
        let {itemsArr} = this.props
        return (
            <table className="table">
                    <thead>
                        <tr>
                            <th>Task list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsArr.map((element) =>
                            <tr key={element}>
                                <td>{element}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
        )
    }
}
