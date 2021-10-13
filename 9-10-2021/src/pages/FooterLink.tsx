import React from 'react'
import Header from './Header'
import UsefulLink from './UsefulLink'

export default function FooterLink() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-link">
                <Header name="Popular Links"/>
                <UsefulLink name="About Us"/>
                <UsefulLink name="Contact Us"/>
                <UsefulLink name="Our Service"/>
                <UsefulLink name="Service Points"/>
                <UsefulLink name="Pricing Plan"/>
            </div>
        </div>
    )
}
