import React, { Component } from 'react'
import { Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';



export default class Form extends Component {

    render() {
        let { updateItems, updateValue, val } = this.props
        return (

            <Grid container direction="column" alignItems="center" justify="center">
                <form onSubmit={updateItems}>
                    <TextField id="outlined-basic" label="enter task name here" color ="primary" variant="outlined" value={val} onChange={updateValue} style={{ marginTop: "10px" }}/>
                    <Grid container direction="column" alignItems="center" justify="center" >
                        <Button color="primary" variant="contained" type="submit" style={{ marginTop: "20px" }}>Add item</Button>
                    </Grid>
                </form>
            </Grid>
        )
    }

}