import React from 'react'
import AboutContentListItem from './AboutContentListItem'

export default function AboutContentList() {
    return (
        <ul>
            <AboutContentListItem val="Seats washing" />
            <AboutContentListItem val="Vacuum cleaning" />
            <AboutContentListItem val="Interior wet cleaning" />
            <AboutContentListItem val="Window wiping" />
        </ul>
    )
}
