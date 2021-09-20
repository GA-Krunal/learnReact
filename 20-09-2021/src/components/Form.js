import React from 'react'
import { Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

export default function Form(props) {
    let { updateItems, updatefName, updatelName, fName, lName } = props
    return (
        <form onSubmit={updateItems} style={{ marginTop: "10px" }}>
            <Grid item style={{ marginTop: "10px" }} >
                <TextField id="outlined-basic" label="Enter first name" color="primary" size="small" variant="outlined" value={fName} onChange={updatefName} />
            </Grid>
            <Grid item style={{ marginTop: "10px" }} >
                <TextField id="outlined-basic" label="Enter last name" color="primary" size="small" variant="outlined" value={lName} onChange={updatelName} />
            </Grid>
            <Grid container direction="column" alignItems="center" justifyContent="center" style={{ marginTop: "5px" }} >
                <Button color="primary" variant="contained" type="submit" style={{ marginTop: "20px" }}>Add item</Button>
            </Grid>
        </form>
    )
}







