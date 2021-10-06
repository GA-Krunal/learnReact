import React from 'react'
import FooterContactAddHeader from './FooterContactAddHeader'
import FooterContactAddPara from './FooterContactAddPara'

export default function FooterContactAdd() {
    return (
        <>
           <FooterContactAddHeader title="Get In Touch"/>
            <FooterContactAddPara type="fa fa-map-marker-alt" data="123 Street, New York, USA"/>
            <FooterContactAddPara type="fa fa-phone-alt" data="+012 345 67890"/>
            <FooterContactAddPara type="fa fa-envelope" data="info@example.com"/>
           
        </>
    )
}
