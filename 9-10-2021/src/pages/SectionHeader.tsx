import React from 'react'
import SectionHeaderHeading from './SectionHeaderHeading'
import SectionHeaderTitle from './SectionHeaderTitle'

export default function SectionHeader(props:any) {
    return (
        <div className="section-header text-center">
            <SectionHeaderTitle title={props.title} />
            <SectionHeaderHeading heading={props.heading} />
        </div>
    )
}
