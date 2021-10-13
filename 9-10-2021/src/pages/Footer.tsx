import React from 'react'
import FooterContact from './FooterContact'
import FooterCopyright from './FooterCopyright'
import FooterLink from './FooterLink'
import FooterNewsletter from './FooterNewsletter'
import FooterUsefullLink from './FooterUsefullLink'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <FooterContact />
                    <FooterLink />
                    <FooterUsefullLink />
                    <FooterNewsletter />
                </div>
            </div>
            <FooterCopyright />
        </div>
    )
}
