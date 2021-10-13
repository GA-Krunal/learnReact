import React from 'react'
import LocFormButton from './LocFormButton'
import LocFormHeading from './LocFormHeading'
import LocFormInput from './LocFormInput'
import LocFormTarea from './LocFormTarea'

export default function LocationForm() {
    return (
        <div className="location-form">
           <LocFormHeading/>
            <form>
                <LocFormInput type="text" placeholder="Name" />
                <LocFormInput type="email" placeholder="Email" />
                <LocFormTarea />
                <LocFormButton />
            </form>
        </div>
    )
}
