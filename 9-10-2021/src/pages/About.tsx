import React from 'react'
import AboutContent from './AboutContent'
import AboutImage from './AboutImage'
import SectionHeader from './SectionHeader'

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <AboutImage src="img/about.jpg" />
                    <div className="col-lg-6">
                        <SectionHeader title="About Us" heading="car washing and detailing"/>
                        <AboutContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
