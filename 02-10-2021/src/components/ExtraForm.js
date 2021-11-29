import React from 'react'

const ExtraForm = (props) => {
    return (
        <div>
            <h2>extra form is here</h2>
            <form>
                <button onClick={props.prevStep}>back</button>
                address:<input type="text"/>
                father's name:<input type="text"/>
                mother's name:<input type="text"/>
              
            </form>
        </div>
    )
}

export default ExtraForm
