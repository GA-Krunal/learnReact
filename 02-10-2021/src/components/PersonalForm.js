import React from 'react'
import Button from '@mui/material/Button';
const PersonalForm = (props) => {
    return (
        <div>
            <h2>enter your personal data here</h2>
            <form>
                enter you name:<input type="text"/>
                enter your age:<input type="number"/>
            </form>
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
        </div>
    )
}

export default PersonalForm
