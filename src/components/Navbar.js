import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

export default function Navbar() {
    let width = 0

    if (typeof window !== undefined) {
        width = window.innerWidth;
    }
    return (
        <nav>
            <div>
                <Link className="title" to="/"><h1>{width < 767 ? "Lawrence" : "Lawrence's Portfolio"}</h1></Link>
            </div>
            <div className="links">
                <Link className="link first" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/projects">Projects</Link>
            </div>

        </nav>
    )
}