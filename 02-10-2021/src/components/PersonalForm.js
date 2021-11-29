import React from 'react'

const PersonalForm = (props) => {
    return (
        <div>
            <h2>enter your personal data here</h2>
            <form>
                enter you name:<input type="text"/>
                enter your age:<input type="number"/>
                <button onClick={props.nextStep}>save&next</button>
            </form>
        </div>
    )
}

export default PersonalForm
