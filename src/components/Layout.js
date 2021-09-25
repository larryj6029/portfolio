import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Helmet } from 'react-helmet'

export default function Layout(props) {
    return (
        <>
            <Helmet title="Portfolio" defer={false} />
            <div className="layout">
                <Navbar />
                <div className="content">
                    {props.children}
                </div>
                <footer><p>Copyright 2021 Lawrence San Nicolas</p></footer>
            </div>
        </>
    )
}
