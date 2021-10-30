import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Helmet } from 'react-helmet'

export default function Layout(props) {
    return (
        <>
            <Helmet title="Portfolio" htmlAttributes={{ lang: 'en' }} defer={false} meta={[
                {
                    name: 'description',
                    content: "This is a portfolio of projects completed by Lawrence San Nicolas.",
                },
                {
                    name: 'keywords',
                    content: "Software, portfolio, web development, react",
                },
            ]} />
            <div className="layout container">
                <Navbar />
                <div className="content">
                    {props.children}
                </div>
                <footer><p>Copyright 2021 Lawrence San Nicolas</p></footer>
            </div>
        </>
    )
}
