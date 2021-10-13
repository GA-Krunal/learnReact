import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
    return (
        <div className="nav-bar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/about" className="nav-item nav-link ">About</Link>
                                <Link to="/service" className="nav-item nav-link ">Service</Link>
                                <Link to="/price" className="nav-item nav-link ">price</Link>
                                <Link to="/location" className="nav-item nav-link ">washing points</Link>
                                <Link to="/blog" className="nav-item nav-link ">Blog</Link>
                            </div>
                            <Button/>
                        </div>
                    </nav>
                </div>
            </div>

    )
}
