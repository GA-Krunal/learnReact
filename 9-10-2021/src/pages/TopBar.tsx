import React from 'react'
import BarTag from './BarTag'
import Logo from './Logo'

export default function TopBar() {
    return (
        <>
        <div className="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <Logo/>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <BarTag type="far fa-clock" heading="Opening Hour" para="Mon - Fri, 8:00 - 9:00"/>
                                <BarTag type="fa fa-phone-alt" heading="Call Us" para="+012 345 6789"/>
                                <BarTag type="far fa-envelope" heading="Email Us" para="info@example.com"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
