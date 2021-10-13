import React from 'react'
import LocArea from './LocArea'
import LocationForm from './LocationForm'
import SectionHeader from './SectionHeader'

export default function Location() {
    return (
        <div className="location">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                        <SectionHeader title="Washing Points" heading="Car Washing & Care Points"/>
                            <div className="row">
                                <LocArea heading="Car Washing Point" address="123 Street, New York, USA" number="+012 345 6339"/>
                                <LocArea heading="Car Painting Point" address="231 road, washington, USA" number="+012 864 6889"/>
                                <LocArea heading="Car Service Point" address="12 colony, Torronto, CANADA" number="+91 345 6439"/>
                                <LocArea heading="Car Washing Point" address="23 Street, Melbourne, AUS" number="+088 345 6589"/>   
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <LocationForm/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
