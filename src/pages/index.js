import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout'
import Icons from '../components/Icons'
import { btn, header } from '../styles/home.module.css'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Home({ data }) {
  const image = getImage(data.file)

  let width = 0

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  return (
    <Layout>
      <section className={header}>
        <div >
          {/* change these to react with the media width of 767 instead of conditional setting */}
          <h2 >Design, Build, Deploy</h2>
          <p >Software Engineer based in Washington </p>
          <Link className={btn} to="/projects">My Projects</Link> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ljsn6029/"><IoLogoLinkedin aria-label="Linkedin Link" size={width < 500 ? "24px" : "48px"} style={{ 'vertical-align': 'middle' }} /></a>
          <Icons />
        </div>
        {width > 800 ? <GatsbyImage image={image} alt="banner" /> : null}

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