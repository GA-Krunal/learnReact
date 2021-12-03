import React from 'react'
import Button from '@mui/material/Button';
export default function CourseIntro3(props) {
    return (
        <div>
            <h2>course intro page 3 is here</h2>
            <Button variant="contained" color="secondary" onClick={props.IntroPrevStep}>BACK</Button>
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
        </div>
    )
}
