import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>this page is unavailable</h2>
            <Link to="/dashboard"> <button> go to dashboard</button> </Link>
        </div>
    )
}
