import React from 'react'
import FooterContactAdd from './FooterContactAdd'
import FooterContactSocial from './FooterContactSocial'

export default function FooterContact() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
                <FooterContactAdd/>
                <FooterContactSocial/>
            </div>
        </div>
    )
}
