import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { about, experience } from '../styles/about.module.css'
import { portfolio } from '../styles/projects.module.css'

export default function About({ data }) {
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={about}>
                <h1>About page</h1>

                <div className="education">
                    <h2>Education</h2>
                    <p>I'm a new graduate from the University of Washington Tacoma
                        where I received a BS in Computer Science. Below is some
                        informaiton about my education experience:
                    </p>
                    <ul>
                        <li>GPA: 3.5 / 4.0</li>
                        <li>Member of the HUSCII Coding Club</li>
                        <li>Multiple Deans List Awards</li>
                    </ul>
                    <p>I have also taken the following classes: </p>
                    <ul>
                        <li>Client Server Programming</li>
                        <li>Mobile App Programming</li>
                        <li>Database System Design</li>
                        <li>Computational Worlds</li>
                        <li>Software Development and Quality Assurance</li>
                        <li>Computer Architecture</li>
                        <li>Operating Systems</li>
                        <li>Design and Analysis of Algorithms</li>
                        <li>Data Structures</li>
                    </ul>

                </div>
                <div className={experience}>
                    <div className="experience">
                        <h2>Work Experience</h2>
                        <p>Scholar Lead with Washington State Opportunity Scholarship</p>
                        <p>Mobile App Developer for Speech Key</p>
                    </div>
                    <div className="general">
                        <h2>General Experience</h2>
                        <p>Web Development</p>
                        <p>Mobile Development</p>
                        <p>Algorithms With Python</p>
                    </div>
                </div>
                <div className={portfolio}>
                    <p className="contact">Find my experience interesting? Email me at {contact}!</p>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query AboutPage {
        contact: site {
            siteMetadata {
            contact
            }
        }
    }

`