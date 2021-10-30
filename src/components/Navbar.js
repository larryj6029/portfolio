import React from 'react'
import { Link } from 'gatsby'
import useWindowDimensions from '../utils/window';
import { useState } from 'react'
import DropDown from './DropDown';

export default function Navbar() {
    const { height, width } = useWindowDimensions();

    return (
        <nav>
            <div>
                <Link to="/"><h1>{width < 767 ? "Lawrence" : "Lawrence San Nicolas"}</h1></Link>
            </div>
            <div className="links">
                {width > 767 ? <Link style={{ "fontSize": width < 767 ? "16px" : "24px" }} to="/">Home</Link> : null}
                <Link style={{ "fontSize": width < 767 ? "16px" : "24px" }} to="/about">About</Link>
                <Link style={{ "fontSize": width < 767 ? "16px" : "24px" }} to="/projects">Projects</Link>
            </div>

        </nav>
    )
}