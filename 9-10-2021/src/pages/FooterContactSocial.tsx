import React from 'react'
import FooterConSocialHandle from './FooterConSocialHandle'

export default function FooterContactSocial() {
    return (
        <div className="footer-social">
            <FooterConSocialHandle type="fab fa-twitter"/>
            <FooterConSocialHandle type="fab fa-facebook-f"/>
            <FooterConSocialHandle type="fab fa-youtube"/>
            <FooterConSocialHandle type="fab fa-instagram"/>
            <FooterConSocialHandle type="fab fa-linkedin-in"/>
        </div>
    )
}
