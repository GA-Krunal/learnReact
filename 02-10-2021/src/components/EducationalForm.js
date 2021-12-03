import React from 'react'
import Button from '@mui/material/Button';
const EducationalForm = (props) => {
    return (
        <div>
            <h2>enter your educational details here</h2>
            <Button variant="contained" color="secondary" onClick={props.prevStep}>BACK</Button>
            <form>
                highest education:<input type="text"/>
                marks obtained:<input type="number"/>
            </form>
                {/* <button onClick={props.nextStep}>save&next</button> */}
              
            <Button variant="contained" onClick={props.nextStep}>NEXT</Button>
        </div>
    )
}

export default EducationalForm
