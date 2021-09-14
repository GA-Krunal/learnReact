import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
export default class Table extends Component {

    render() {
        let { itemsArr } = this.props
        return (
            <Grid container direction="column" alignItems="center" justify = "center" >
                <table className="table" style={{ width: "400px" , marginTop:"20px" }}>
                    <thead>
                        <tr>
                            <th>Task list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsArr.map((element) =>
                            <tr key={Math.random()} style={{textAlign:"center"}}>
                                <td>{element}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Grid>
        )
    }
}
