import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout'
import { btn, header } from '../styles/home.module.css'

export default function Home({ data }) {
  const image = getImage(data.file)
  console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Build</h2>
          <h3>Create & Deploy</h3>
          <p>Software Engineer based in Washington</p>
          <Link className={btn} to="/projects">My Projects</Link>
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