import React from 'react'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

export default function Service() {
    return (
        <div className="service">
        <div className="container">
            <SectionHeader title="What We Do?" heading="Premium Washing Services"/>
            <div className="row">
                <ServiceCard type="flaticon-car-wash-1" heading="Exterior Washing" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-car-wash" heading="Interior Washing" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-vacuum-cleaner" heading="Vacuum Cleaning" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-seat" heading="Seats Washing" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-car-service" heading="Window Wiping" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-car-service-2" heading="Wet Cleaning" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-car-wash" heading="Oil Changing" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
                <ServiceCard type="flaticon-brush-1" heading="Brake Reparing" para="Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"/>
            </div>
        </div>
    </div>
    )
}
