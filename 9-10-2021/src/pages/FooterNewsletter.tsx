import React from 'react'
import NewsletterButton from './NewsletterButton'
import NewsletterHeading from './NewsletterHeading'
import NewsletterInput from './NewsletterInput'

export default function FooterNewsletter() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
                <NewsletterHeading val="Newsletter"/>
                <form> 
                    <NewsletterInput placeholder="Full Name"/>
                    <NewsletterInput placeholder="Email"/>
                   <NewsletterButton/>
                </form>
            </div>
        </div>
    )
}
