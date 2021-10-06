import React from 'react'
import AboutContentButton from './AboutContentButton'
import AboutContentData from './AboutContentData'
import AboutContentList from './AboutContentList'

export default function AboutContent() {
    return (
        <div className="about-content">
           <AboutContentData data="Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum"/>
            <AboutContentList/>
           <AboutContentButton name="Learn More"/>
        </div>
    )
}
