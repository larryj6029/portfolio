import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout'
import Icons from '../components/Icons'
import { btn, header } from '../styles/home.module.css'
import { IoLogoLinkedin } from 'react-icons/io'
import useWindowDimensions from '../utils/window';

export default function Home({ data }) {
  const image = getImage(data.file)
  const { height, width } = useWindowDimensions();
  console.log(width)
  if (width < 500) {
    // make small sizes 
  } else {
    // make normal sizes  
  }
  return (
    <Layout>
      <section className={header}>
        <div >
          <h3 style={{ "fontSize": width < 500 ? "24px" : "48px" }}>Design, Build, Deploy</h3>
          <p style={{ "fontSize": width < 500 ? "18px" : "24px" }}>Software Engineer based in Washington </p>
          <Link className={btn} to="/projects">My Projects</Link>   <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ljsn6029/"><IoLogoLinkedin aria-label="Linkedin Link" size={width < 500 ? "24px" : "48px"} style={{ 'vertical-align': 'middle' }} /></a>
          <Icons />
        </div>
        {width > 850 ? <GatsbyImage image={image} alt="banner" /> : null}

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