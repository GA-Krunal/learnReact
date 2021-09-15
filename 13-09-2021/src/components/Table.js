import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'; 
export default class Table extends Component {

    render() {
        let { itemsArr , delItem } = this.props
        return (
            <Grid container direction="column" alignItems="center" justifyContent = "center">
                <table className="table" style={{ width: "800px" , marginTop:"20px" }}>
                    <thead>
                        <tr>
                            <th>Task list</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsArr.map((element) =>
                            <tr key={Math.random()} style={{textAlign:"center"}}>
                                <td>{element}</td>
                                <td><Button color="secondary" variant="contained" onClick={()=>delItem(element)}><DeleteIcon /></Button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Grid>
        )
    }
}