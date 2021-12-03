import React from 'react'
import Button from '@mui/material/Button';
const ExtraForm = (props) => {
    return (
        <div>
            <h2>extra form is here</h2>
            <Button variant="contained" color="secondary" onClick={props.prevStep}>BACK</Button>
            <form>
                address:<input type="text"/>
                father's name:<input type="text"/>
                mother's name:<input type="text"/>
              
            </form>
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
        </div>
    )
}

export default ExtraForm
