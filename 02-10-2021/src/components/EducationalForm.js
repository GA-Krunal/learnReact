import React from 'react'

const EducationalForm = (props) => {
    return (
        <div>
            <h2>enter your educational details here</h2>
            <form>
            <button onClick={props.prevStep}>back</button>
                highest education:<input type="text"/>
                marks obtained:<input type="number"/>
                <button onClick={props.nextStep}>save&next</button>
            </form>
        </div>
    )
}

export default EducationalForm
