import React from 'react'
import BlogTextData from './BlogTextData'
import BlogTextHeading from './BlogTextHeading'

export default function BlogText(props) {
    return (
        <div className="blog-text">
           <BlogTextHeading heading={props.heading}/>
           <BlogTextData data={props.data}/>
        </div>
    )
}
