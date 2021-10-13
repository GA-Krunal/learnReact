import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="logo">
                <Link to="/">
                    <h1>Auto<span>Wash</span></h1>
                </Link>
            </div>
        </div>
    )
}
