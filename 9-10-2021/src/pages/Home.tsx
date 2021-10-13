import React from 'react'
import HomecarouselItem from './HomecarouselItem'

export default function Home() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <HomecarouselItem src="img/carousel-1.jpg" alt="First slide"/>
                    <HomecarouselItem src="img/carousel-2.jpg" alt="Second slide"/>
                    <HomecarouselItem src="img/carousel-3.jpg" alt="Third slide"/>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    )
}
