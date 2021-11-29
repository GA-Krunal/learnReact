import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Testing = () => {

    const headers = {
        "app-id" :"6194cf254c104782097fa2a5"
    };
    useEffect(() => {
       
        axios.get('https://dummyapi.io/data/v1/user', { headers })
        .then(response => console.log(response.data.data));
    })
    return (
        <div>
            <h2>
                hello world testing
            </h2>
        </div>
    )
}

export default Testing
