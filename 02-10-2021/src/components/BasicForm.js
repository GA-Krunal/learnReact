import React from 'react'

const BasicForm = (props) => {
    return (
        <div>
            <h2>enter your address and parents info</h2>
            <form>
                <button onClick={props.prevStep}>back</button>
                address:<input type="text"/>
                father's name:<input type="text"/>
                mother's name:<input type="text"/>
            </form>
                <button onClick={props.nextStep}>save&next</button>
        </div>
    )
}

export default BasicForm
