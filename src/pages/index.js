import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout'
import Icons from '../components/Icons'
import { btn, header } from '../styles/home.module.css'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Home({ data }) {
  const image = getImage(data.file)
  return (
    <Layout>
      <section className={header}>
        <div >
          <h2>Build <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ljsn6029/"><IoLogoLinkedin aria-label="Linkedin Link" size="48px" style={{ 'margin-top': '10px' }} /></a></h2>
          <h3>Create & Deploy</h3>
          <p>Software Engineer based in Washington</p>
          <Link className={btn} to="/projects">My Projects</Link>
          <Icons />
        </div>

        <GatsbyImage image={image} alt="banner" />
      </section>
    </Layout>
  )
}


export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "banner.png"}) {
      id
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }

`