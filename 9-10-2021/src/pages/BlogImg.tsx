import React from 'react'
import BlogImgDate from './BlogImgDate'

export default function BlogImg(props:any) {
    return (
        <div className="blog-img">
            <img src={props.src} alt="Image" />
            <BlogImgDate date={props.date}/>
        </div>
    )
}
