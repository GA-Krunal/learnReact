import React from 'react'

export default function HomecarouselItem(props:any) {
    return (
        <div className="carousel-item ">
            <img className="d-block w-100" src={props.src} alt={props.alt} />
        </div>
    )
}
