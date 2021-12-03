import React from 'react'
import Button from '@mui/material/Button';
export default function CourseIntro2(props) {
    return (
        <div>
            <h2>course intro page 2 is here</h2>
            
            <Button variant="contained" color="secondary" onClick={props.IntroPrevStep}>BACK</Button>
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
        </div>
    )
}
