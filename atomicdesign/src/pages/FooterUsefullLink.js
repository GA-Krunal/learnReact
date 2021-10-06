import React from 'react'
import Header from './Header'
import UsefulLink from './UsefulLink'

export default function FooterUsefullLink() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-link">
                <Header name="Useful Links"/>
                <UsefulLink name="Terms of use"/>
                <UsefulLink name="Privacy policy"/>
                <UsefulLink name="Cookies"/>
                <UsefulLink name="Help"/>
                <UsefulLink name="FQAs"/>
            </div>
        </div>
    )
}
