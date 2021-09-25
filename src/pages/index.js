import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout'
import { btn, header, list } from '../styles/home.module.css'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Home({ data }) {
  const image = getImage(data.file)
  console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div >
          <h2>Build <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ljsn6029/"><IoLogoLinkedin aria-label="Linkedin Link" size="48px" style={{ 'margin-top': '10px' }} /></a></h2>
          <h3>Create & Deploy</h3>
          <p>Software Engineer based in Washington</p>
          <Link className={btn} to="/projects">My Projects</Link>
          <div className={list}>
            <img alt="Icon for JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img alt="Icon for Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img alt="Icon for Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img alt="Icon for TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img alt="Icon for C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />

            <img alt="Icon for React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img alt="Icon for Gatsby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" />
            <img alt="Icon for PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img alt="Icon for GraphQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
            <img alt="Icon for Android" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />

            <img alt="Icon for SASS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <img alt="Icon for Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <img alt="Icon for Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img alt="Icon for NPM" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <img alt="Icon for Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

          </div>
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