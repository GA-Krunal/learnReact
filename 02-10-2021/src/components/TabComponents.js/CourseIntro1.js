import React from 'react'
import Button from '@mui/material/Button';

export default function CourseIntro1(props) {
    return (
        <div>
            <h2>course intro page 1 is here</h2>
            {/* <button onClick={props.prevStep}>BACK</button> */}
            <Button variant="contained" color="secondary" onClick={props.prevStep}>BACK</Button>
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
            {/* <button onClick={props.nextStep}>save</button> */}
        </div>
    )
}
